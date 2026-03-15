export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">Trainifie</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-8">
              Revolutionizing professional development through AI-driven insights and interactive instructional design. Empowering the global workforce, one learner at a time.
            </p>
            <div className="flex space-x-6 text-slate-500">
               <span className="hover:text-white transition-colors cursor-pointer font-bold uppercase tracking-widest text-[10px]">Twitter / 𝕏</span>
               <span className="hover:text-white transition-colors cursor-pointer font-bold uppercase tracking-widest text-[10px]">LinkedIn</span>
               <span className="hover:text-white transition-colors cursor-pointer font-bold uppercase tracking-widest text-[10px]">GitHub</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[.2em] text-white mb-8">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="hover:text-[#C5A059] transition-colors cursor-pointer">Live Classrooms</li>
              <li className="hover:text-[#C5A059] transition-colors cursor-pointer">AI Analytics</li>
              <li className="hover:text-[#C5A059] transition-colors cursor-pointer">Marketplace</li>
              <li className="hover:text-[#C5A059] transition-colors cursor-pointer">Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[.2em] text-white mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="hover:text-[#C5A059] transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-[#C5A059] transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-[#C5A059] transition-colors cursor-pointer">Press</li>
              <li className="hover:text-[#C5A059] transition-colors cursor-pointer">Partners</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[.2em] text-white mb-8">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="hover:text-[#C5A059] transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-[#C5A059] transition-colors cursor-pointer">Community</li>
              <li className="hover:text-[#C5A059] transition-colors cursor-pointer">Privacy</li>
              <li className="hover:text-[#C5A059] transition-colors cursor-pointer">Terms</li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-600">
            © {currentYear} Trainifie Corporation. All rights reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase font-bold tracking-widest text-slate-600">
             <span className="hover:text-white transition-colors cursor-pointer">Security</span>
             <span className="hover:text-white transition-colors cursor-pointer">Status</span>
             <span className="hover:text-white transition-colors cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
