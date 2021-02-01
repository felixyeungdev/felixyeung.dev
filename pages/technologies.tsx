import Section from "@/components/Section";
import SectionTitle from "@/components/Section/title";
import Timeline from "@/components/Timeline";
import { technologies } from "@/data/technologies";
import React from "react";

const TechnologiesPage = () => {
    return (
        <>
            <Section light>
                <SectionTitle>Technologies</SectionTitle>
                <div className="mt-6 ml-2">
                    <Timeline data={technologies} />
                </div>
            </Section>
        </>
    );
};

export default TechnologiesPage;
