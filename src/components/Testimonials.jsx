import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Trainifie transformed our onboarding process. The analytics dashboard is hands-down the best we've used in the industry.",
      author: "Alex Rivera",
      role: "VP of Learning, TechCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
    },
    {
      text: "The live workshop features are incredibly smooth. It's like being in a real classroom, but with the power of AI assisting every step.",
      author: "Sarah Chen",
      role: "Founder, EduFuture",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    },
    {
      text: "Scaling our technical training globally was a nightmare until we found Trainifie. Now, it's just a few clicks to reach thousands.",
      author: "James Wilson",
      role: "Director of Ops, CloudNet",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
    }
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What the <span className="text-[#C5A059]">Experts Say.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 flex flex-col justify-between"
            >
              <div className="mb-8">
                <div className="text-[#C5A059] text-4xl mb-6 font-serif opacity-50">“</div>
                <p className="text-lg text-slate-300 leading-relaxed italic">
                  {item.text}
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-8 border-t border-white/5">
                <img src={item.image} alt={item.author} className="w-12 h-12 rounded-full border border-[#C5A059]/30" />
                <div>
                  <div className="text-sm font-bold text-white">{item.author}</div>
                  <div className="text-[11px] uppercase font-bold tracking-widest text-slate-500">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
