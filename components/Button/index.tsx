import React from "react";
import Link from "next/link";
interface ButtonProps {
    children: JSX.Element | string;
    href: string;
    targetBlank?: boolean;
}

const Button = ({ children, href, targetBlank = false }: ButtonProps) => {
    return (
        <Link href={href}>
            <a
                className="py-2 px-4 bg-feli active:bg-feli-dark rounded-md font-bold uppercase shadow-none hover:shadow-lg active:shadow-md text-gray-900 hover:text-white transition no-tap-highlight-color"
                target={targetBlank ? "_blank" : "_self"}
                rel="noreferrer"
            >
                {children}
            </a>
        </Link>
    );
};

export default Button;
