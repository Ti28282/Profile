import { motion } from 'motion/react';

export function AnimatedBackground() {
  // Generate random positions and sizes for particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Orbs */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, ${
              particle.id % 3 === 0
                ? 'rgba(99, 102, 241, 0.3)'
                : particle.id % 3 === 1
                ? 'rgba(168, 85, 247, 0.3)'
                : 'rgba(59, 130, 246, 0.3)'
            }, transparent)`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" />
          </linearGradient>
        </defs>
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.line
            key={i}
            x1={`${i * 20}%`}
            y1="0%"
            x2={`${i * 20 + 20}%`}
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.3, 0],
              x: [0, 50, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Grid Pattern */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
