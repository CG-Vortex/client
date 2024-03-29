import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "@/components/shared/navbar/NavLinks";
import AuthButtons from "@/components/shared/navbar/AuthButtons";

import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Hamburger Menu Icon */}
      <div onClick={toggleMenu} className="md:hidden w-8 cursor-pointer">
        <Menu size={28} />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.ul
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed top-0 right-0 w-full h-full bg-white dark:bg-black
              flex flex-col items-center justify-center space-y-8 z-10"
          >
            {/* Exit icon */}
            <div
              onClick={toggleMenu}
              className="w-8 cursor-pointer absolute top-4 left-4"
            >
              <X />
            </div>

            <NavLinks toggleMenu={toggleMenu} />
            <div className="flex flex-col space-y-8 sm:hidden">
              <AuthButtons />
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
