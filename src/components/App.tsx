import { useEffect, useState, useRef } from "react";

export default function App() {
    const canvasRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let w, h;
        let rainDrops = [];

        const resize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        rainDrops = Array.from({ length: 100 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            len: Math.random() * 15 + 10,
            speed: Math.random() * 4 + 2,
            opacity: Math.random() * 0.3 + 0.2,
        }));
        };

        window.addEventListener("resize", resize);
        resize();

        const animate = () => {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = "rgba(255,255,255,0.5)";
        ctx.lineWidth = 1;
        ctx.lineCap = "round";

        rainDrops.forEach((drop) => {
            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x, drop.y + drop.len);
            ctx.stroke();

            drop.y += drop.speed;
            if (drop.y > h) {
            drop.y = -20;
            drop.x = Math.random() * w;
            drop.speed = Math.random() * 4 + 2;
            drop.len = Math.random() * 15 + 10;
            }
        });

        requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener("resize", resize);
    }, []);

    const toggleMusic = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.volume = 0.3;
            audio.play().catch((err) => console.log("Autoplay blocked:", err));
        setIsPlaying(true);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.3;
            audio.play().then(() => {setIsPlaying(true)}).catch(() => {
                setIsPlaying(false);
            });
        }
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center h-screen text-white bg-black overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-40"
            />

            <div className="absolute top-5 right-5 rounded-full hover:text-gray-300 transition cursor-pointer" onClick={toggleMusic}>
                {isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 1H2v1H1v20h1v1h7v-1h1V2H9zM8 3v18H3V3zm14-1V1h-7v1h-1v20h1v1h7v-1h1V2zm-1 1v18h-5V3z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 11v-1h-1V9h-2V8h-2V7h-1V6h-2V5h-2V4h-1V3H8V2H6V1H3v1H2v20h1v1h3v-1h2v-1h2v-1h1v-1h2v-1h2v-1h1v-1h2v-1h2v-1h1v-1h1v-2zm-2 2h-2v1h-2v1h-1v1h-2v1h-2v1H9v1H7v1H5v1H4V3h1v1h2v1h2v1h1v1h2v1h2v1h1v1h2v1h2z"/></svg> }
            </div>

            <audio ref={audioRef} src="/everything_in_its_right_place.mp3" loop autoPlay></audio>

            <div className="z-10 text-center px-6 max-w-2xl">
                <h1 className="text-4xl font-bold mb-6 tracking-widest">Hakko</h1>

                <p className="text-xs italic leading-relaxed mb-10 text-gray-300">
                    “Promise me one thing will ya? Not asking you to never give up, sometimes you gotta let go. Just don't let anyone change who you are, 'kay?”<br/> <span className="text-xs">- Johnny Silverhand</span>
                </p>

                <div className="flex justify-center gap-6 text-2xl">
                    <a href="https://discord.com/users/713900040879341589" className="hover:text-gray-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M22 11V8h-1V6h-1V5h-2V4h-3v1H9V4H6v1H4v1H3v2H2v3H1v7h2v1h2v1h2v-2H6v-1h2v1h1v1h6v-1h1v-1h2v1h-1v2h2v-1h2v-1h2v-7ZM9 15H7v-1H6v-2h1v-1h2v1h1v2H9Zm9-1h-1v1h-2v-1h-1v-2h1v-1h2v1h1Z"/></svg>
                    </a>
                    <a href="https://github.com/hakkodev" className="hover:text-gray-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-1v-5h-1v-1h1v-1h2v-1h1v-1h1V9h-1V6h-2v1h-1v1h-1V7h-4v1H9V7H8V6H6v3H5v5h1v1h1v1h2v2H7v-1H6v-1H4v1h1v2h1v1h3v3H8v-1H6v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z"/></svg>
                    </a>
                    <a href="https://steamcommunity.com/id/hakko101" className="hover:text-gray-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M18 8h-1v3h1zm-1 3h-3v1h3zm0-4h-3v1h3zm-3 1h-1v3h1zm-4 10H7v1h3zm0-4H8v1h2zm1 1h-1v3h1z"/><path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1H9v-1H7v-1H5v-1H4v-1H3v-2H2v-2h1v1h2v1h2v1H6v1h1v1h3v-1h1v-1h1v-2h1v-1h2v-1h2v-1h2v-2h1V8h-1V6h-2V5h-3v1h-2v2h-1v3h-1v1H9v1H7v1H6v-1H4v-1H2v-1H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
