'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface FloatingGengarProps {
  cursorPosition: { x: number; y: number };
}

const FloatingGengar: React.FC<FloatingGengarProps> = ({ cursorPosition }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const dx = cursorPosition.x - position.x;
      const dy = cursorPosition.y - position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 1) {
        const speed = 0.01; // Adjust this value to change Gengar's speed
        setPosition(prev => ({
          x: prev.x + dx * speed,
          y: prev.y + dy * speed
        }));
      }
    };

    const animationId = requestAnimationFrame(updatePosition);

    return () => cancelAnimationFrame(animationId);
  }, [cursorPosition, position]);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-300 ease-out"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <Image
        src="/gengar.gif"
        alt="Floating Gengar"
        width={100}
        height={100}
        className="w-20 h-20 object-contain"
      />
    </div>
  );
};

export default FloatingGengar;

