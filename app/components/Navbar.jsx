"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navItems = ["home", "education", "projects", "skills", "contact"];

  useEffect(() => {
    const observerOptions = {
      root: null,
      // Root Margin helps trigger the highlight slightly before the section hits the top
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        //   console.log("Active Section:", entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections that match our nav items
    navItems.forEach((item) => {
      const element = document.getElementById(item);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

   useEffect(() => {
    const handleScroll = () => {
      const active = document.activeElement;
      if (active instanceof HTMLElement) active.blur();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //hide navbar on scroll logic
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  return (
    <nav className={`fixed top-0 w-full z-50 flex items-center justify-center px-4 ${scrollDirection === 'up' ? 'translate-y-0' : 'translate-y-[-9vh]'} transition-transform duration-300`}>
      {/* <nav className="fixed top-0 w-full z-50 flex items-center justify-center px-4"> */}
      <div className="max-w-6xl w-full md:w-auto mx-auto px-4 h-14 mt-2 flex items-center justify-center rounded-full backdrop-blur bg-zinc-50/80 dark:bg-black/50">
        <div className="flex gap-2 md:gap-8 text-sm overflow-x-auto no-scrollbar py-2 px-2 items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item;
            return (
              <a
                key={item}
                href={`#${item === "home" ? "" : item}`}
                className={`whitespace-nowrap px-3 md:px-4 py-1.5 rounded-full text-base md:text-lg transition-all duration-300 ${isActive
                  ? "text-black dark:text-white bg-zinc-200/80 dark:bg-zinc-800/80 shadow-sm"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;