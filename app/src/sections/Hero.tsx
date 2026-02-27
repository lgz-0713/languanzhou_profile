import { Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Photo Placeholder */}
          <div className="flex-shrink-0">
            <div className="w-40 h-48 md:w-48 md:h-56 rounded-lg bg-slate-200 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
              {/* Replace this div with your actual photo */}
              <div className="text-center p-4">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-slate-300 flex items-center justify-center">
                  <GraduationCap size={40} className="text-slate-500" />
                </div>
                <p className="text-xs text-slate-500 text-center">
                  Add your photo here
                  <br />
                  (400x500px recommended)
                </p>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Guanzhou Lan
            </h1>
            <p className="text-xl text-slate-600 mb-1">兰冠州</p>
            <p className="text-lg text-slate-700 mb-4">
              Ph.D. Candidate in Computer Science
            </p>
            <p className="text-slate-600 mb-6 max-w-2xl">
              AI researcher specializing in generative models, large language models 
              and vision-language models (LLM & VLM). Focused on Diffusion/Flow Matching 
              training, distillation, and efficient sampling.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <a
                href="mailto:guanzhoul@mail.nwpu.edu.cn"
                className="flex items-center gap-2 text-slate-600 hover:text-blue-700 transition-colors"
              >
                <Mail size={16} />
                <span>guanzhoul@mail.nwpu.edu.cn</span>
              </a>
              <a
                href="tel:+8617392534858"
                className="flex items-center gap-2 text-slate-600 hover:text-blue-700 transition-colors"
              >
                <Phone size={16} />
                <span>+86 17392534858</span>
              </a>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={16} />
                <span>Xi'an, China</span>
              </div>
            </div>

            {/* Affiliation */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                <span className="font-medium">School of Artificial Intelligence, OPtics and ElectroNics (iOPEN)</span>
                <br />
                Northwestern Polytechnical University (西北工业大学)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
