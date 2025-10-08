import { useRef } from "react";
import { CrownIcon } from "../icons/Icons";
import Navlink from "./NavLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
    const tl = useRef()
    const menu = useRef()
    
    function handleClick(){
        tl.current.reversed(!tl.current.reversed())
    }

    useGSAP(()=>{
        const menuPing = gsap.utils.toArray('.menu-ping')

        tl.current = gsap.timeline()
        .from('.drop-menu',{y:-400, opacity:0, duration:0.05})
        .to(menuPing[0],{rotation:45, duration:0.2, position:'absolute'})
        .to(menuPing[2],{rotation:-45, duration:0.2, position:'absolute'})
        .to(menuPing[1],{opacity:0, duration:0.1},"<")
        .reverse()
    },{scope:menu})

    return(
        <nav className="text-zinc-300 w-full bg-zinc-800 dark:bg-neutral-950 py-3 flex flex-row items-center justify-center">
            <div className="pl-5">
                <CrownIcon/>
            </div>
            <div className="hidden flex-1 sm:flex flex-row items-center justify-center gap-5">
                <Navlink to={'/'}>Inicio</Navlink>
                <Navlink to={'/historia'}>Historia</Navlink>
                <Navlink to={'/jugabilidad'}>Jugabilidad</Navlink>
            </div>
            <div className="flex-1 sm:hidden"></div>

            <ThemeSwitcher/>

            <div ref={menu} className="sm:hidden relative pr-5 flex flex-col gap-2" onClick={handleClick}>
                <div className="menu-ping w-10 bg-zinc-300 h-2 rounded-full"></div>
                <div className="menu-ping w-10 bg-zinc-300 h-2 rounded-full"></div>
                <div className="menu-ping w-10 bg-zinc-300 h-2 rounded-full"></div>
                
                {/*Drop Menu*/}
                <div className="drop-menu absolute top-15 right-2 flex flex-col backdrop-blur-md text-black dark:bg-neutral-900/60 p-10 border-4 border-double rounded-2xl items-center justify-center gap-5">
                    <Navlink to={'/'}>Inicio</Navlink>
                    <Navlink to={'/historia'}>Historia</Navlink>
                    <Navlink to={'/jugabilidad'}>Jugabilidad</Navlink>
                </div>
            </div>
        </nav>
    )
}