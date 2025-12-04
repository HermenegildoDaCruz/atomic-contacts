import { motion } from "motion/react";
export default function ErrorMessage({ open, message }) {
  return (
    <motion.dialog
      initial={{
        transform: "scale(0)",
        opacity: 0,
      }}
      whileInView={{
        transform: "scale(1)",
        opacity: 1,
      }}
      transition={{ duration: 0.4 }}
      open={open}
      className="modal error"
    >
      <h2>{message}</h2>
    </motion.dialog>
  );
}
