import { Loader2 } from "lucide-react";
import React from "react";

const PageLoader = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-8"
      data-theme="winter"
    >
      {/* Animated gradient orb with floating particles */}
      <div className="relative h-40 w-40">
        {/* Gradient backdrop with subtle pulse */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 animate-pulse-slow" />

        {/* Central orb with liquid-like border animation */}
        <div className="relative z-10 h-full w-full rounded-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-border-pulse" />
          <div className="absolute inset-4 rounded-full border border-primary/10" />
          <Loader2 className="size-12 text-primary animate-spin-slow" />
        </div>

        {/* Floating particles with staggered 3D motion */}
        {[...Array(16)].map((_, i) => {
          const angle = i * 22.5 * (Math.PI / 180);
          const distance = 60 + Math.random() * 10;
          const size = Math.random() * 6 + 4;
          const duration = 8 + Math.random() * 4;
          const delay = Math.random() * 2;
          const zOffset = Math.random() * 30 - 15;

          return (
            <div
              key={i}
              className="absolute rounded-full bg-primary animate-orbital-3d"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `calc(50% - ${size / 2}px)`,
                top: `calc(50% - ${size / 2}px)`,
                transformOrigin: `${distance}px ${zOffset}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                opacity: 0.8,
                filter: "blur(0.5px)",
              }}
            />
          );
        })}
      </div>

      {/* Text with smooth staggered animation */}
      <div className="text-center space-y-3 overflow-hidden">
        <h3
          className="text-xl font-medium opacity-0 animate-text-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Loading your experience
        </h3>
        <p
          className="text-sm opacity-0 animate-text-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          Almost there...
        </p>
      </div>

      {/* Fluid progress indicator */}
      <div className="w-56 h-1.5 rounded-full bg-base-200/50 overflow-hidden relative">
        <div className="absolute h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent animate-fluid-progress opacity-70" />
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes orbital-3d {
          0% {
            transform: rotateY(0deg) rotateZ(0deg) translateX(${60}px)
              rotateY(0deg);
            opacity: 0.8;
          }
          50% {
            opacity: 1;
            filter: blur(0px);
          }
          100% {
            transform: rotateY(360deg) rotateZ(360deg) translateX(${60}px)
              rotateY(-360deg);
            opacity: 0.8;
          }
        }
        @keyframes border-pulse {
          0%,
          100% {
            border-width: 4px;
            border-color: rgba(var(--primary) / 0.3);
          }
          50% {
            border-width: 8px;
            border-color: rgba(var(--primary) / 0.1);
          }
        }
        @keyframes fluid-progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes text-fade-in {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes spin-slow {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-orbital-3d {
          animation: orbital-3d linear infinite;
          will-change: transform, opacity, filter;
        }
        .animate-border-pulse {
          animation: border-pulse 3s ease-in-out infinite;
        }
        .animate-fluid-progress {
          animation: fluid-progress 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        .animate-text-fade-in {
          animation: text-fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
