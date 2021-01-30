import Button from "@components/Button";
import Content from "@components/Content";
import SiteHead from "@components/Head";
import { projects } from "@data/projects";
import React from "react";

export default function Home() {
    return (
        <>
            <SiteHead />
            <Content>
                <section className="min-h-screen-3/4 flex flex-col items-center justify-center bg-feli-light">
                    <h1 className="text-6xl py-2">404</h1>
                    <h2 className="text-4xl pb-4">
                        This page could not be found
                    </h2>
                    <Button href="/">Return Home</Button>
                </section>
            </Content>
        </>
    );
}
