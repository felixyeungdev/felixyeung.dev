interface SectionProps {
    children: JSX.Element | JSX.Element[];
    light?: boolean;
}

const Section = ({ children, light = false }: SectionProps) => {
    return (
        <section className={light ? "p-12 bg-feli-light" : "p-12"}>
            {children}
        </section>
    );
};

export default Section;
