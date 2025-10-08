import DefaultTemplate from "../template/DefaultTemplate"
import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import stanicLamb from "../assets/img-5.png"
export default function PageNotFound() {
    return(
        <DefaultTemplate>
            <div className="flex-1 flex flex-col items-center justify-center">
                <img src={stanicLamb} alt="Imágen de la cabra " className="w-40"/>
                <Subtitle>Página no encontrada</Subtitle>
            </div>
            
        </DefaultTemplate>
            
        
    )
}