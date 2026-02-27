import { Mail, Phone, MapPin, GraduationCap, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="academic-section bg-white">
      <div className="academic-container">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="academic-card">
            <h3 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Mail size={20} className="text-blue-600" />
              Get in Touch
            </h3>
            
            <div className="space-y-4">
              <a
                href="mailto:guanzhoul@mail.nwpu.edu.cn"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Mail size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-slate-700 font-medium">guanzhoul@mail.nwpu.edu.cn</p>
                </div>
              </a>
              
              <a
                href="tel:+8617392534858"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Phone size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="text-slate-700 font-medium">+86 17392534858</p>
                </div>
              </a>
              
              <div className="flex items-center gap-3 p-3 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <MapPin size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="text-slate-700 font-medium">Xi'an, Shaanxi, China</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Affiliation */}
          <div className="academic-card">
            <h3 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-blue-600" />
              Affiliation
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="font-medium text-slate-900">School of Artificial Intelligence, OPtics and ElectroNics (iOPEN)</p>
                <p className="text-slate-600 text-sm">光电与智能研究院</p>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="font-medium text-slate-900">Northwestern Polytechnical University</p>
                <p className="text-slate-600 text-sm">西北工业大学</p>
                <p className="text-slate-500 text-sm mt-2">
                  127 West Youyi Road, Xi'an 710072, Shaanxi, China
                </p>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">
                  <span className="font-medium text-slate-700">Advisors:</span>
                  <br />
                  Prof. Xuelong Li (李学龙教授)
                  <br />
                  Dr. Bin Zhao (赵斌副教授)
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="mt-8 p-6 bg-slate-50 rounded-lg">
          <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <ExternalLink size={16} />
              Google Scholar
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <ExternalLink size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <ExternalLink size={16} />
              LinkedIn
            </a>
            <a
              href="https://www.researchgate.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <ExternalLink size={16} />
              ResearchGate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
