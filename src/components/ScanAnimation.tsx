import { motion } from "framer-motion";

const ScanAnimation = () => {
  return (
    <section className="relative py-32 section-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-scan-red text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Technology
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-surface-dark-foreground tracking-tight">
            See Beyond the Surface
          </h2>
        </motion.div>

        {/* CT Scanner Animation */}
        <motion.div
          className="relative flex items-center justify-center mb-32"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-white/10 animate-ring-rotate">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 rounded-full bg-scan-red glow-red" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-1.5 h-1.5 rounded-full bg-scan-red/50" />
            </div>

            {/* Middle ring */}
            <div className="absolute inset-8 rounded-full border border-white/8 animate-ring-rotate-reverse">
              <div className="absolute top-1/2 right-0 translate-x-1 -translate-y-1/2 w-2 h-2 rounded-full bg-scan-red glow-red" />
              <div className="absolute top-1/2 left-0 -translate-x-1 -translate-y-1/2 w-1 h-1 rounded-full bg-scan-red/40" />
            </div>

            {/* Inner ring */}
            <div className="absolute inset-16 rounded-full border border-white/6 animate-ring-rotate">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-scan-red animate-pulse-glow" />
            </div>

            {/* Center element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-scan-red/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-scan-red animate-pulse-glow glow-red" />
              </div>
            </div>

            {/* Scan lines */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute inset-x-0 h-[1px] scan-line animate-scan-sweep" />
            </div>

            {/* Cross-hair lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* MRI Tunnel Animation */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative w-full max-w-lg h-48 sm:h-64">
            {/* Tunnel depth rings */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                style={{
                  width: `${100 - i * 12}%`,
                  height: `${100 - i * 12}%`,
                  borderColor: `hsl(0 0% 100% / ${0.03 + i * 0.02})`,
                }}
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Horizontal scan line */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-scan-red/0 via-scan-red to-scan-red/0"
              style={{ height: "100%" }}
              animate={{ left: ["30%", "70%", "30%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-4 h-4 rounded-full bg-scan-red/30"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScanAnimation;
