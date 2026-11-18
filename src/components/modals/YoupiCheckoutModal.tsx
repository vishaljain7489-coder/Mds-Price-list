import React, { useState, useEffect } from 'react';
import { 
  X, Check, ShieldCheck, Copy, CheckCircle2, 
  Smartphone, QrCode, Clock, ArrowRight, ExternalLink,
  AlertCircle
} from 'lucide-react';
import { recordNewTransaction, getYoupiSettings } from '../../data/youpiStore';

interface YoupiCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  amount: number;
  onPaymentSuccess?: (utr: string, planName: string, amount: number) => void;
  upiId?: string;
  merchantName?: string;
}

export const YoupiCheckoutModal: React.FC<YoupiCheckoutModalProps> = ({
  isOpen,
  onClose,
  planName,
  amount,
  onPaymentSuccess,
  upiId,
  merchantName
}) => {
  const settings = getYoupiSettings();
  const effectiveUpiId = upiId || settings.upiId;
  const effectiveMerchantName = merchantName || settings.merchantName;

  const [utr, setUtr] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown like YouPI-PG
  const [activeTab, setActiveTab] = useState<'qr' | 'intent'>('qr');

  useEffect(() => {
    if (!isOpen) {
      setUtr('');
      setSubmitted(false);
      setError('');
      setTimeLeft(300);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  const transactionNote = `Plan_${planName.replace(/\s+/g, '_')}`;
  const upiIntentUrl = `upi://pay?pa=${encodeURIComponent(effectiveUpiId)}&pn=${encodeURIComponent(effectiveMerchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
  
  // Real dynamic QR Code generated on the fly via high-speed CDN
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&data=${encodeURIComponent(upiIntentUrl)}`;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(effectiveUpiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitUtr = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUtr = utr.trim().replace(/[^0-9a-zA-Z]/g, '');
    
    if (cleanUtr.length < 8) {
      setError('कृपया सही 12-अंकों का UPI UTR / Transaction Ref ID दर्ज करें।');
      return;
    }

    // Automatically record in YouPI-PG Transactions ledger
    recordNewTransaction({
      planName,
      amount,
      utr: cleanUtr,
      method: activeTab === 'qr' ? 'UPI_QR' : 'PHONEPE'
    });

    setError('');
    setSubmitted(true);
    
    setTimeout(() => {
      if (onPaymentSuccess) {
        onPaymentSuccess(cleanUtr, planName, amount);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header - YouPI-PG Branding */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#E84025] to-[#FF5B26] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-base shadow-sm">
              ⚡
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 block leading-tight font-bold">
                YouPI-PG Gateway · 0% Fee UPI
              </span>
              <h3 className="font-heading-modern text-lg font-black leading-tight">
                Click & Craft Pay
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 text-xs font-mono font-bold">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              <span>{formattedTime}</span>
            </div>
            
            <button
              onClick={onClose}
              className="p-1 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          
          {/* Order Summary Card */}
          <div className="p-4 rounded-2xl bg-[#FFF6F2] border border-orange-200/80 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider block">
                Selected Plan
              </span>
              <h4 className="font-heading-modern text-base sm:text-lg font-black text-[#191C21]">
                {planName}
              </h4>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider block">
                Total Amount
              </span>
              <span className="font-heading-modern text-2xl font-black text-[#E84025]">
                ₹{amount.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {submitted ? (
            /* PAYMENT SUBMITTED SUCCESS VIEW */
            <div className="text-center py-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-heading-modern text-2xl font-black text-gray-900">
                Payment Submitted!
              </h3>
              <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                आपका UTR (<strong>{utr}</strong>) प्राप्त हो गया है। एडमिन द्वारा वेरिफिकेशन के बाद आपका प्लान और रील्स डिलीवरी डैशबोर्ड में एक्टिवेट हो जाएगा।
              </p>
              <div className="pt-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#E84025] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#d3361d] transition-all cursor-pointer"
                >
                  Close & View Dashboard →
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Payment Method Switcher: QR Code vs Direct UPI Apps */}
              <div className="flex items-center p-1 bg-gray-100 rounded-xl text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setActiveTab('qr')}
                  className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'qr'
                      ? 'bg-white text-[#E84025] shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Scan UPI QR Code</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('intent')}
                  className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'intent'
                      ? 'bg-white text-[#E84025] shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Pay with UPI Apps</span>
                </button>
              </div>

              {activeTab === 'qr' ? (
                /* TAB 1: DYNAMIC QR CODE SCANNER */
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-white border-2 border-orange-200 rounded-2xl shadow-md inline-block">
                    <img
                      src={qrCodeUrl}
                      alt="UPI Payment QR Code"
                      className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
                    />
                  </div>

                  <p className="text-xs text-gray-500">
                    Scan with <strong>Google Pay, PhonePe, Paytm, BHIM</strong> or any UPI App
                  </p>

                  {/* Copy UPI ID Pill */}
                  <div className="flex items-center gap-2 p-2 px-3 rounded-full bg-orange-50 border border-orange-200 text-xs">
                    <span className="text-gray-500 font-medium">UPI ID:</span>
                    <strong className="text-gray-900 font-mono">{upiId}</strong>
                    <button
                      onClick={handleCopyUpi}
                      className="ml-1 p-1 hover:bg-orange-100 rounded text-[#E84025] transition-colors cursor-pointer"
                      title="Copy UPI ID"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              ) : (
                /* TAB 2: MOBILE 1-CLICK APP INTENTS */
                <div className="space-y-2.5">
                  <p className="text-xs text-gray-500 text-center mb-3">
                    Click your preferred UPI app to pay directly:
                  </p>
                  
                  {/* PhonePe */}
                  <a
                    href={upiIntentUrl}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#5f259f]/5 hover:bg-[#5f259f]/10 border border-[#5f259f]/20 transition-all text-xs font-bold text-[#5f259f] group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#5f259f] text-white flex items-center justify-center font-black text-xs">
                        पे
                      </div>
                      <span className="text-sm">Pay via PhonePe</span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Google Pay */}
                  <a
                    href={upiIntentUrl}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#4285F4]/5 hover:bg-[#4285F4]/10 border border-[#4285F4]/20 transition-all text-xs font-bold text-[#4285F4] group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#4285F4] text-white flex items-center justify-center font-black text-xs">
                        G
                      </div>
                      <span className="text-sm">Pay via Google Pay</span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Paytm */}
                  <a
                    href={upiIntentUrl}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#00BAF2]/5 hover:bg-[#00BAF2]/10 border border-[#00BAF2]/20 transition-all text-xs font-bold text-[#008db8] group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#00BAF2] text-white flex items-center justify-center font-black text-xs">
                        Py
                      </div>
                      <span className="text-sm">Pay via Paytm</span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}

              {/* UTR Submission Box */}
              <form onSubmit={handleSubmitUtr} className="pt-3 border-t border-gray-100 space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider">
                    Enter 12-Digit UPI Ref / UTR No. *
                  </label>
                  <span className="text-[10px] text-gray-400">After payment</span>
                </div>

                {error && (
                  <div className="p-2.5 rounded-xl bg-red-50 text-red-600 text-xs flex items-center gap-2 border border-red-200">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="e.g. 412356789012"
                    value={utr}
                    onChange={(e) => setUtr(e.target.value)}
                    className="flex-1 bg-[#FFF6F2] border border-orange-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 font-mono font-bold focus:outline-none focus:border-[#E84025] focus:bg-white"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#E84025] hover:bg-[#d3361d] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer whitespace-nowrap"
                  >
                    Confirm & Submit →
                  </button>
                </div>
                <p className="text-[10px] text-gray-400 text-center">
                  UTR नंबर आपके बैंक/UPI ऐप (GPay, PhonePe, Paytm) की रसीद पर लिखा होता है।
                </p>
              </form>
            </>
          )}

        </div>

        {/* Bottom Security Footer */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-center gap-2 text-[11px] text-gray-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>NPCI Direct UPI Settlement · 256-Bit SSL Encrypted</span>
        </div>

      </div>
    </div>
  );
};
