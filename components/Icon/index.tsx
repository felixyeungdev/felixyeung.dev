interface IconProps {
    className?: string;
    fixed?: boolean;
}

const Icon = ({ className = "", fixed = false }: IconProps) => {
    return (
        <div className={className}>
            <svg
                className={fixed ? "" : "hero-image"}
                id="feli.page"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 336 336"
            >
                <g id="face">
                    <path
                        id="face-colour"
                        d="M100,0H236A100,100,0,0,1,336,100V236A100,100,0,0,1,236,336H100A100,100,0,0,1,0,236V100A100,100,0,0,1,100,0Z"
                        fill="#f9a828"
                    ></path>
                    <path
                        id="face-white"
                        d="M68,0H204a68,68,0,0,1,68,68V204a68,68,0,0,1-68,68H68A68,68,0,0,1,0,204V68A68,68,0,0,1,68,0Z"
                        transform="translate(32 32)"
                        fill="#fff"
                    ></path>
                </g>
                <g id="eyes" transform="translate(68 92)">
                    <path
                        id="eyebrows"
                        d="M10,0H190a10,10,0,0,1,0,20H10A10,10,0,0,1,10,0Z"
                        fill="rgba(249,168,40,0.25)"
                    ></path>
                    <path
                        id="eye-right"
                        d="M10,0H56a10,10,0,0,1,0,20H10A10,10,0,0,1,10,0Z"
                        transform="translate(180 66) rotate(-90)"
                        fill="#f9a828"
                    ></path>
                    <path
                        id="eye-left"
                        d="M10,0H56a10,10,0,0,1,0,20H10A10,10,0,0,1,10,0Z"
                        transform="translate(90 66) rotate(-90)"
                        fill="#f9a828"
                    ></path>
                </g>
                <g id="mouth" transform="translate(68 178)">
                    <path
                        id="mouth-shadow"
                        d="M10,0H190a10,10,0,0,1,0,20H10A10,10,0,0,1,10,0Z"
                        fill="rgba(249,168,40,0.25)"
                    ></path>
                    <path
                        id="mouth-top"
                        d="M10,0h90a10,10,0,0,1,0,20H10A10,10,0,0,1,10,0Z"
                        transform="translate(90)"
                        fill="#f9a828"
                    ></path>
                    <path
                        id="mouth-bottom"
                        d="M0,0H110V24A32,32,0,0,1,78,56H32A32,32,0,0,1,0,24Z"
                        transform="translate(90 10)"
                        fill="#f9a828"
                    ></path>
                </g>
            </svg>
        </div>
    );
};

export default Icon;
