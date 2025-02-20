"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconTerminal2, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

export default function FloatingDockWrapper() {
  const links = [
    { title: "Home", icon: <IconHome className="h-full w-full" />, href: "/#home" },
    { title: "Projects", icon: <IconTerminal2 className="h-full w-full" />, href: "/#project" },
    { title: "LinkedIn", icon: <IconBrandLinkedin className="h-full w-full" />, href: "https://www.linkedin.com/in/vinh-bui-46b561220/" },
    { title: "GitHub", icon: <IconBrandGithub className="h-full w-full" />, href: "https://github.com/VinnyBui" },
  ];

  return (
    <FloatingDock
      items={links}
      mobileClassName="fixed bottom-4 right-4"
    />
  );
}
