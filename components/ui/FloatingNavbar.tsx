"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Link } from "react-scroll";
import { navItems } from "@/data";

export default function Navbar() {


  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const prevScrollYProgress = useRef(0);

  useEffect(() => {
    return scrollYProgress.onChange((current) => {
      const previous = prevScrollYProgress.current;
      const direction = current - previous;

      if (current < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }

      prevScrollYProgress.current = current;
    });
  }, [scrollYProgress]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-50 top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/10 shadow-lg items-center justify-center space-x-4 backdrop-blur-lg bg-gray-800 bg-opacity-75"
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              activeClass="text-blue-500"
              to={navItem.link}
              smooth={true}
              duration={500}
              className="relative text-neutral-200 hover:text-blue-400 items-center flex space-x-1 text-sm cursor-pointer"
            >
              <span>{navItem.name}</span>
            </Link>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
