interface ButtonProps {
    children: JSX.Element | string;
    href: string;
    targetBlank?: boolean;
}

const Button = ({ children, href, targetBlank = false }: ButtonProps) => {
    return (
        <a
            className="py-2 px-4 bg-feli rounded-md font-bold uppercase shadow-none hover:shadow-lg text-gray-900 hover:text-white transition"
            href={href}
            target={targetBlank ? "_blank" : "_self"}
        >
            {children}
        </a>
    );
};

export default Button;
