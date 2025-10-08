import { Routes,Route } from "react-router-dom";
import Index from "../pages/Index";
import History from "../pages/History";
import PageNotFound from "../pages/PageNotFound";
import Jugability from "../pages/Jugability";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/historia" element={<History/>}/>
            <Route path="/jugabilidad" element={<Jugability/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}