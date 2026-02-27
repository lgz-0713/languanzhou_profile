import { Code2, Cpu, Brain, Lightbulb } from 'lucide-react';

const skills = [
  {
    icon: Brain,
    title: 'Generative Models',
    description: 'Diffusion/Flow Matching training, distillation & efficient sampling',
  },
  {
    icon: Cpu,
    title: 'Multimodal LLMs',
    description: 'Vision-language alignment, post-training & instruction tuning',
  },
  {
    icon: Code2,
    title: 'Programming',
    description: 'Python, C++, MATLAB, PyTorch, TensorFlow',
  },
  {
    icon: Lightbulb,
    title: 'Tools',
    description: 'Linux, Git, Docker, LaTeX, Markdown',
  },
];

export function About() {
  return (
    <section id="about" className="academic-section bg-white">
      <div className="academic-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="prose prose-slate max-w-none mb-12">
          <p className="text-slate-700 leading-relaxed text-lg">
            I am a Ph.D. candidate in Computer Science at Northwestern Polytechnical University, 
            advised by Prof. Xuelong Li and Dr. Bin Zhao. My research focuses on generative models, 
            particularly diffusion models and flow matching, with applications in low-light image 
            enhancement, image restoration, and robotic manipulation.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            I have extensive experience in leading research teams and developing deep learning frameworks. 
            My work has been published in top-tier venues including CVPR, IEEE TMM, and ICPADS. 
            I am also experienced in business development and strategic partnerships, having led 
            international teams and secured significant commercial contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="academic-card flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <skill.icon size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{skill.title}</h3>
                <p className="text-sm text-slate-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
