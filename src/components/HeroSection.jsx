import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden px-6 py-20">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-2xl text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Transform Learning</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
            Through Innovation
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
          Trainifie revolutionizes corporate and personal training with cutting-edge technology,
          powerful analytics, and interactive learning experiences.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-yellow-500/50">
          Get Started Free
        </button>
      </motion.div>

      {/* Hero Image from Unsplash */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
        className="mt-12 md:mt-0 md:ml-12 z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
          alt="Team collaboration"
          className="w-full max-w-md md:max-w-xl rounded-2xl shadow-2xl border-4 border-yellow-500"
        />
      </motion.div>

      {/* Animated decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-10 animate-pulse" />
    </section>
  );
}
