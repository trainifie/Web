import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Header and Intro */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to transform your training programs? Reach out for partnerships, demo requests, or inquiries.
          </p>
        </motion.div>

        {/* Contact info & images grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Info Cards & Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email Card */}
            <div className="bg-gray-900 border-2 border-yellow-500 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-2xl">
                  ✉️
                </div>
                <div>
                  <h3 className="text-yellow-400 font-bold text-lg mb-1">Email Us</h3>
                  <a href="mailto:trainifie@gmail.com" className="text-gray-300 hover:text-yellow-400 transition">
                    trainifie@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gray-900 border-2 border-yellow-500 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <h3 className="text-yellow-400 font-bold text-lg mb-1">Call Us</h3>
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-yellow-400 transition">
                    +91 8129752542
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gray-900 border-2 border-yellow-500 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="text-yellow-400 font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-300">Bangalore, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 border-2 border-yellow-500 rounded-xl p-6">
              <h3 className="text-yellow-400 font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center hover:scale-110 transition text-black font-bold text-xl">
                  𝕏
                </a>
                <a href="#" className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center hover:scale-110 transition text-black font-bold text-xl">
                  in
                </a>
                <a href="#" className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center hover:scale-110 transition text-black font-bold text-xl">
                  f
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Image with shape effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            {/* Replace URL with a more training or tech related Unsplash image if desired */}
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
              alt="Professional training environment"
              className="rounded-3xl shadow-2xl border-4 border-yellow-500"
            />
          </motion.div>
        </div>

        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">Start Your Journey Today</h3>
          <p className="text-black mb-8 text-lg font-semibold">
            Discover how Trainifie can elevate your business or personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-black text-yellow-400 font-semibold rounded-full hover:scale-105 transition">Request Demo</button>
            <button className="px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold rounded-full hover:scale-105 transition">View Pricing</button>
          </div>
        </motion.div>

        {/* decorative animated glow circles */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-bounce" />
      </div>
    </section>
  );
}