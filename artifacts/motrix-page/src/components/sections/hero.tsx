import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-0 py-28 lg:py-0">
        {/* Left: text + badge */}
        <motion.div
          className="flex-1 flex flex-col items-start justify-center z-10"
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6 sm:mb-8">
            All About<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Human Motion
            </span>
          </h1>

          <a
            href="https://github.com/MotrixLab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://img.shields.io/github/stars/MotrixLab?style=social"
              alt="GitHub stars"
              className="h-7 sm:h-8"
            />
          </a>
        </motion.div>

        {/* Right: hero figure with top/bottom black fade */}
        <motion.div
          className="flex-1 flex items-center justify-center lg:justify-end relative"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl">
            <img
              src={`${import.meta.env.BASE_URL}motrix-hero-figure.png`}
              alt="Human motion capture figure"
              className="w-full object-contain"
            />
            {/* Top fade: black → image */}
            <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none" />
            {/* Bottom fade: image → black */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
