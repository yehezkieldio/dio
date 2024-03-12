"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const NavigationMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="relative z-[99] mx-4 mt-8 max-w-[720px] lg:mx-auto">
            <nav className="flex items-center justify-between">
                <a href="/" className="text-lg font-bold leading-snug tracking-tight">
                    Yehezkiel Dio
                </a>
                <div className="flex flex-row gap-8">
                    <Button variant="outline" onClick={toggleMenu} className="border-transparent focus:outline-none">
                        <Icon name="Menu" size={24} />
                    </Button>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-950"
                    >
                        <motion.div className="flex flex-col items-center justify-center gap-4 rounded-md bg-slate-950 p-8">
                            <p className="text-sm leading-snug tracking-tight">WIP</p>
                            <Button variant="outline" onClick={toggleMenu} className="focus:outline-none">
                                <Icon name="X" size={24} />
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default NavigationMenu;
