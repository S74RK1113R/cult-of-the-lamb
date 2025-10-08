import { NavLink } from "react-router-dom"
export default function Navlink({children,to, properties}) {
    return(
        <NavLink to={to} className={` ${properties} dark:text-zinc-300 font-bold transition-transform duration-200 uppercase active:scale-110`}>
            {children}
        </NavLink>
    )
}