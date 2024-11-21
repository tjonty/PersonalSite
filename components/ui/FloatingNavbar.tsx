// "use client";
// import React, { useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();

//   // set true for the initial state so that nav bar is visible in the home section
//   const [visible, setVisible] = useState(true);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     // Check if current is not undefined and is a number
//     if (typeof current === "number") {
//       let direction = current! - scrollYProgress.getPrevious()!;

//       if (scrollYProgress.get() < 0.05) {
//         // also set true for the initial state
//         setVisible(true);
//       } else {
//         if (direction < 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           // change rounded-full to rounded-lg
//           // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
//           // change  pr-2 pl-8 py-2 to px-10 py-5
//           "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
//           className
//         )}
//         style={{
//           backdropFilter: "blur(16px) saturate(180%)",
//           backgroundColor: "rgba(17, 25, 40, 0.75)",
//           borderRadius: "12px",
//           border: "1px solid rgba(255, 255, 255, 0.125)",
//         }}
//       >
//         {navItems.map((navItem: any, idx: number) => (
//           <Link
//             key={`link=${idx}`}
//             href={navItem.link}
//             className={cn(
//               "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
//             )}
//           >
//             <span className="block sm:hidden">{navItem.icon}</span>
//             {/* add !cursor-pointer */}
//             {/* remove hidden sm:block for the mobile responsive */}
//             <span className=" text-sm !cursor-pointer">{navItem.name}</span>
//           </Link>
//         ))}
//         {/* remove this login btn */}
//         {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
//           <span>Login</span>
//           <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
//         </button> */}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// components/Navbar.js
// components/Navbar.js
// import { Link } from 'react-scroll';

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-white bg-opacity-90">
//       <ul className="flex list-none justify-center p-4 m-0">
//         <li className="mx-4">
//           <Link
//             activeClass="text-blue-500"
//             to="section1"
//             smooth={true}
//             duration={500}
//             className="no-underline text-black hover:text-blue-500"
//           >
//             <a href="">Section 1</a>
//           </Link>
//         </li>
//         <li className="mx-4">
//           <Link
//             activeClass="text-blue-500"
//             to="section2"
//             smooth={true}
//             duration={500}
//             className="no-underline text-black hover:text-blue-500"
//           >
//             <a href="">Section 2</a>
//           </Link>
//         </li>
//         <li className="mx-4">
//           <Link
//             activeClass="text-blue-500"
//             to="section3"
//             smooth={true}
//             duration={500}
//             className="no-underline text-black hover:text-blue-500"
//           >
//             Section 3
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }


// components/Navbar.js
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
        // Keep navbar visible at the top
        setVisible(true);
      } else {
        if (direction < 0) {
          // Scrolling up
          setVisible(true);
        } else {
          // Scrolling down
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
