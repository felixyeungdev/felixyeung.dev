import Button from "@components/Button";
import Chip from "@components/Chip";
import Content from "@components/Content";
import SiteHead from "@components/Head";
import Icon from "@components/Icon";
import Project from "@components/Project";
import Section from "@components/Section";
import SectionTitle from "@components/Section/title";
import Social from "@components/Social";
import { projects } from "@data/projects";
import { technologies } from "@data/technologies";
import { gitHubUrl } from "@links/index";
import React from "react";

const _projects = [...projects];
const featuredProject = _projects.shift();

export default function Home() {
    return (
        <>
            <SiteHead />
            <Content>
                <section className="min-h-screen-3/4 flex items-center justify-center bg-feli-opacity-100">
                    <div className="sm:flex">
                        <div className="flex justify-center md:block">
                            <Icon className="h-48 w-48" />
                        </div>
                        <div className="sm:ml-8 flex flex-col justify-center">
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
                    <Project project={featuredProject} featured />
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
                    <SectionTitle>Projects</SectionTitle>
                    <>
                        {_projects.map((project, i) => (
                            <Project
                                project={project}
                                key={project.link}
                                reverse={i % 2 === 1}
                            />
                        ))}
                    </>
                    <div className="flex justify-center">
                        <Button href={gitHubUrl} targetBlank>
                            More on GitHub
                        </Button>
                    </div>
                </Section>
            </Content>
        </>
    );
}
