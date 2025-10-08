import DefaultTemplate from "../template/DefaultTemplate";
import Title from "../components/Title"
import portrait from "../assets/img-4.jfif"

export default function Index() {
    return(
        <DefaultTemplate>
            <div className="w-11/12 sm:max-w-10/12 h-full mx-auto flex  flex-col sm:flex-row items-center justify-center">
                <aside className="min-h-full min-w-xs p-5 sm:px-5">
                    <img src={portrait} alt="Cult of the Lamb img" />
                </aside>
                <section className="flex flex-col items-center justify-center text-zinc-300 space-y-3 px-3 pb-5">
                    <Title>Cult of the Lamb</Title>
                    <p>
                        Es un juego de acción y aventuras y de mazmorras desarrollado por el desarrollador independiente Massive Monster y publicado por Devolver Digital . El juego se lanzó el 11 de agosto de 2022 para Windows, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One y Xbox Series X/S.
                    </p>
                    <p>
                        En el juego, un cordero es salvado de la muerte por un deidad extraña llamada "El Que Espera", y debe pagar su deuda creando seguidores leales en su nombre mientras realiza una serie de cruzadas contra sus ejecutores.
                    </p>
                    <Title>Desarrollo</Title>
                    <p>
                        Cult of the Lamb es desarrollado por Massive Monster, una desarrolladora de juegos independiente que también ha creado The Adventure Pals,Never Give Up y Unicycle Giraffe . Cult of the Lamb se anunció oficialmente en Gamescom en agosto de 2021 y se lanzó el 11 de agosto de 2022.
                    </p> 
                </section> 
            </div>
        </DefaultTemplate>
    )
}