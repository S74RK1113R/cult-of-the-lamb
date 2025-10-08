import { NavLink } from "react-router-dom"
export default function Navlink({children,to}) {
    return(
        <NavLink to={to} className='dark:text-zinc-300 font-bold transition-transform duration-200 hover:text-red-500 uppercase active:scale-110'>
            {children}
        </NavLink>
    )
}