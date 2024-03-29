'use client'
import { Linkedin, LucideGithub, LucideTwitter } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return <div className="">
    <div className="top-0 h-14 border-b-2 flex max-w-screen-md mx-auto ">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center space-x-4 ml-4">
        <div className={clsx("flex hover:opacity-75 transition items-center  p-2 px-4 justify-center rounded-sm",{'bg-secondary text-primary': pathname === '/',})}>
            <Link href="/">Home</Link>
          </div>
          <div className={clsx("flex hover:opacity-75 transition items-center  p-2 px-4 justify-center rounded-sm",{'bg-secondary': pathname.startsWith('/notes'),})}>
            <Link href="/notes">Notes</Link>
          </div>
          <div className="flex hover:opacity-75 transition items-center p-2 px-4 justify-center rounded-sm">
            <Link href="/#posts">Posts</Link>
          </div>

        </div>
        <div className="flex space-x-4">
        <div className="flex hover:opacity-75 transition items-center">
            <Link href="https://www.linkedin.com/in/jithinsankarnk/"><Linkedin className="h-4 w-4" /></Link>
          </div>
          <div className="flex hover:opacity-75 transition items-center">
            <Link href="https://twitter.com/jithins4nkar"><LucideTwitter className="h-4 w-4"/></Link>
          </div>
          <div className="flex hover:opacity-75 transition items-center">
            <Link href="https://github.com/jithinsankar"><LucideGithub className="h-4 w-4"/></Link>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
