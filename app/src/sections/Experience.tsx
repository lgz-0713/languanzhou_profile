import { Briefcase, Calendar, Target, Globe } from 'lucide-react';

const experiences = [
  {
    title: 'Visiting Researcher',
    titleCn: '访问研究员',
    organization: 'Khalifa University',
    organizationCn: '哈利法大学',
    location: 'Abu Dhabi, UAE',
    period: 'Jan 2025 - May 2025',
    periodCn: '2025-01 ~ 2025-05',
    advisor: 'Prof. Federico Renda',
    description: 'Collaborated with Prof. Federico Renda on developing a robotic operating system for deformable objects.',
    descriptionCn: '与哈利法大学Federico Renda教授合作，研发可变形物体机器人操作系统。',
    achievements: [
      'Led an 8-person research team to develop core deep learning strategies for robotic policy learning',
      'Introduced a new benchmark for dynamic deformable object manipulation in 3D space',
      'Submitted 1 paper to top-tier AI conference (CVPR 2026)',
      'Applied for 1 international patent (pending)',
    ],
    achievementsCn: [
      '在投论文1篇',
      '已受理发明专利1项',
    ],
  },
  {
    title: 'Research Intern',
    titleCn: '研究实习生',
    organization: 'Shanghai AI Laboratory',
    organizationCn: '上海人工智能实验室',
    location: 'Shanghai, China',
    period: 'Sep 2022 - Present',
    periodCn: '2022-09 ~ 至今',
    advisor: '',
    description: 'Independently responsible for cutting-edge research in low-light image enhancement, nighttime scene reconstruction, and universal image restoration.',
    descriptionCn: '独立负责低光图像增强、夜间场景重建及通用图像恢复等前沿方向研究，主导完成多个核心算法项目从0到1研发。',
    achievements: [
      'Led multiple core algorithm projects from 0 to 1 development',
      'Published 3 first-author papers in top venues (CVPR, IEEE TMM, etc.)',
      'Submitted 1 paper to top-tier conference (under review)',
      'Applied for 3 Chinese patents (1 granted, 2 under review)',
    ],
    achievementsCn: [
      '发表会议/期刊一作论文3篇（CVPR, IEEE TMM等）',
      '在投顶会论文1篇',
      '申请中国发明专利3项（已授权1项，公开实审2项）',
    ],
  },
  {
    title: 'International Business Development Lead',
    titleCn: '国际业务拓展负责人',
    organization: 'Northwestern Polytechnical University',
    organizationCn: '西北工业大学',
    location: 'Abu Dhabi, UAE',
    period: 'Jan 2025 - Present',
    periodCn: '2025-01 ~ 至今',
    advisor: '',
    description: 'Led business development efforts in Abu Dhabi, UAE, establishing connections with government and enterprise partners.',
    descriptionCn: '在阿联酋阿布扎比主导海外业务拓展，与当地政府和企业建立合作关系。',
    achievements: [
      'Led a 7-person part-time team including researchers, developers, and designers',
      'Organized participation in IDEX 2025 and GITEX 2025 exhibitions',
      'Delivered technical presentations and live demonstrations',
      'Secured purchase orders totaling $7.5 million',
    ],
    achievementsCn: [
      '领导7人团队，包括研究人员、开发人员和设计师',
      '组织参与IDEX 2025与GITEX 2025展会',
      '负责技术宣讲与现场演示',
      '达成购买订单总计750万美金',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="academic-section bg-white">
      <div className="academic-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="academic-card ml-4 -mt-2">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Briefcase size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{exp.title}</h3>
                      <p className="text-slate-600">{exp.titleCn}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Globe size={16} className="text-slate-400" />
                    <span className="font-medium">{exp.organization}</span>
                    <span className="text-slate-500">({exp.organizationCn})</span>
                  </div>
                  {exp.location && (
                    <p className="text-sm text-slate-500 mt-1">{exp.location}</p>
                  )}
                  {exp.advisor && (
                    <p className="text-sm text-slate-600 mt-1">
                      Advisor: {exp.advisor}
                    </p>
                  )}
                </div>
                
                <p className="text-slate-700 mb-4">{exp.description}</p>
                
                <div>
                  <h4 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                    <Target size={16} className="text-blue-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-blue-600 mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
