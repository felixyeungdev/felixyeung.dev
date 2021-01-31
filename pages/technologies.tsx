import Section from "@components/Section";
import SectionTitle from "@components/Section/title";
import Timeline from "@components/Timeline";
import { technologies } from "@data/technologies";
import React from "react";

const Test = () => {
    return (
        <>
            <Section light>
                <SectionTitle>Technologies</SectionTitle>
                <Timeline data={technologies} />
            </Section>
        </>
    );
};

export default Test;
