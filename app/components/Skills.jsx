import Image from "next/image";
import Heading from "./Heading";
import {
  Code2, Cpu, Server, Database, Terminal, Smartphone, Search,
  Globe, GitBranch, Cloud, ShieldCheck, FileCode, Coffee, Layout,
  Layers, Download, FileText
} from "lucide-react";

export default function Projects() {
  return (
    <section
        id="skills"
        className={`relative scroll-reveal min-h-screen flex items-center justify-center px-6 scroll-my-64 sm:scroll-my-32`}
      >
        <div className={`w-full flex flex-col items-center justify-center max-w-6xl`}>
          <Heading icon={<Cpu className="w-8 h-8" />} title="Technical Arsenal" />

          <div className="grid gap-10 w-full max-w-5xl">
            {[
              {
                category: "Programming Languages",
                skills: [
                  { n: "HTML5", i: <Globe /> },
                  { n: "CSS3", i: <Layout /> },
                  { n: "JavaScript", i: <FileCode /> },
                  { n: "TypeScript", i: <Code2 /> },
                  { n: "C/C++", i: <Terminal /> },
                  { n: "Java", i: <Coffee /> },
                  { n: "SQL", i: <Database /> },
                ]
              },
              {
                category: "Frameworks & Technologies",
                skills: [
                  { n: "React.js", i: <Smartphone /> },
                  { n: "Next.js", i: <Layers /> },
                  { n: "Node.js", i: <Server /> },
                  { n: "Express.js", i: <Globe /> },
                  { n: "MongoDB", i: <Database /> },
                  { n: "Tailwind CSS", i: <Layout /> },
                  { n: "Bootstrap", i: <Layout /> },
                ]
              },
              {
                category: "CS Concepts & Tools",
                skills: [
                  { n: "Git & GitHub", i: <GitBranch /> },
                  { n: "API Design", i: <Globe /> },
                  { n: "SEO", i: <Search /> },
                  { n: "Cloud Computing", i: <Cloud /> },
                  { n: "DBMS", i: <Database /> },
                  { n: "Operating Systems", i: <Cpu /> },
                  { n: "Docker", i: <Smartphone /> },
                ]
              }
            ].map((group) => (
              <div key={group.category} className="space-y-4">
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-400 font-semibold px-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.n}
                      className="flex items-center gap-3 px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/30 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 group"
                    >
                      <span className="text-red-500">
                        {skill.i}
                      </span>
                      <span className="font-medium text-sm md:text-base">{skill.n}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* RESUME DOWNLOAD BUTTON */}
            {/* <div className="flex justify-center mt-12">
            <a
              href="/Manjeet_Singh_Resume.pdf"
              download
              className="group relative flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-red-500/20"
            >
              <FileText className="w-5 h-5" />
              <span>Download Full Resume</span>
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />

              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
          </div> */}
          </div>
        </div>
      </section>
  );
}