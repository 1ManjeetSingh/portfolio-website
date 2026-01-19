import Image from "next/image";
import Heading from "./Heading";
import Card from "./Card";
import { GraduationCap, Terminal, Cpu, Database, Globe } from "lucide-react";

const projectData = [
  { title: "BloomsHeaven", desc: "E-commerce for high-end florals.", tech: ["Next.js", "MongoDB"], img: "/proj1.jpg" },
  { title: "Graduate Mentors", desc: "AI-driven EdTech platform.", tech: ["OpenAI", "Node"], img: "/proj2.jpg" },
];

export default function Projects() {
  return (
      <section
        id="education"
        className={`relative scroll-reveal min-h-screen flex items-center justify-center px-6 scroll-mt-36 sm:scroll-mt-32`}
      >
        <div className={`w-full flex flex-col items-center justify-center max-w-6xl`}>
          <Heading icon={<GraduationCap />} title="Education" />
          <div className="grid gap-6 w-full max-w-4xl">
            <Card className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-zinc-100 dark:bg-zinc-100 p-4 rounded-2xl">
                <Image src="/ism.svg" width={60} height={60} alt="IIT" className="opacity-80" />
              </div>
              <div>
                <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">IIT (ISM) Dhanbad</h3>
                <p className="text-red-500 font-medium">B.Tech in Electrical Engineering • 2020 – 2024</p>
                </div>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-2"><Terminal size={16} /> DSA in C++</div>
                  <div className="flex items-center gap-2"><Cpu size={16} /> GenAI Ops</div>
                  <div className="flex items-center gap-2"><Database size={16} /> DBMS/SQL</div>
                  <div className="flex items-center gap-2"><Globe size={16} /> Web Arch</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
  );
}