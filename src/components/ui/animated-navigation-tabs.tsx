"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type TabItem = {
  id: number;
  tile: string;
  href?: string;
  download?: boolean;
};

type Props = {
  items: TabItem[];
};

export function AnimatedNavigationTabs({ items }: Props) {
  const [active, setActive] = useState<TabItem>(items[0]);
  const [isHover, setIsHover] = useState<TabItem | null>(null);

  return (
    <div className="relative">
      <ul className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12">
        {items.map((item) => {
          const Tag = item.href ? "a" : "button";
          return (
            <Tag
              key={item.id}
              href={item.href}
              download={item.download ? true : undefined}
              className={cn(
                "py-2 relative duration-300 transition-colors hover:!text-primary",
                active.id === item.id
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
              onClick={() => setActive(item)}
              onMouseEnter={() => setIsHover(item)}
              onMouseLeave={() => setIsHover(null)}
            >
              <div className="px-4 py-1.5 relative text-[12px] tracking-[0.08em] uppercase font-medium">
                {item.tile}
                {isHover?.id === item.id && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute bottom-0 left-0 right-0 w-full h-full bg-primary/10"
                    style={{ borderRadius: 6 }}
                  />
                )}
              </div>
              {active.id === item.id && (
                <motion.div
                  layoutId="active"
                  className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-primary"
                />
              )}
              {isHover?.id === item.id && (
                <motion.div
                  layoutId="hover"
                  className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-primary"
                />
              )}
            </Tag>
          );
        })}
      </ul>
    </div>
  );
}
