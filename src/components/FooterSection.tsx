import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <section className="relative py-32 section-dark overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent opacity-0" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-surface-dark-foreground mb-6">
            Coming Soon<span className="text-accent">.</span>
          </h2>
          <p className="text-lg sm:text-xl text-surface-dark-foreground/50 font-light max-w-lg mx-auto mb-12">
            A new standard in diagnostic imaging is on its way.
          </p>
        </motion.div>

        {/* Email input (disabled appearance) */}
        {/* <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter your email"
                disabled
                className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-full text-white/30 placeholder:text-white/20 text-sm focus:outline-none focus:border-accent/50 cursor-not-allowed transition-colors"
              />
            </div>
            <button
              disabled
              className="px-7 py-3.5 bg-white/5 border border-white/10 text-white/30 text-sm tracking-[0.15em] uppercase rounded-full cursor-not-allowed font-medium"
            >
              Notify Me
            </button>
          </div>
        </motion.div> */}

        {/* Bottom separator and branding */}
        <motion.div
          className="mt-24 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="text-xs text-white/20 tracking-[0.2em] uppercase">
            © 2026 — NAVIRA SCANS
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterSection;
