import { motion } from 'framer-motion';

const MotionContainer = ({
    children,
    delay = 0,
    initial = { x: -100, opacity: 0 },
    animate = { x: 0, opacity: 1 },
  }: {
    children: React.ReactNode;
    delay?: number;
    initial?: { x: number; opacity: number };
    animate?: { x: number; opacity: number };
  }) => {
    const commonAnimation = {
      initial,
      animate,
      transition: { duration: 0.5, delay },
    };
  
    return <motion.div {...commonAnimation}>{children}</motion.div>;
  };

export default MotionContainer;
