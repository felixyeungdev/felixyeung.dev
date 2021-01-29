interface SectionTitleProps {
    children: JSX.Element | string;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
    return (
        <h1 className="text-4xl sm:text-6xl text my-2 font-bold text-center sm:text-left">
            {children}
        </h1>
    );
};

export default SectionTitle;
