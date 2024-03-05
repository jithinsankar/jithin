import Image from "next/image";
import { PostCard } from "../components/post-card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="bg-background">
      <div className="flex flex-col justify-center items-center p-6 w-full m-auto max-w-screen-md">
        <div className="flex flex-col">
          <div className="flex flex-start flex-row items-center">
            <Image
              src="/jithin.jpg"
              width={64}
              height={64}
              alt="jithin"
              className="rounded-full"
            />

            <div className=" flex flex-col">
              <h1 className="text-3xl px-4 font-bold tracking-tight">
                Jithin Sankar
              </h1>

              <h2 className="text-xl px-4 text-muted-foreground">
                Senior Analyst
              </h2>
            </div>
          </div>
          <section className="py-4 px-2" id="about">
            IT professional, consistent gym goer, video editor, occassional FPS
            gamer and 3D artist. Interested in building SaaS applications using
            Gen AI.
          </section>

          <Separator className="mt-4" />
          <div className="mt-6">
            <h2 className="text-2xl font-medium tracking-tight" id="posts">
              Posts
            </h2>
            <PostCard />
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-medium tracking-tight" id="contact">
              Contact
            </h2>
            <section className="mt-4 p4">
              Connect with me on{" "}
              <a href="https://www.linkedin.com/in/jithinsankarnk/">LinkedIn</a>{" "}
              if you are looking for a chat.
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
