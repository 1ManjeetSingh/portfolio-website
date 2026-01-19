"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Heading from "./Heading";
import { Layers } from "lucide-react";

const projectData = [
    {
        title: "BloomsHeaven",
        desc: "A premium MERN stack e-commerce startup specializing in high-end floral gifting.",
        contributions: [
            "Optimized Core Web Vitals (95+ score) & reduced load times by 50% via lazy loading.",
            "Architected secure JWT-based auth, dynamic content handling, and checkout workflows.",
            "Implemented image optimization and Skeleton UIs to balance speed and visual quality.",
            "Managed SEO and performance monitoring using Google Search Console and DevTools."
        ],
        tech: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
        images: ["/blm/photo_1.png", "/blm/photo_2.png", "/blm/photo_3.png", "/blm/photo_4.png", "/blm/photo_5.png", "/blm/photo_6.png"],
        link: "https://bloomsheaven.com",
    },
    {
        title: "Graduate Mentors",
        desc: "An AI-driven EdTech platform providing personalized performance insights for students.",
        contributions: [
            "Integrated GenAI-powered quiz analysis for personalized performance suggestions.",
            "Developed a robust state management system using Redux for real-time quiz updates.",
            "Implemented Role-Based Access Control (RBAC) with secure JWT authentication.",
            "Deployed and maintained the full-stack infrastructure for high availability and scale."
        ],
        tech: ["React", "Node.js", "Express", "Redux", "OpenAI"],
        images: ["/gm/photo_1.png", "/gm/photo_2.png", "/gm/photo_3.png", "/gm/photo_4.png", "/gm/photo_5.png"],
        link: "https://graduatementors.in"
    }
];

// Sub-component for the hover slideshow
function ProjectSlideshow({ images, isHovered }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!isHovered) {
            setIndex(0);
            return;
        }
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 1200);

        return () => clearInterval(interval);
    }, [isHovered, images.length]);

    return (
        <div className="aspect-[3/2]">
            <Image
                src={images[index]}
                fill
                className="object-contain transition-opacity duration-500"
                alt="Project screenshot"
                priority={false}
            />
        </div>
    );
}

// Separate Card Component to handle local hover state and prevent hydration errors
function ProjectCard({ proj }) {
    const [isHovered, setIsHovered] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-[85vw] min-w-[372px] md:min-w-[450px] sticky left-0 overflow-hidden rounded-3xl bg-black border border-zinc-200 dark:border-zinc-800 transition-all"
        >
            <div className="aspect-[3/2] relative overflow-hidden">
                {/* Slideshow only starts if mounted to prevent hydration mismatch */}
                <ProjectSlideshow images={proj.images} isHovered={hasMounted && isHovered} />

                {/* Contribution Overlay */}
                <div className={`absolute inset-0 bg-black/70 backdrop-blur-[1px] flex flex-col justify-center p-8 transition-opacity duration-300 ${hasMounted && isHovered ? "opacity-100" : "opacity-0"}`}>
                    <p className="text-white font-bold mb-2 md:mb-4 text-sm uppercase">What I Did:</p>
                    <ul className="text-zinc-200 text-sm space-y-2">
                        {proj.contributions.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="mb-[2px] mr-1 h-1.5 w-1.5 bg-blue-500 rounded-full shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="px-6 pt-6">
                <h3 className="text-xl font-bold">{proj.title}</h3>
                <p className="mt-2 text-zinc-500 text-sm line-clamp-2">{proj.desc}</p>
            </div>
            <div className="flex w-full px-6 py-4">
                <button
                    onClick={() => window.open(proj.link, "_blank", "noopener,noreferrer")}
                    className="bg-black/20 px-4 py-3 rounded-xl flex items-center gap-2 hover:bg-black/10 border border-zinc-200 dark:border-zinc-800 transition"
                >
                    <span className="text-white">Go To Website</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                    >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="scroll-reveal min-h-screen flex items-center justify-center px-6 py-20 scroll-mt-32">
            <div className="w-full max-w-6xl">
                <Heading icon={<Layers />} title="Recent Projects" />

                <div className="flex gap-8 overflow-x-auto pb-10 custom-scroll-x">
                    {projectData.map((proj, i) => (
                        <ProjectCard key={i} proj={proj} />
                    ))}

                    {/* Spacer at end */}
                    <div className="min-w-[1px] h-full" />
                </div>
            </div>
        </section>
    );
}