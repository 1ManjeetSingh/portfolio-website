import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="scroll-reveal min-h-screen flex items-center justify-center px-6 snap-start">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-6xl">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Manjeet Singh</h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 font-medium">
            Full Stack Web-Developer • MERN • Next.js • GenAI
          </p>
          <p className="mt-6 text-zinc-500 leading-relaxed">
            IIT Dhanbad graduate specialized in building high-performance MERN & Next.js applications.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition">Explore Work</a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition">Get in Touch</a>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-white dark:border-zinc-800 shadow-2xl">
            <Image src="/Manjeet.png" alt="Profile" fill className="object-cover object-top" priority />
          </div>
        </div>
      </div>
    </section>
  );
}