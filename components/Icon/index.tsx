interface IconProps {
    className?: string;
}

const Icon = ({ className = "" }: IconProps) => {
    return (
        <div className={className}>
            <svg viewBox="0 0 336 336">
                <defs>
                    <clipPath id="clip-im.feli.page-full">
                        <rect width="336" height="336" />
                    </clipPath>
                </defs>
                <g
                    id="im.feli.page-full"
                    clipPath="url(#clip-im.feli.page-full)"
                >
                    <g id="feli.page" transform="translate(-88 -88)">
                        <g id="face">
                            <path
                                id="face-colour"
                                d="M100,0H236A100,100,0,0,1,336,100V236A100,100,0,0,1,236,336H100A100,100,0,0,1,0,236V100A100,100,0,0,1,100,0Z"
                                transform="translate(88 88)"
                                fill="#f9a828"
                            />
                            <path
                                id="face-white"
                                d="M68,0H204a68,68,0,0,1,68,68V204a68,68,0,0,1-68,68H68A68,68,0,0,1,0,204V68A68,68,0,0,1,68,0Z"
                                transform="translate(120 120)"
                                fill="#fff"
                            />
                        </g>
                        <g id="eyes" transform="translate(0 5)">
                            <path
                                id="eyebrows"
                                d="M10,0H190a10,10,0,0,1,0,20H10A10,10,0,0,1,10,0Z"
                                transform="translate(156 175)"
                                fill="rgba(249,168,40,0.25)"
                            />
                            <path
                                id="eye-right"
                                d="M10,0H56a10,10,0,0,1,0,20H10A10,10,0,0,1,10,0Z"
                                transform="translate(336 241) rotate(-90)"
                                fill="#f9a828"
                            />
                            <path
                                id="eye-left"
                                d="M10,0H56a10,10,0,0,1,0,20H10A10,10,0,0,1,10,0Z"
                                transform="translate(246 241) rotate(-90)"
                                fill="#f9a828"
                            />
                        </g>
                        <g id="mouth" transform="translate(0 6)">
                            <path
                                id="mouth-shadow"
                                d="M10,0H190a10,10,0,0,1,0,20H10A10,10,0,0,1,10,0Z"
                                transform="translate(156 260)"
                                fill="rgba(249,168,40,0.25)"
                            />
                            <path
                                id="mouth-top"
                                d="M10,0h90a10,10,0,0,1,0,20H10A10,10,0,0,1,10,0Z"
                                transform="translate(246 260)"
                                fill="#f9a828"
                            />
                            <path
                                id="mouth-bottom"
                                d="M0,0H110V24A32,32,0,0,1,78,56H32A32,32,0,0,1,0,24Z"
                                transform="translate(246 270)"
                                fill="#f9a828"
                            />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default Icon;
