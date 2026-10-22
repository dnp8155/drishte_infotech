import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const LOGO_URL = "https://media.base44.com/images/public/6aa1598103c5862488dde6d0/29eeee12e_ChatGPTImageSep9202609_42_39PM.png";

export default function Logo({ to = "/", className, imgClassName, showText = true, light = false }) {
  return (
    <Link to={to} className={cn("flex items-center gap-2.5 shrink-0", className)}>
      <img
        src={LOGO_URL}
        alt="Drishte Infotech logo"
        className={cn("w-10 h-10 sm:w-12 sm:h-12 object-contain", imgClassName)}
      />
      {showText && (
        <span className={cn(
          "font-display font-bold tracking-tight text-base sm:text-lg leading-none whitespace-nowrap",
          light ? "text-white" : "text-foreground"
        )}>
          Drishte<span className="text-primary"> Infotech</span>
        </span>
      )}
    </Link>
  );
}