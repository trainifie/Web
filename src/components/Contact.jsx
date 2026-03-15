import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-stretch">
        
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Ready to Transform Your <span className="text-[#C5A059]">Workforce?</span></h2>
          <p className="subtitle-text mb-12">
            Connect with our enterprise solutions team to schedule a personalized demo or discuss custom deployment options.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 flex items-center justify-center glass-card text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                <EnvelopeIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-[.15em] uppercase text-slate-500 mb-1">Email Us</div>
                <div className="text-xl font-bold text-white tracking-tight">trainifie@gmail.com</div>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 flex items-center justify-center glass-card text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-[.15em] uppercase text-slate-500 mb-1">Call Support</div>
                <div className="text-xl font-bold text-white tracking-tight">+91 8129752542</div>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 flex items-center justify-center glass-card text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-[.15em] uppercase text-slate-500 mb-1">Global Headquarters</div>
                <div className="text-xl font-bold text-white tracking-tight">Bangalore, India</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative lg:block hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
            alt="Office workspace"
            className="w-full h-full object-cover rounded-2xl border border-white/10 shadow-2xl grayscale"
          />
          <div className="absolute bottom-10 left-10 right-10 z-20">
             <div className="glass-card p-8">
                <p className="text-sm font-medium text-slate-200 indent-4 italic">
                  "Trainifie's enterprise support is unparalleled. We were able to migrate our entire infrastructure in less than 48 hours."
                </p>
                <div className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Global Partners Group</div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}