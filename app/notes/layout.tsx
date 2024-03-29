import { Navbar } from "../components/navbar";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <div className=""><Navbar/><div className="flex flex-col justify-center p-6 w-full m-auto max-w-screen-md prose dark:prose-invert">{children}</div></div>
  }