import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-8 font-medium">
            Diagnostic Excellence
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Precision Imaging.
          <br />
          <span className="relative inline-block">
            Redefined
            <motion.span
              className="absolute -bottom-2 left-0 h-[3px] bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </span>
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Advanced diagnostic scans built for accuracy, speed, and trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-block px-8 py-3 border border-muted-foreground/30 text-muted-foreground text-sm tracking-[0.25em] uppercase font-medium rounded-full cursor-default select-none">
            Coming Soon
          </span>
        </motion.div>
      </div>

      {/* Bottom fade to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-dark to-transparent" />
    </section>
  );
};

export default HeroSection;
