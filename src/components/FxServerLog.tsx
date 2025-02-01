import { useState, useEffect, useRef } from 'react';
import Atropos from 'atropos/react';

const logEntries = [
    { content: <span className='text-emerald-500'>root@hakko:/# neofetch</span>},
    { content: <span className="text-primary">root@hakko</span> },
    { content: <span className="text-emerald-500">¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ </span> },
    { content: <span className="text-cyan-500">╭──────────── <span className="text-sky-500">About</span> ──────────── </span> },
    { content: <span className="text-cyan-500">│ <span className="text-sky-500">Name</span><span className="text-emerald-500">› You can call me Hakko</span></span> },
    { content: <span className="text-cyan-500">│ <span className="text-sky-500">Location</span><span className="text-emerald-500">› United States</span></span> },
    { content: <span className="text-cyan-500">│ <span className="text-sky-500">Favorite Song</span><a href="https://open.spotify.com/track/5FVd6KXrgO9B3JPmC8OPst?si=a7ecb3dfb2c74c94" className="text-emerald-500">› Do I Wanna Know? - Arctic Monkeys</a></span> },
    { content: <span className="text-cyan-500">│ <span className="text-sky-500">Favorite Game</span><span className="text-emerald-500">› Cyberpunk 2077 or Fallout 4</span></span> },
    { content: <span className="text-cyan-500">│ <span className="text-sky-500">Favorite Quote</span><span className="text-emerald-500">› "Any man whose errors take ten years to correct is quite a man." - J. Oppenheimer  </span></span> },
    { content: <span className="text-cyan-500">│ <span className="text-sky-500">Favorite Animal</span><span className="text-emerald-500">› Racoons</span></span> },
    { content: <span className="text-cyan-500">│ <span className="text-sky-500">I'm Currently</span><span className="text-emerald-500">› Slamming my keyboard instead of hot babes</span></span> },
    { content: <span className="text-cyan-500">├──────────── <span className="text-sky-500">Uptime</span> ──────────── </span> },
    { content: <span className="text-cyan-500">│ <span className="text-emerald-500">› way too fucking long</span></span> },
    { content: <span className="text-cyan-500">╰────────────────────────────────── </span> },
    { content: <span className="text-cyan-500 whitespace-pre"> </span> },
];

const FXServerLog = () => {
    const [visibleLogs, setVisibleLogs] = useState([]);
    const logContainerRef = useRef(null);

    useEffect(() => {
        logEntries.forEach((entry, index) => {
            setTimeout(() => {
                setVisibleLogs(prevLogs => [...prevLogs, entry]);
            }, index * 300);
        });
    }, []);

    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [visibleLogs]);

    return (
        <div className="mt-16 lg:relative lg:mt-0 hidden lg:block">
            <div className="relative w-full h-full flex items-center justify-center mt-16">
                <Atropos rotateTouch={false} className="atropos">
                <div className="my-atropos w-full h-full max-h-64 text-neutral-400 text-sm flex flex-col relative group rounded-xl bg-accent/60 shadow-xl ring-1 ring-neutral-200/5">
                    <div ref={logContainerRef} className="overflow-hidden flex flex-col p-2 min-h-[15rem] min-w-[40rem] pb-5 font-[Source_Code_Pro] text-xs">
                    {
                        visibleLogs.map((entry, index) => (
                            <span key={index} className="text-neutral-50/50">
                                {entry.content}
                            </span>
                        ))
                    }
                    </div>
                    <div className="sticky h-1 bg-accent/60 w-full"></div>
                    <div className="sticky p-2 bg-accent/90 backdrop-blur-lg transform-gpu bottom-0 w-full text-primary border-t border-neutral-200/5 font-[Source_Code_Pro] text-sm">
                        <span>root@hakko:/#</span>
                    </div>
                </div>
                </Atropos>
            </div>
        </div>
    );
};

export default FXServerLog;