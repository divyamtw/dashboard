import React from 'react';
import {useState, useRef, useEffect} from 'react'
import {NavLink} from "react-router-dom";

const Aside = () => {
    const [width, setWidth] = useState(400);
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
        if (newWidth < 300 || newWidth > 600) return;
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

    const baseCss = "min-h-10 w-52 py-2 flex items-center justify-center active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full border text-white";

    const navLinks = [
        {
            Name: "Dashboard",
            href: "/",
        },
        {
            Name: "Music",
            href: "/music",
        },
        {
            Name: "GitHub",
            href: "/github",
        },
        {
            Name: "Pomodoro",
            href: "/pomodoro",
        },
        {
            Name: "Task",
            href: "/task",
        },
    ];

    return (
        <div className="h-screen flex bg-zinc-950"
        >
            <aside
                className="relative bg-zinc-900 text-white flex flex-col items-center  w-full rounded-br-3xl rounded-tr-3xl"
                style={{width: `${width}px`}}
            >
                <div className="p-4 font-semibold border-b border-zinc-800 ">
                    <img src="/temp/1.jpg" alt="" className="w-60 rounded-[50%]"/>
                </div>

                <div className="p-4 text-sm text-zinc-300">

                    <ul className='flex flex-col items-center  w-full gap-y-4 mt-8 select-none '>
                        {navLinks.map((link, i) => (
                            <NavLink
                                key={i}
                                to={link.href}
                                className={({isActive}) =>
                                    `${baseCss} ${isActive ? "bg-amber-500" : "bg-transparent"}`
                                }
                            >
                                {link.Name}
                            </NavLink>
                        ))}
                    </ul>

                </div>

                {/* DRAG HANDLE */
                }
                <div
                    onMouseDown={startResizing}
                    className="absolute top-0 right-0 h-full w-2 cursor-col-resize bg-transparent hover:bg-red-500"
                />

            </aside>
        </div>
    )
        ;
};

export default Aside;