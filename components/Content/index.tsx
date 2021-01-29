interface ContentProps {
    children: JSX.Element | JSX.Element[];
}

const Content = ({ children }: ContentProps) => {
    return <div className="">{children}</div>;
};

export default Content;
