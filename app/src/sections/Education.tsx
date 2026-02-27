import { GraduationCap, Calendar, Users, Building2 } from 'lucide-react';

const education = [
  {
    degree: 'Ph.D. in Computer Science and Technology',
    degreeCn: '计算机科学与技术 博士',
    institution: 'Northwestern Polytechnical University',
    institutionCn: '西北工业大学',
    college: 'School of Artificial Intelligence, OPtics and ElectroNics (iOPEN)',
    collegeCn: '光电与智能研究院',
    advisors: 'Prof. Xuelong Li, Dr. Bin Zhao',
    advisorsCn: '李学龙教授, 赵斌副教授',
    period: 'Sep 2022 - Jun 2027',
    periodCn: '2022-09 ~ 2027-06',
    honors: [],
  },
  {
    degree: 'Bachelor in Information and Computing Science',
    degreeCn: '信息与计算科学 本科',
    institution: 'Northwestern Polytechnical University',
    institutionCn: '西北工业大学',
    college: "Honors' College",
    collegeCn: '教育实验学院 (荣誉学院)',
    advisors: '',
    advisorsCn: '',
    period: 'Sep 2018 - Jun 2022',
    periodCn: '2018-09 ~ 2022-06',
    honors: ['Excellent Undergraduate Thesis (Top 5%)'],
    honorsCn: ['西北工业大学优秀本科论文（前5%）'],
  },
];

export function Education() {
  return (
    <section id="education" className="academic-section bg-slate-50">
      <div className="academic-container">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="academic-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <GraduationCap size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">{edu.degree}</h3>
                      <p className="text-slate-600">{edu.degreeCn}</p>
                    </div>
                  </div>
                  
                  <div className="ml-13 space-y-2">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Building2 size={16} className="text-slate-400" />
                      <span className="font-medium">{edu.institution}</span>
                      <span className="text-slate-500">({edu.institutionCn})</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="text-slate-400 text-sm">College:</span>
                      <span>{edu.college}</span>
                      <span className="text-slate-500">({edu.collegeCn})</span>
                    </div>
                    
                    {edu.advisors && (
                      <div className="flex items-center gap-2 text-slate-600">
                        <Users size={16} className="text-slate-400" />
                        <span className="text-slate-400 text-sm">Advisors:</span>
                        <span>{edu.advisors}</span>
                        <span className="text-slate-500">({edu.advisorsCn})</span>
                      </div>
                    )}
                    
                    {edu.honors.length > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-sm">Honors:</span>
                        <div className="flex flex-wrap gap-2">
                          {edu.honors.map((honor, i) => (
                            <span key={i} className="tag-primary">{honor}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm md:text-right">
                  <Calendar size={16} className="md:order-2" />
                  <span className="md:order-1">{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
