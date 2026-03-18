import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Project = {
  title: string;
  venue?: string;
  model: string;
  description: string;
  link: string;
};

const MOTION_CAPTURE: Project[] = [
  { title: "SMPLest-X", venue: "TPAMI'25", model: "SMPL-X", description: "An extended version of SMPLer-X with stronger foundation models.", link: "https://github.com/MotrixLab/SMPLest-X" },
  { title: "SMPLer-X", venue: "NeurIPS'23", model: "SMPL-X", description: "Scaling up EHPS towards a family of generalist foundation models.", link: "https://github.com/MotrixLab/SMPLer-X" },
  { title: "WHAC", venue: "ECCV'24", model: "SMPL-X", description: "World-grounded human pose and camera estimation from monocular videos.", link: "https://github.com/MotrixLab/WHAC" },
  { title: "AiOS", venue: "CVPR'24", model: "SMPL-X", description: "An all-in-one-stage pipeline combining detection and 3D human reconstruction.", link: "https://github.com/MotrixLab/AiOS" },
  { title: "RoboSMPLX", venue: "NeurIPS'23", model: "SMPL-X", description: "A framework to enhance the robustness of whole-body pose and shape estimation.", link: "https://github.com/MotrixLab/RoboSMPLX" },
  { title: "ADHMR", venue: "ICML'25", model: "SMPL-X", description: "A framework to align diffusion-based human mesh recovery methods via direct preference optimization.", link: "https://github.com/MotrixLab/ADHMR" },
  { title: "MKA", model: "SMPL-X", description: "Full-body 3D mesh reconstruction from single- or multi-view RGB videos.", link: "https://github.com/MotrixLab/MKA" },
  { title: "Zolly", venue: "ICCV'23", model: "SMPL", description: "3D human mesh reconstruction from perspective-distorted images.", link: "https://github.com/MotrixLab/Zolly" },
  { title: "PointHPS", venue: "IJCV'26", model: "SMPL", description: "3D HPS from point clouds captured in real-world settings.", link: "https://github.com/MotrixLab/PointHPS" },
  { title: "HMR-Benchmarks", venue: "NeurIPS'22", model: "SMPL", description: "A comprehensive benchmark of HPS datasets, backbones, and training strategies.", link: "https://github.com/MotrixLab/hmr-benchmarks" },
];

const MOTION_GENERATION: Project[] = [
  { title: "ViMoGen", venue: "ICLR'26", model: "SMPL-X", description: "A comprehensive framework that transfers knowledge from ViGen to MoGen across data, modeling, and evaluation.", link: "https://github.com/MotrixLab/ViMoGen" },
  { title: "LMM", venue: "ECCV'24", model: "SMPL-X", description: "Large Motion Model for Unified Multi-Modal Motion Generation.", link: "https://github.com/MotrixLab/LMM" },
  { title: "FineMoGen", venue: "NeurIPS'23", model: "SMPL-X", description: "Fine-Grained Spatio-Temporal Motion Generation and Editing.", link: "https://github.com/MotrixLab/FineMoGen" },
  { title: "InfiniteDance", model: "SMPL", description: "A large-scale 3D dance dataset and an MLLM-based music-to-dance model designed for robust in-the-wild generalization.", link: "https://github.com/MotrixLab/InfiniteDance" },
  { title: "InsActor", venue: "NeurIPS'23", model: "SMPL", description: "Generating physics-based human motions from language and waypoint conditions via diffusion policies.", link: "https://github.com/MotrixLab/insactor" },
  { title: "ReMoDiffuse", venue: "ICCV'23", model: "SMPL", description: "Retrieval-Augmented Motion Diffusion Model.", link: "https://github.com/MotrixLab/ReMoDiffuse" },
  { title: "MotionDiffuse", venue: "TPAMI'24", model: "SMPL", description: "Text-Driven Human Motion Generation with Diffusion Model.", link: "https://github.com/MotrixLab/MotionDiffuse" },
];

const MOTION_DATASET: Project[] = [
  { title: "HuMMan", venue: "ECCV'22", model: "SMPL", description: "Toolbox for HuMMan, a large-scale multi-modal 4D human dataset.", link: "https://github.com/MotrixLab/humman_toolbox" },
  { title: "GTA-Human", venue: "T-PAMI'24", model: "SMPL-X", description: "Toolbox for GTA-Human, a large-scale 3D human dataset generated with the GTA-V game engine.", link: "https://github.com/MotrixLab/gta-human_toolbox" },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full outline-none">
        <Card className="h-full flex flex-col bg-card/40 hover:bg-card/80 border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start mb-2">
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
            </div>
            <div className="flex flex-wrap gap-2">
              {project.venue && <Badge variant="venue">{project.venue}</Badge>}
              <Badge variant={project.model === "SMPL-X" ? "model-smplx" : "model-smpl"}>
                {project.model}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-base text-muted-foreground/90 leading-relaxed">
              {project.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              <Github size={16} />
              <span className="truncate">{new URL(project.link).pathname.substring(1)}</span>
            </div>
          </CardFooter>
        </Card>
      </a>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the frontiers of human motion capture, generation, and unified datasets.
          </p>
        </motion.div>

        <div className="space-y-24">
          {/* Motion Capture */}
          <div>
            <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-primary">Motion Capture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOTION_CAPTURE.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </div>

          {/* Motion Generation */}
          <div>
            <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-emerald-500">Motion Generation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOTION_GENERATION.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </div>

          {/* Motion Dataset */}
          <div>
            <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-indigo-500">Motion Dataset</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOTION_DATASET.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
