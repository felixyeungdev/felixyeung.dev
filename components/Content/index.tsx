interface ContentProps {
    children: JSX.Element | JSX.Element[];
}

const Content = ({ children }: ContentProps) => {
    return <main className="">{children}</main>;
};

export default Content;
