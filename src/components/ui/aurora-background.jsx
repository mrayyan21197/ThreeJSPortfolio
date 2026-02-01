import React from "react";
import { twMerge } from "tailwind-merge";

const AuroraBackgroundComponent = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "relative flex flex-col items-center justify-center overflow-hidden bg-transparent text-white",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={twMerge(
            `absolute -inset-[10px] opacity-50 pointer-events-none
            [background:repeating-linear-gradient(100deg,transparent,transparent_7%,rgba(59,130,246,0.1)_10%,rgba(99,102,241,0.1)_15%,rgba(147,51,234,0.1)_20%,rgba(96,165,250,0.1)_25%,transparent_30%)]
            [background-size:300%_200%]
            [background-position:50%_50%]
            blur-[8px]
            animate-aurora
            [will-change:transform]`,

            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
          style={{ willChange: 'transform' }}
        ></div>
        <div
          className={twMerge(
            `absolute -inset-[10px] opacity-30 pointer-events-none
            [background:repeating-linear-gradient(100deg,transparent,transparent_7%,rgba(139,92,246,0.15)_10%,rgba(79,70,229,0.15)_15%,rgba(168,85,247,0.15)_20%,rgba(124,58,237,0.15)_25%,transparent_30%)]
            [background-size:200%_100%]
            [background-position:50%_50%]
            blur-[12px]
            animate-aurora
            [animation-delay:2s]
            mix-blend-difference
            [will-change:transform]`
          )}
          style={{ willChange: 'transform' }}
        ></div>
      </div>
      {children}
    </div>
  );
};

export const AuroraBackground = React.memo(AuroraBackgroundComponent);
