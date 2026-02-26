interface DividerProps {
    /** Color of the SVG wave (the section BELOW) */
    fillColor?: string;
    /** Background behind the wave (the section ABOVE) */
    bgColor?: string;
    flip?: boolean;
}

export default function WaveDivider({
    fillColor = "#faf7f3",
    bgColor = "#fdfbf7",
    flip = false,
}: DividerProps) {
    return (
        <div
            className="w-full overflow-hidden leading-[0] pointer-events-none"
            style={{
                backgroundColor: bgColor,
                transform: flip ? "rotate(180deg)" : undefined,
            }}
        >
            <svg
                className="relative block w-full"
                style={{ height: "clamp(40px, 5vw, 80px)" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,50 1440,40 L1440,100 L0,100Z"
                    fill={fillColor}
                />
                <path
                    d="M0,60 C240,30 480,90 720,50 C960,10 1200,80 1440,60 L1440,100 L0,100Z"
                    fill={fillColor}
                    opacity="0.5"
                />
            </svg>
        </div>
    );
}
