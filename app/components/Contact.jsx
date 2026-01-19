
import { Mail, Github, Linkedin, Instagram, MessageCircle, } from "lucide-react";

const projectData = [
    { title: "BloomsHeaven", desc: "E-commerce for high-end florals.", tech: ["Next.js", "MongoDB"], img: "/proj1.jpg" },
    { title: "Graduate Mentors", desc: "AI-driven EdTech platform.", tech: ["OpenAI", "Node"], img: "/proj2.jpg" },
];

export default function Projects() {
    return (
        <section
            id="contact"
            className={`relative scroll-reveal min-h-screen flex items-center justify-center px-6`}
        >
            <div className={`w-full flex flex-col items-center justify-center max-w-6xl`}>
                <div className="text-center space-y-8">
                    <h2 className="text-5xl font-bold italic underline decoration-red-500">
                        Let's Connect.
                    </h2>

                    <div className="flex flex-col items-center gap-6 text-xl">
                        {/* Email Link */}
                        <a
                            href="mailto:imanjeetsingh01@gmail.com"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <div
                                className="flex items-center gap-3 hover:text-red-500 transition-colors duration-300"
                            >
                                <Mail className="w-6 h-6" />
                                <span className="font-medium">imanjeetsingh01@gmail.com</span>
                            </div>
                        </a>


                        {/* Social Icons Row */}
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {/* GitHub */}
                            <a href="https://github.com/1ManjeetSingh" target="_blank" rel="noopener noreferrer"
                                className="p-4 rounded-full hover:scale-110 hover:text-white bg-zinc-900 transition-all shadow-sm">
                                <Github className="w-6 h-6" />
                            </a>

                            {/* LinkedIn */}
                            <a href="https://linkedin.com/in/man-jeet-rathore" target="_blank" rel="noopener noreferrer"
                                className="p-4 rounded-full hover:scale-110 hover:text-white bg-[#0077b5] transition-all shadow-sm">
                                <Linkedin className="w-6 h-6" />
                            </a>

                            {/* X (Twitter) */}
                            <a href="https://x.com/ManjeetSin92709" target="_blank" rel="noopener noreferrer"
                                className="p-4 rounded-full hover:scale-110 hover:text-white bg-black border border-zinc-700 transition-all shadow-sm">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 fill-current"
                                    aria-hidden="true"
                                >
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
                                </svg>
                            </a>

                            {/* Reddit Official Logo */}
                            <a
                                href="https://www.reddit.com/user/Weird-Mousse7215"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-full hover:scale-110 hover:text-white bg-[#FF4500] transition-all shadow-sm group"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 fill-current"
                                    aria-hidden="true"
                                >
                                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.056 1.597.04.203.065.414.065.63 0 2.53-3.225 4.583-7.203 4.583-3.978 0-7.203-2.053-7.203-4.583 0-.21.022-.412.06-.612-.638-.258-1.086-.884-1.086-1.615 0-.968.786-1.754 1.754-1.754.463 0 .883.181 1.192.473 1.206-.847 2.848-1.411 4.664-1.49l.874-4.095 3.128.65a1.25 1.25 0 0 1 1.247 1.241zm-7.133 9.45c-.838 0-1.517.679-1.517 1.518 0 .838.679 1.517 1.517 1.517.839 0 1.518-.679 1.518-1.517 0-.839-.679-1.518-1.518-1.518zm5.626 0c-.838 0-1.517.679-1.517 1.518 0 .838.679 1.517 1.517 1.517.839 0 1.518-.679 1.518-1.517 0-.839-.679-1.518-1.518-1.518zm-5.639 4.146c-.162 0-.306.132-.306.292 0 .162.8 1.26 3.146 1.26 2.346 0 3.146-1.098 3.146-1.26 0-.16-.145-.292-.306-.292-.162 0-.265.04-.37.144-.06.06-.7 1.05-2.47 1.05-1.77 0-2.41-.99-2.47-1.05-.105-.104-.21-.144-.37-.144z" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a href="https://wa.me/7742398066" target="_blank" rel="noopener noreferrer"
                                className="p-4 rounded-full hover:scale-110 hover:text-white bg-[#25D366] transition-all shadow-sm">
                                <MessageCircle className="w-6 h-6" />
                            </a>

                            {/* Instagram */}
                            <a href="https://www.instagram.com/manjeet_.rathore/?igsh=a3B4cnNnbDkycnI1&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer"
                                className="p-4 rounded-full hover:scale-110 hover:text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-all shadow-sm">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

