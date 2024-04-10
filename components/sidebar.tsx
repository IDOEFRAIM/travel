import Link from "next/link";
import Image from "next/image";
import { Loader } from "lucide-react";
import { BookOpenCheck } from "lucide-react";
import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-items";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn(
      "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
      className,
    )}>
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            APP NAME
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem 
          label="Home" 
          href="/main/home"
          iconSrc="/learn.svg"
        />
        <SidebarItem 
          label="Destinations" 
          href="/main/destinations"
          iconSrc="/doubleway.svg"
        />
        <SidebarItem 
          label="Tickets" 
          href="/main/tickets"
          iconSrc='/ticket.svg'
        />
        <SidebarItem 
          label="Notification" 
          href="/main/notification"
          iconSrc="/notification.svg"
        />
      </div>

    </div>
  );
};