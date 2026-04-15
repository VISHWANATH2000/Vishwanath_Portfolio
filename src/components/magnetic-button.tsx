import { useRef, useState, useCallback, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps { children: ReactNode; className?: string }

/**
 * MagneticButton — magnetic pull + click ripple effect.
 */
export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    setPos({ x: (clientX - (left + width / 2)) * 0.28, y: (clientY - (top + height / 2)) * 0.28 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    const id = Date.now();
    setRipples(r => [...r, { id, x: e.clientX - left, y: e.clientY - top }]);
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 600);
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={handleClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 160, damping: 16, mass: 0.1 }}
      className={className}
      style={{ display: "inline-block", position: "relative", overflow: "hidden" }}
      tabIndex={-1}
    >
      {children}
      {ripples.map(r => (
        <span
          key={r.id}
          style={{
            position: "absolute",
            borderRadius: "9999px",
            background: "rgba(244,63,94,0.25)",
            width: 80, height: 80,
            left: r.x - 40, top: r.y - 40,
            transform: "scale(0)",
            animation: "ripple 0.55s ease-out forwards",
            pointerEvents: "none",
          }}
        />
      ))}
    </motion.div>
  );
}
