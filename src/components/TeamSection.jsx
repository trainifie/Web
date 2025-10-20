export default function TeamSection() {
  const team = [
    {
      name: "Muhammad Mubashir",
      role: "Chief Executive Officer",
      expertise: "Operations | Training | Marketing",
      bio: "Visionary leader with 10+ years driving operational excellence and training innovation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80"
    },
    {
      name: "Deeptha",
      role: "Chief Technology Officer",
      expertise: "Software Architecture | Development | Cloud",
      bio: "Technical architect building scalable solutions and leading engineering excellence.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80"
    },
    {
      name: "Ajsal",
      role: "Chief Marketing Officer",
      expertise: "Digital Marketing | Sales | Partnerships",
      bio: "Growth strategist expanding market reach and driving customer acquisition.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80"
    },
  ];

  return (
    <section id="team" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-16">
          Meet Our Leadership
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div key={i} className="bg-gray-900 border-2 border-yellow-500 rounded-xl p-8 hover:scale-105 transition-transform">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-yellow-500 object-cover"
              />
              <h3 className="text-2xl font-bold text-yellow-400 text-center mb-2">{member.name}</h3>
              <p className="text-gray-300 text-center font-semibold mb-2">{member.role}</p>
              <p className="text-yellow-500 text-sm text-center mb-4">{member.expertise}</p>
              <p className="text-gray-400 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
