import React from 'react';
import {useState, useRef, useEffect} from 'react'


const Aside = () => {
    const [width, setWidth] = useState(300);
    const isResizing = useRef(false);

    const startResizing = () => {
        isResizing.current = true;
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    }

    const stopResizing = () => {
        isResizing.current = false;
        document.body.style.cursor = 'default';
        document.body.style.userSelect = 'auto';
    }

    const resizeAside = (e) => {
        if (!isResizing.current) return;
        const newWidth = e.clientX;
        if (newWidth < 200 || newWidth > 600) return;
        setWidth(newWidth);
    }

    useEffect(() => {
        window.addEventListener("mousemove", resizeAside);
        window.addEventListener("mouseup", stopResizing);

        return () => {
            window.removeEventListener("mousemove", resizeAside);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, []);

    return (
        <div className="h-screen flex bg-slate-900"
        >
            <aside
                className="relative bg-zinc-900 text-white flex flex-col items-center  w-full"
                style={{width: `${width}px`}}
            >
                <div className="p-4 font-semibold border-b border-zinc-800">
                    <img src="/temp/1.jpg" alt="" className="w-40"/>
                </div>

                <div className="p-4 text-sm text-zinc-300">
                    <ul>
                        <li>Dashboard</li>
                        <li>Music</li>
                        <li>GitHub</li>
                    </ul>
                </div>

                {/* DRAG HANDLE */}
                <div
                    onMouseDown={startResizing}
                    className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-transparent hover:bg-blue-500/40"
                />
            </aside>
        </div>
    );
};

export default Aside;