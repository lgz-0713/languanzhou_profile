import { Award, Trophy, Star, Medal } from 'lucide-react';

const awards = [
  {
    title: 'School-level Scholarship',
    titleCn: '西北工业大学校级奖学金',
    organization: 'Northwestern Polytechnical University',
    year: '2022-2025',
    icon: Star,
    description: 'Awarded annually for academic excellence during Ph.D. studies.',
  },
  {
    title: 'China College Students Internet+ Competition',
    titleCn: '中国互联网+创新创业大赛',
    level: 'Silver Award in Shaanxi Province',
    levelCn: '省级银奖',
    organization: 'Shaanxi Province',
    year: '2023',
    icon: Trophy,
    description: 'Recognized for innovative project in artificial intelligence and robotics.',
  },
  {
    title: 'Excellent Undergraduate Thesis',
    titleCn: '西北工业大学优秀本科论文',
    level: 'Top 5%',
    levelCn: '前5%',
    organization: 'Northwestern Polytechnical University',
    year: '2022',
    icon: Medal,
    description: 'Awarded for outstanding undergraduate research and thesis work.',
  },
];

const patents = [
  {
    title: 'Chinese Invention Patents',
    count: 3,
    status: '1 granted, 2 under review',
    statusCn: '已授权1项，公开实审2项',
    description: 'Related to low-light image enhancement and diffusion model acceleration.',
  },
  {
    title: 'International Patent',
    count: 1,
    status: 'Pending',
    statusCn: '受理中',
    description: 'Related to deformable object robotic manipulation.',
  },
];

export function Awards() {
  return (
    <section id="awards" className="academic-section bg-slate-50">
      <div className="academic-container">
        <h2 className="section-title">Honors & Patents</h2>
        
        {/* Awards */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Award size={20} className="text-blue-600" />
            Honors & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <div key={index} className="academic-card">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                    <award.icon size={20} className="text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">{award.title}</h4>
                    <p className="text-sm text-slate-600">{award.titleCn}</p>
                    {award.level && (
                      <p className="text-sm text-slate-700 mt-1">
                        {award.level} <span className="text-slate-500">({award.levelCn})</span>
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-slate-500">{award.organization}</span>
                      <span className="tag">{award.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Patents */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Medal size={20} className="text-blue-600" />
            Patents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {patents.map((patent, index) => (
              <div key={index} className="academic-card">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-600">{patent.count}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">{patent.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      {patent.status} <span className="text-slate-500">({patent.statusCn})</span>
                    </p>
                    <p className="text-sm text-slate-500 mt-2">{patent.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
