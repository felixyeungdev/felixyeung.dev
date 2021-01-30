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
                className="py-2 px-4 bg-feli rounded-md font-bold uppercase shadow-none hover:shadow-lg text-gray-900 hover:text-white transition"
                target={targetBlank ? "_blank" : "_self"}
                rel="noreferrer"
            >
                {children}
            </a>
        </Link>
    );
};

export default Button;
