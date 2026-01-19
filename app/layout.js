import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Particle from "./components/Particle.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Manjeet Singh - Portfolio",
  description: "Portfolio of Manjeet Singh, an IIT Dhanbad graduate and Full-Stack Developer specializing in the MERN stack, Next.js, and GenAI. Building scalable, high-performance web applications and AI-driven solutions for startups and enterprises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-default relative`}
      >
        <div className="fixed inset-0 z-0">
        <Particle />
        </div>
        {children}
      </body>
    </html>
  );
}
