import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center p-6 w-full m-auto  bg-card max-w-screen-md">
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
          <section className="py-4">
            Experienced Senior Data Scientist at Accenture specializing in AI/ML
            solutions for regulatory compliance and consumer engagement. Skilled
            in building Gen AI-based platforms and implementing Recommender
            Systems using Graph Neural Networks. Expertise in automating
            processes, including document QA and table extraction, with a focus
            on NLP techniques and data visualization. Passionate about driving
            innovation in dynamic environments.
          </section>
        </div>
      </div>
    </main>
  );
}
