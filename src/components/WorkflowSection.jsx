import { motion } from "framer-motion";

export default function WorkflowSection() {
  const steps = [
    {
      number: "01",
      title: "Integrate Your Content",
      desc: "Easily upload and organize your training materials, videos, and documentation into our secure ecosystem."
    },
    {
      number: "02",
      title: "Deploy Interactive Learning",
      desc: "Launch live workshops and courses with real-time whiteboards, breakout rooms, and AI-driven assistance."
    },
    {
      number: "03",
      title: "Analyze & Scale Growth",
      desc: "Track every interaction through our deep-analytics dashboard to refine your strategy and scale globally."
    }
  ];

  return (
    <section className="py-32 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The Path to <span className="text-[#C5A059]">Instructional Mastery.</span>
          </motion.h2>
          <p className="subtitle-text mx-auto">A streamlined three-step workflow designed to take your training from concept to global deployment.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-[120px] font-black text-white/[0.03] absolute -top-20 -left-6 leading-none select-none">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {i < 2 && (
                <div className="hidden lg:block absolute top-10 -right-8 w-16 h-px bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
