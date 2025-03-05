import { motion } from "framer-motion";

const TypingSignature = () => {
  const text = "Rushabh".split(""); // Split each letter for animation

  return (
    <motion.div style={{ display: "flex", fontSize: "48px", fontFamily: "'Miss Fajardose', cursive", color: "var(--accent-color)" }}>
      {text.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.5, duration: 0.5 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypingSignature;
