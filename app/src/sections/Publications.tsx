import { FileText, Github, Globe, Award } from 'lucide-react';

const publications = [
  {
    title: 'Efficient Diffusion as Low Light Enhancer',
    venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)',
    year: '2025',
    type: 'Conference Paper',
    status: 'Published',
    authors: 'Guanzhou Lan, et al.',
    firstAuthor: true,
    ccf: 'A',
    links: [
      { label: 'Project', url: '#', icon: Globe },
      { label: 'Code', url: '#', icon: Github },
      { label: 'PDF', url: '#', icon: FileText },
    ],
    description: 'Achieved 8× lossless acceleration of diffusion models for low-light image enhancement through reflection-aware trajectory distillation.',
  },
  {
    title: 'Night-to-Day Translation via Illumination Degradation Disentanglement',
    venue: 'IEEE Transactions on Multimedia (TMM)',
    year: '2026',
    type: 'Journal Paper',
    status: 'Published',
    authors: 'Guanzhou Lan, et al.',
    firstAuthor: true,
    sci: 'Q1',
    links: [
      { label: 'PDF', url: '#', icon: FileText },
    ],
    description: 'Proposed illumination disentanglement contrastive learning strategy for high-quality night-to-day image translation.',
  },
  {
    title: 'Nighttime Surveillance via Night-to-Day Translation',
    venue: 'IEEE International Conference on Parallel and Distributed Systems (ICPADS)',
    year: '2025',
    type: 'Conference Paper',
    status: 'Published',
    authors: 'Guanzhou Lan, et al.',
    firstAuthor: true,
    ccf: 'C',
    links: [
      { label: 'PDF', url: '#', icon: FileText },
    ],
    description: 'Applied night-to-day translation techniques to surveillance scenarios with practical deployment.',
  },
  {
    title: 'Dynamic Manipulation of Deformable Objects in 3D',
    venue: 'International Conference on Machine Learning (ICML)',
    year: '2026',
    type: 'Conference Paper',
    status: 'Under Review',
    authors: 'Guanzhou Lan, et al.',
    firstAuthor: true,
    links: [
      { label: 'PDF', url: '#', icon: FileText },
    ],
    description: 'Introduced a new benchmark for dynamic deformable object manipulation in 3D space using Diffusion Policy.',
  },
  {
    title: 'Understanding Degradation with Vision-Language Model',
    venue: 'International Conference on Machine Learning (ICML)',
    year: '2026',
    type: 'Conference Paper',
    status: 'Under Review',
    authors: 'Guanzhou Lan, et al.',
    firstAuthor: true,
    links: [
      { label: 'PDF', url: '#', icon: FileText },
    ],
    description: 'Proposed VLM-based image degradation mechanism understanding for physics-guided zero-shot restoration.',
  },
];

export function Publications() {
  return (
    <section id="publications" className="academic-section bg-slate-50">
      <div className="academic-container">
        <h2 className="section-title">Publications</h2>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="academic-card">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-slate-900 text-lg">{pub.title}</h3>
                    {pub.firstAuthor && (
                      <span className="tag-primary">First Author</span>
                    )}
                    {pub.ccf && (
                      <span className="tag bg-amber-50 text-amber-700">CCF-{pub.ccf}</span>
                    )}
                    {pub.sci && (
                      <span className="tag bg-green-50 text-green-700">SCI {pub.sci}</span>
                    )}
                    {pub.status === 'Under Review' && (
                      <span className="tag bg-orange-50 text-orange-700">{pub.status}</span>
                    )}
                  </div>
                  
                  <p className="text-slate-600 mb-1">{pub.venue}</p>
                  <p className="text-sm text-slate-500 mb-3">{pub.authors}</p>
                  
                  <p className="text-sm text-slate-700 mb-4">{pub.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {pub.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        className="inline-flex items-center gap-1.5 text-sm text-blue-700 hover:text-blue-900 hover:underline"
                      >
                        <link.icon size={14} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Award size={16} />
                  <span>{pub.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-slate-700">
            <span className="font-medium">Note:</span> Links to project pages, code repositories, and PDFs will be updated soon. 
            Please contact me if you need early access to any paper.
          </p>
        </div>
      </div>
    </section>
  );
}
