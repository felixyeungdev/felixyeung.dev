interface SectionProps {
    children: JSX.Element | JSX.Element[];
    light?: boolean;
}

const Section = ({ children, light = false }: SectionProps) => {
    return (
        <section
            className={
                light
                    ? "py-6 sm:py-8 md:py-12 bg-feli-light"
                    : "py-6 sm:py-8 md:py-12"
            }
        >
            <div className="container mx-auto px-2">{children}</div>
        </section>
    );
};

export default Section;
