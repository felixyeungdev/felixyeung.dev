import Button from "@components/Button";
import Chip from "@components/Chip";
import Content from "@components/Content";
import Icon from "@components/Icon";
import Section from "@components/Section";
import SectionTitle from "@components/Section/title";
import Social from "@components/Social";
import { githubUrl } from "@links/index";
import React from "react";

const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "Flutter",
    "Dart",
    "Python",
    "Node.js",
    "SCSS",
    "Blender",
    "Dialogflow",
    "Pascal",
    "Go Lang",
    "Teachable Machine",
    "Chrome Extensions",
    "MongoDB",
    "React",
    "MaterialUI",
    "PM2",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
];

export default function Home() {
    return (
        <>
            <Content>
                <section className="min-h-screen-3/4 flex items-center justify-center bg-feli-light">
                    <div className="sm:flex">
                        <div className="flex justify-center md:block">
                            <Icon className="h-48 w-48" />
                        </div>
                        <div className="ml-8 flex flex-col justify-center">
                            <h1 className="text-6xl my-2 font-bold text-center sm:text-left">
                                👋🏻 I’m Felix
                            </h1>
                            <p className="text-3xl my-2 text-center sm:text-left">
                                A programmer? 🤔
                            </p>
                            <div className="flex my-2 justify-center sm:justify-start">
                                <Social />
                            </div>
                        </div>
                    </div>
                </section>
                <Section>
                    <SectionTitle>Featured</SectionTitle>
                    <div className="sm:flex">
                        <div className="sm:w-1/2 flex flex-col justify-center">
                            <span className="uppercase text-gray-500 text-center sm:text-left">
                                Featured Project
                            </span>
                            <h2 className="text-3xl text-center sm:text-left font-bold">
                                Covid HK
                            </h2>
                            <a
                                className="text-feli text-center sm:text-left"
                                target="_blank"
                                href="https://covidhk.feli.page"
                            >
                                covidhk.feli.page
                            </a>
                            <p className="mt-4 sm:w-10/12 text-center sm:text-left">
                                Detailed statistics for coronavirus in Hong
                                Kong, with a searching capabilities for finding
                                covid cases near you
                            </p>
                        </div>
                        <div className="sm:w-1/2">
                            <img
                                className="rounded-xl shadow-xl"
                                src="/assets/images/covidhk.feli.page_1.png"
                            />
                        </div>
                    </div>
                </Section>
                <Section light>
                    <SectionTitle>Technologies</SectionTitle>
                    <div className="flex flex-wrap">
                        {technologies.map((tech) => (
                            <Chip label={tech} key={tech} />
                        ))}
                    </div>
                </Section>
                <Section>
                    <div className="flex justify-center">
                        <Button href={githubUrl} targetBlank>
                            More on GitHub
                        </Button>
                    </div>
                </Section>
            </Content>
        </>
    );
}
