export default function AboutSection() {
  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "500+", label: "Courses" },
    { number: "95%", label: "Satisfaction" },
    { number: "50+", label: "Partners" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">About Trainifie</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Trainifie is a cutting-edge learning management platform designed to connect
              trainers, learners, and organizations seamlessly. With advanced features like
              real-time analytics, video streaming, and role-based dashboards, we're
              transforming how companies approach training.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Built on modern cloud infrastructure and powered by AI-driven insights,
              Trainifie delivers measurable results and exceptional learning experiences.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
              alt="Business meeting"
              className="rounded-2xl shadow-2xl border-2 border-yellow-500"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-gray-900 rounded-xl border border-yellow-500 hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-gray-400 uppercase text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
