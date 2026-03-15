import { motion } from "framer-motion";
import { 
  VideoCameraIcon, 
  ChartBarIcon, 
  PuzzlePieceIcon, 
  InboxArrowDownIcon, 
  UserGroupIcon, 
  CheckCircleIcon 
} from "@heroicons/react/24/outline";

export default function FeaturesSection() {
  const features = [
    {
      icon: <VideoCameraIcon className="w-8 h-8" />,
      title: "Live Virtual Training",
      desc: "Immersive HD streaming with real-time whiteboarding and cloud recordings.",
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Advanced AI Analytics",
      desc: "Leverage machine learning to predict learner outcome and optimize curriculum.",
    },
    {
      icon: <PuzzlePieceIcon className="w-8 h-8" />,
      title: "Custom Course Builder",
      desc: "Drag-and-drop course creation with SCORM compatibility and interactive labs.",
    },
    {
      icon: <InboxArrowDownIcon className="w-8 h-8" />,
      title: "Resource Ecosystem",
      desc: "Unlimited cloud storage for learning materials, assessments, and assets.",
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Community Learning",
      desc: "Built-in discussion forums and peer-to-peer mentoring networks.",
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8" />,
      title: "Verified Credentials",
      desc: "Issue blockchain-secured certificates upon successful course completion.",
    },
  ];

  return (
    <section id="features" className="bg-[#0A0A0A] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Capabilities Built for <span className="text-[#C5A059]">Excellence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="subtitle-text mx-auto"
          >
            Trainifie combines world-class engineering with pedagogical depth to deliver the most robust learning experience on the market.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 flex flex-col items-start group"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#C5A059]/10 rounded-xl mb-8 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 w-full flex justify-end">
                <button className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#C5A059] transition-colors">
                  Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
