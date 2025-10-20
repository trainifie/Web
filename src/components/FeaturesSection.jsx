import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      emoji: "🎥",
      title: "Live Video Training",
      desc: "HD streaming with recording and interactive features",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&q=80"
    },
    {
      emoji: "📈",
      title: "Advanced Analytics",
      desc: "Track performance with detailed reports and insights",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
    },
    {
      emoji: "📚",
      title: "Course Management",
      desc: "Flexible course creation with drag-and-drop simplicity",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80"
    },
    {
      emoji: "✅",
      title: "Assessment Engine",
      desc: "Automated testing with instant feedback",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80"
    },
    {
      emoji: "🎯",
      title: "Progress Tracking",
      desc: "Visual learning paths with achievements",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80"
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-16">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-black border-2 border-yellow-500 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/50 transition-all"
            >
              <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-4xl mb-3">{feature.emoji}</div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
