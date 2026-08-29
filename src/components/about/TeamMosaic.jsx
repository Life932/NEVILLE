"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function TeamMosaic({ members, onSelectMember }) {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 sm:py-12 md:py-16 overflow-x-hidden z-50">
      
      {/* ================= DESKTOP & TABLET: INTERLOCKING DIAMOND MOSAIC ================= */}
      <div className="hidden md:flex flex-col items-center justify-center select-none">
        
        {/* Staggered Row 1 */}
        <div className="flex items-center justify-center gap-8 lg:gap-12">
          {members.slice(0, 3).map((member) => (
            <DiamondCard
              key={member.id}
              member={member}
              onSelect={() => onSelectMember(member)}
            />
          ))}
        </div>

        {/* Staggered Row 2 (Tucked into gaps with negative margin) */}
        <div className="flex items-center justify-center gap-8 lg:gap-12 -mt-10 lg:-mt-14">
          {members.slice(3, 7).map((member) => (
            <DiamondCard
              key={member.id}
              member={member}
              onSelect={() => onSelectMember(member)}
            />
          ))}
        </div>

        {/* Staggered Row 3 (Remaining items) */}
        {members.length > 7 && (
          <div className="flex items-center justify-center gap-8 lg:gap-12 -mt-10 lg:-mt-14">
            {members.slice(7, 10).map((member) => (
              <DiamondCard
                key={member.id}
                member={member}
                onSelect={() => onSelectMember(member)}
              />
            ))}
          </div>
        )}
      </div>

      {/* ================= MOBILE VIEW (< 768px): RESPONSIVE DIAMOND GRID ================= */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-y-16 px-4 py-8 md:hidden place-items-center">
        {members.map((member) => (
          <DiamondCard
            key={member.id}
            member={member}
            onSelect={() => onSelectMember(member)}
            isMobile
          />
        ))}
      </div>

    </div>
  );
}

// Single Rotated Diamond Card with Hover Reveal
function DiamondCard({ member, onSelect, isMobile = false }) {
  const sizeClasses = isMobile
    ? "w-36 h-36 sm:w-44 sm:h-44"
    : "w-40 h-40 lg:w-48 lg:h-48";

  return (
    <motion.button
      layoutId={`member-diamond-${member.id}`}
      whileHover={{ scale: 1.05, zIndex: 30 }}
      whileTap={{ scale: 0.96 }}
      onClick={onSelect}
      className={`group relative ${sizeClasses} rotate-45 overflow-hidden rounded-2xl border border-border/90 bg-muted shadow-neo-sm hover:shadow-neo-lg hover:border-secondary transition-all duration-300 cursor-pointer min-h-[44px] min-w-[44px]`}
      aria-label={`View profile of ${member.firstName} ${member.lastName}`}
    >
      {/* Counter-rotated image container */}
      <div className="absolute inset-0 -rotate-45 scale-[1.48] w-full h-full">
        <Image
          src={member.image}
          alt={`${member.firstName} ${member.lastName}`}
          fill
          sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
          className="object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />

        {/* Hover Overlay with Name & Role (Directly from the video) */}
        <div className="absolute inset-0 bg-background/85 dark:bg-background/90 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center z-10">
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-foreground uppercase">
            {member.firstName}
          </span>
          <span className="text-[10px] sm:text-xs font-light text-muted-foreground uppercase tracking-widest mt-0.5 line-clamp-1">
            {member.role}
          </span>
          
          {/* Subtle Accent Diamond Micro-Badge */}
          <div className="w-1.5 h-1.5 rotate-45 bg-secondary mt-2" />
        </div>
      </div>
    </motion.button>
  );
}