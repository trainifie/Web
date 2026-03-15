import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "500+", label: "Courses" },
    { number: "95%", label: "Satisfaction" },
    { number: "50+", label: "Companies" },
  ];

  return (
    <section id="about" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-10 glass-card"
            >
              <div className="text-5xl font-bold text-[#C5A059] mb-2">{stat.number}</div>
              <div className="text-[11px] uppercase font-bold tracking-[0.2em] text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Platform Section 1: Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Centralized Learning</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">A Platform Built for <br /> Modern <span className="text-[#C5A059]">Dashboarding.</span></h2>
            <p className="subtitle-text mb-8">
              Gain complete visibility into your training lifecycle. Our analytics engine provides deep insights into student engagement, retention, and performance metrics.
            </p>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
                <span>Real-time engagement tracking</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
                <span>Automated reporting & AI forecasting</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
                <span>Custom API integrations</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#C5A059]/5 blur-[80px] rounded-full -z-10" />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="Dashboard visualization"
              className="rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* Platform Section 2: Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:order-last"
          >
            <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Expert Guidance</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Master Complex Skills <br /> Through <span className="text-[#C5A059]">Workshops.</span></h2>
            <p className="subtitle-text mb-8">
              Bridge the gap between theory and practice with our interactive live sessions. Connect with industry veterans in real-time virtual environments.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 glass-card">
                <div className="text-3xl font-bold text-white mb-2">Live</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Interactive Classrooms</div>
              </div>
              <div className="p-6 glass-card">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Global Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-blue-500/5 blur-[100px] rounded-full -z-10" />
            <img
              src="https://images.unsplash.com/photo-1522071823991-b96773f2c7ce?w=800&q=80"
              alt="Team training"
              className="rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
