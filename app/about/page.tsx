"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import image_hero from '@/public/image_hero.webp';
import {Section} from "@/components/Section";

const About = () => {
    return (
        <Section className="py-12" id="about">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4">À propos de Planify</h1>
                    <p className="text-lg md:text-xl">
                        Planify est une application dédiée à la simplification de la gestion des rendez-vous.
                        Vous pouvez gérer vos rendez-vous en toute simplicité grâce à notre interface intuitive et moderne.
                    </p>
                </motion.div>
                <div className="flex flex-col md:flex-row items-center">
                    <motion.div
                        className="w-full md:w-1/2 mb-8 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={image_hero}
                            alt="Équipe Planify"
                            width={500}
                            height={500}
                        />
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2 md:pl-12"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-semibold mb-4">Notre Mission</h2>
                        <p className="mb-4">
                            Chez Planify, nous nous engageons à fournir une solution intuitive pour gérer vos rendez-vous, en mettant l'accent sur la simplicité et l'efficacité.
                        </p>
                        <h2 className="text-3xl font-semibold mb-4">Notre Équipe</h2>
                        <p>
                            Notre équipe est composée de professionnels passionnés par la technologie et le service client, dédiés à améliorer votre expérience de gestion des rendez-vous.
                        </p>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default About;
