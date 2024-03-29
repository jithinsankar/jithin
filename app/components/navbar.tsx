import { Linkedin, LucideGithub, LucideTwitter } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return <div className="">
    <div className="top-0 h-14 w-full border-b-2">
      <div className="max-w-screen-md mx-auto flex items-center p-4 justify-between">
        <div className="flex space-x-4">
        <div className="flex hover:opacity-75 transition items-center">
            <Link href="/">Home</Link>
          </div>
          <div className="flex hover:opacity-75 transition items-center">
            <Link href="/notes">Notes</Link>
          </div>
          <div className="flex hover:opacity-75 transition items-center">
            <Link href="/#posts">Posts</Link>
          </div>

        </div>
        <div className="flex space-x-4">
        <div className="flex hover:opacity-75 transition items-center">
            <Link href="https://www.linkedin.com/in/jithinsankarnk/"><Linkedin className="h-4 w-4"/></Link>
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
