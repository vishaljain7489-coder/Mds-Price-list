import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Video, UserCheck, Crosshair, Repeat, BarChart3, Check, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../../data/agencyData';
import { Badge } from '../common/Badge';

export const ServicesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-cyan-400" />;
      case 'Video':
        return <Video className="w-6 h-6 text-blue-400" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-cyan-400" />;
      case 'Crosshair':
        return <Crosshair className="w-6 h-6 text-blue-400" />;
      case 'Repeat':
        return <Repeat className="w-6 h-6 text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-blue-400" />;
      default:
        return <Flame className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#030508] overflow-hidden">
      
      {/* Background glow accents */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="cyan" className="mb-4">
            PERFORMANCE MARKETING PILLARS
          </Badge>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Everything Your Business Needs To <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
              Advertise Better.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            From granular audience engineering to dynamic scroll-stopping video hooks and high-intent lead routing.
          </p>
        </div>

        {/* 6 Frosted Glass Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-[32px] glass-card p-8 sm:p-9 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Header row: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl glass-pill flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {service.number}
                  </span>
                </div>

                {service.badge && (
                  <span className="inline-block text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-300 px-2.5 py-0.5 rounded-full border border-cyan-500/20 mb-3">
                    {service.badge}
                  </span>
                )}

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Key Deliverables with Circular Checkmark */}
                <div className="space-y-2.5 pt-4 border-t border-white/5 mb-6">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors pt-2"
              >
                <span>View Included Plans</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
