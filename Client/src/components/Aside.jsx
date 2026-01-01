import React from 'react';
import {NavLink} from "react-router-dom";

const Aside = ({width}) => {

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
        {
            Name: "Calendar",
            href: "/calendar",
        },
    ];

    const baseCss = "min-h-10 w-52 py-2 flex items-center justify-center active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full border text-white hover:bg-amber-400";

    return (
        <div className="h-screen flex"
        >
            <aside
                className="relative bg-blue-900 text-white flex flex-col items-center  w-full rounded-br-3xl rounded-tr-3xl overflow-hidden"
                style={{width: `${width}px`}}
            >
                <div className="p-4 font-semibold border-b border-zinc-800 ">
                    <img src="/temp/1.jpg" alt="" className="w-60 rounded-[50%]"/>
                </div>

                <div className="p-4 text-sm text-zinc-300">

                    <ul className='flex flex-col items-center  w-full gap-y-4 mt-8 select-none'>
                        {navLinks.map((link, i) => (
                            <NavLink
                                key={i}
                                to={link.href}
                                className={({isActive}) =>
                                    `${baseCss} ${isActive ? "bg-amber-500 border-none" : "bg-transparent"}`
                                }
                            >
                                {link.Name}
                            </NavLink>
                        ))}
                        {/*<div*/}
                        {/*    className="absolute bottom-0 px-10 py-3 bg-slate-800 w-full flex items-center justify-between h-20">*/}
                        {/*    <NavLink to="/profile" className={({isActive}) =>*/}
                        {/*        `text-white text-xl hover:bg-amber-500 rounded-xl px-16 py-3 ${isActive ? "bg-amber-500 " : "bg-transparent"}`*/}
                        {/*    }>Profile</NavLink>*/}
                        {/*    <button className="px-6 py-1 rounded-2xl bg-red-500">LogOut</button>*/}
                        {/*</div>*/}
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Aside;
