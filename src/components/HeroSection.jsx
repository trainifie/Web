import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-20 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#EAD09F]">Premium EdTech Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
            Skill Up with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-500">
              Infinite Possibility.
            </span>
          </h1>
          
          <p className="subtitle-text mb-12">
            Trainifie provides corporate and individual learners with high-impact instructional design, advanced analytics, and AI-powered learning paths.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="btn-primary">
              Explore All Courses
            </button>
            <button className="btn-outline">
              Company Solutions
            </button>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:block hidden"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80"
              alt="Students collaborating"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
            />
          </div>
          {/* Decorative Background Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-[100px] -z-10" />
          <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
        </motion.div>
      </div>

      {/* Core Methodology Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mt-12 border-t border-white/5 pt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {[
            { label: "Instructional Design", desc: "Crafting narratives that resonate and educate." },
            { label: "Predictive Analytics", desc: "Understanding learner behavior before they skip." },
            { label: "Global Scalability", desc: "Deployment ready for a workforce of thousands." }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">{item.label}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
