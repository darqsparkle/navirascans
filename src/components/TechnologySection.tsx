import { motion } from "framer-motion";

const technologies = [
  {
    name: "CT Scan",
    description: "Multi-slice computed tomography with sub-millimeter precision",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 sm:w-16 sm:h-16">
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="32" cy="32" r="12" stroke="hsl(0 79% 45%)" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="3" fill="hsl(0 79% 45%)" />
        <line x1="4" y1="32" x2="20" y2="32" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <line x1="44" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <line x1="32" y1="4" x2="32" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <line x1="32" y1="44" x2="32" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      </svg>
    ),
  },
  {
    name: "MRI Scan",
    description: "High-field magnetic resonance for unmatched soft tissue contrast",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 sm:w-16 sm:h-16">
        <rect x="8" y="16" width="48" height="32" rx="16" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <rect x="14" y="20" width="36" height="24" rx="12" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <rect x="20" y="24" width="24" height="16" rx="8" stroke="hsl(0 79% 45%)" strokeWidth="1.5" />
        <line x1="20" y1="32" x2="44" y2="32" stroke="hsl(0 79% 45%)" strokeWidth="0.5" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Digital X-Ray",
    description: "Low-dose digital radiography with AI-enhanced image clarity",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 sm:w-16 sm:h-16">
        <rect x="16" y="8" width="32" height="48" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <rect x="20" y="12" width="24" height="36" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
        <line x1="26" y1="20" x2="26" y2="44" stroke="hsl(0 79% 45%)" strokeWidth="1" opacity="0.6" />
        <line x1="32" y1="16" x2="32" y2="48" stroke="hsl(0 79% 45%)" strokeWidth="1.5" />
        <line x1="38" y1="20" x2="38" y2="44" stroke="hsl(0 79% 45%)" strokeWidth="1" opacity="0.6" />
        <circle cx="32" cy="32" r="2" fill="hsl(0 79% 45%)" />
      </svg>
    ),
  },
  {
    name: "Ultrasound",
    description: "Real-time imaging with advanced 3D/4D reconstruction",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 sm:w-16 sm:h-16">
        <path d="M20 40 C20 24 32 12 32 12 C32 12 44 24 44 40" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M24 38 C24 28 32 18 32 18 C32 18 40 28 40 38" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <path d="M28 36 C28 30 32 24 32 24 C32 24 36 30 36 36" stroke="hsl(0 79% 45%)" strokeWidth="1.5" />
        <circle cx="32" cy="44" r="3" stroke="hsl(0 79% 45%)" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="44" r="1" fill="hsl(0 79% 45%)" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const TechnologySection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Every Angle. Every Detail.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card hover:border-accent/30 transition-all duration-500 cursor-default"
            >
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-500 mb-6">
                {tech.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 tracking-tight">{tech.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {tech.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-accent/0 group-hover:bg-accent/40 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
