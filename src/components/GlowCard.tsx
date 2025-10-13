import React, { useRef } from "react";

type GlowCardProps = {
  card: {
    id: number;
    location: string;
    title: string;
    date: string;
    image: string;
  };
  children: React.ReactNode;
  index: number;
};

const GlowCard = ({  children, index }: GlowCardProps) => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", String(angle + 60));
  };
  return (
    <div
      ref={(el) => { cardRefs.current[index] = el; }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 brea-inside-avoid-column "
    >
      <div className="glow" />
      {children}
    </div>
  );
};

export default GlowCard;
