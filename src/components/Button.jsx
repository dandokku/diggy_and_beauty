import { motion } from "framer-motion";

const Button = ({ text, className = "", onClick, disabled = false }) => {
  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.05, boxShadow: "0 8px 20px -6px rgba(215, 163, 26, 0.5)" }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
        duration: 0.15
      }}
      className={`relative px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full tracking-wide uppercase shadow-md transition-all duration-200 overflow-hidden group ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:shadow-lg"
      } ${className}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {/* Shine effect */}
      <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 transform group-hover:scale-150"></span>
      
      {/* Text with slight glow */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span className="text-shadow-sm">{text}</span>
      </span>

      {/* Ripple effect (will be added via JavaScript in your main app file) */}
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="ripple"></span>
      </span>
    </motion.button>
  );
};

export default Button;