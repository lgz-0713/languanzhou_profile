import { Target, Eye, Bot, Brain } from 'lucide-react';

const projects = [
  {
    icon: Eye,
    title: 'Nighttime Image Enhancement & Generation',
    titleCn: '夜间图像增强与生成',
    period: 'Sep 2022 - Nov 2024',
    periodCn: '2022-09 ~ 2024-11',
    collaborator: 'Shanghai AI Lab',
    collaboratorCn: '上海人工智能实验室',
    role: 'Technical Lead',
    roleCn: '技术负责人',
    description: 'Built a visual enhancement system for complex lighting conditions, achieving technological evolution from traditional to generative models.',
    descriptionCn: '构建面向复杂光照条件的视觉增强体系，实现从传统到生成式模型的技术演进。',
    highlights: [
      {
        title: 'Reconstruction Algorithm',
        titleCn: '重建算法',
        desc: 'Proposed illumination disentanglement contrastive learning strategy, achieving high-quality night-to-day translation via GAN (IEEE TMM\'26, ICPADS\'25)',
        descCn: '提出光照解耦对比学习策略，基于GAN实现高质量夜间到日间转换',
      },
      {
        title: 'Enhancement Algorithm',
        titleCn: '增强算法',
        desc: 'Designed reflection-aware trajectory distillation strategy, achieving 8× lossless acceleration of diffusion models for real-time processing (CVPR\'25)',
        descCn: '设计反射感知的轨迹蒸馏策略，实现扩散模型8倍无损加速，达到实时处理',
      },
      {
        title: 'System Validation',
        titleCn: '系统验证',
        desc: 'Validated in surveillance, mobile terminals, and UAV scenarios, achieving algorithm deployment and commercialization',
        descCn: '在监控、移动终端、无人机等场景验证，实现算法部署和落地',
      },
    ],
    outcomes: [
      'Published 3 papers (CVPR, TMM, ICPADS)',
      'Applied for 3 patents',
    ],
    outcomesCn: [
      '发表顶会/期刊论文3篇(CVPR, TMM, ICPADS)',
      '申请专利3项',
    ],
  },
  {
    icon: Brain,
    title: 'Multimodal Image Understanding & Restoration Framework',
    titleCn: '多模态图像理解与恢复框架',
    period: 'Sep 2025 - Present',
    periodCn: '2025-09 ~ 至今',
    collaborator: 'Shanghai AI Lab',
    collaboratorCn: '上海人工智能实验室',
    role: 'Technical Lead',
    roleCn: '技术负责人',
    description: 'Building a "understanding-restoration" closed-loop universal image enhancement system.',
    descriptionCn: '构建"理解-恢复"闭环的通用图像增强系统。',
    highlights: [
      {
        title: 'Physical Understanding',
        titleCn: '物理理解',
        desc: 'Proposed VLM-based image degradation mechanism understanding, supporting physics-guided zero-shot restoration (Submitted to ICML \'26)',
        descCn: '提出基于VLM的图像退化机制理解，支持物理先验引导的零样本恢复',
      },
      {
        title: 'Efficient Restoration',
        titleCn: '高效恢复',
        desc: 'Designed MeanFlow-based All-in-One restoration algorithm, unified processing for denoising/deblurring/deraining (Work in progress)',
        descCn: '设计基于MeanFlow的All-in-One恢复算法，统一处理去噪/去模糊/去雨雾',
      },
    ],
    outcomes: [
      'Submitted 1 paper to top-tier conference (under review)',
    ],
    outcomesCn: [
      '投稿顶会论文1篇(在审)',
    ],
  },
  {
    icon: Bot,
    title: 'Deformable Object Robotic Operating System',
    titleCn: '柔性物体机器人操作系统',
    period: 'Dec 2024 - May 2025',
    periodCn: '2024-12 ~ 2025-05',
    collaborator: 'Khalifa University, UAE',
    collaboratorCn: '阿联酋哈利法大学',
    role: 'Technical Lead',
    roleCn: '技术负责人',
    description: 'Embodied intelligence research for 3D deformable objects.',
    descriptionCn: '面向三维可变形物体的具身智能研究。',
    highlights: [
      {
        title: 'Operating Strategy',
        titleCn: '操作策略',
        desc: 'Proposed Diffusion Policy-based high-dimensional action generation scheme, solving continuous state space decision problems in cloth/rope manipulation',
        descCn: '提出基于Diffusion Policy的高维动作生成方案，解决布料/绳索操作中的连续状态空间决策难题',
      },
      {
        title: 'Simulation Validation',
        titleCn: '仿真验证',
        desc: 'Built 3D deformable object manipulation Benchmark, covering multiple materials and deformation scenarios',
        descCn: '构建3D可变形物体操作Benchmark，涵盖多种材质与形变场景',
      },
    ],
    outcomes: [
      'Submitted 1 paper to top-tier conference (under review)',
      'Applied for 1 international patent (pending)',
    ],
    outcomesCn: [
      '投稿顶会论文1篇(在审)',
      '申请国际专利1项(受理中)',
    ],
  },
];

export function Research() {
  return (
    <section id="research" className="academic-section bg-white">
      <div className="academic-container">
        <h2 className="section-title">Research Projects</h2>
        
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="academic-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <project.icon size={24} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 text-lg">{project.title}</h3>
                  <p className="text-slate-600">{project.titleCn}</p>
                </div>
                <div className="text-right">
                  <span className="tag">{project.period}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-sm text-slate-500">Collaboration:</span>
                  <span className="text-sm font-medium text-slate-700">{project.collaborator}</span>
                  <span className="text-sm text-slate-500">({project.collaboratorCn})</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-slate-500">Role:</span>
                  <span className="tag-primary">{project.role}</span>
                </div>
              </div>
              
              <p className="text-slate-700 mb-6">{project.description}</p>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-medium text-slate-900 flex items-center gap-2">
                  <Target size={16} className="text-blue-600" />
                  Key Contributions
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="bg-slate-50 rounded-lg p-4">
                      <h5 className="font-medium text-slate-900 mb-1">{highlight.title}</h5>
                      <p className="text-sm text-slate-600">{highlight.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-slate-500">Outcomes:</span>
                {project.outcomes.map((outcome, i) => (
                  <span key={i} className="tag">{outcome}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
