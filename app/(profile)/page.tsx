import Image from "next/image";
import { PostCard } from "../components/post-card";

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
              <h1 className="text-3xl px-4 font-bold">Jithin Sankar</h1>

              <h2 className="text-xl px-4">Senior Analyst</h2>
            </div>
          </div>
          <section className="py-4 px-2">
            IT professional, consistent gym goer, video editor, occassional FPS
            gamer and 3D artist
          </section>
          <div className="mt-6">
            <h1 className="text-3xl font-medium" id="posts">
              Posts
            </h1>
            <PostCard />
          </div>
        </div>
      </div>
    </main>
  );
}
