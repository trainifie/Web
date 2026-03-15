import { motion } from "framer-motion";

export default function TeamSection() {
  const team = [
    {
      name: "Muhammad Mubashir",
      role: "Chief Executive Officer",
      expertise: "Strategic Operations & Logistics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80"
    },
    {
      name: "Deeptha",
      role: "Chief Technology Officer",
      expertise: "Software Architecture & AI",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80"
    },
    {
      name: "Ajsal",
      role: "Chief Marketing Officer",
      expertise: "Digital Growth & Global Sales",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80"
    },
  ];

  return (
    <section id="team" className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-[#C5A059]">Leadership.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="subtitle-text mx-auto"
          >
            Meet the experts building the future of adaptive learning and instructional excellence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-8 inline-block">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#C5A059] to-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/5 group-hover:border-[#C5A059]/30 transition-all duration-700">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] mb-4">{member.role}</p>
              <p className="text-slate-500 text-sm max-w-[250px] mx-auto leading-relaxed">
                {member.expertise}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
