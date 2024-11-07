"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import image_hero from "@/public/image_hero.webp";
import { Section } from "@/components/Section";
import { ArrowRight } from "lucide-react";

export default function HeroComponent() {
    return (
        <Section id="hero">
            <div className="flex max-md:flex-col items-center justify-between">
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Bienvenue sur <span className="text-primary">Planify</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Simplifiez la gestion de vos rendez-vous avec une interface intuitive et moderne.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-primary-foreground font-semibold py-4 px-6 hover:bg-primary/90 transition duration-300 flex items-center space-x-2"
                    >
                        <span>Commencer maintenant</span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
                <motion.div
                    className="w-full md:w-1/2 mt-10 md:mt-0 flex md:justify-end justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={image_hero}
                        alt="image hero"
                        width={500}
                        height={500}
                    />
                </motion.div>
            </div>
        </Section>
    );
}
