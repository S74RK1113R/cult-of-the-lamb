import DefaultTemplate from "../template/DefaultTemplate";
import obisp from "../assets/obispos.jfif"
import ratau from "../assets/Ratau.jfif"
import cult from "../assets/sermon.jfif"

export default function History() {
    return(
        <DefaultTemplate>
            <div className="w-11/12 sm:w-8/12">

                <section className="flex flex-col items-center justify-center text-zinc-300 space-y-3 p-10">
                    <p>
                        <img src={obisp} alt="Obispos de la antigua fe" className="float-left w-40 sm:max-w-50 p-3"/>
                        El cordero al que tu controlas es el último de su especie que va a ser sacrificado por los obispos de la antigua fe los dominadores de las tierras de ese mundo. Al matarle un personaje casi divino que se denominaba El que Espera te ofrece un trato de tu vida a cambio de hacer una secta que represente sus ideales para hacer al cordero más fuerte y poder salvarlo. De repente llegas a un páramo de la foresta oscura que es la primera mazmorra del juego y aparece un ex sectario de El que Espera llamado Ratau que te guía, te enseña a manejar las armas y las maldiciones que funcionan con fervor que es un elixir rojo que aparece al derrotar a los enemigos, al llegar al final de la fase siempre hay un énemigo final esperando para retarte que a ser derrotado lo puedes convertir en tu adepto. Después de terminar esa primera fase nos damos cuenta que hay cuatro mazmorras una para cada obispo y que está en la última fase de cada mazmorra. 
                    </p>
                    <p>
                        <img src={ratau} alt="Imágen de Ratau" className=" float-right p-3 w-40 sm:max-w-50"/>
                        Apareces en un descampado muy descuidado y es hay donde te dice Ratau que tienes que formar tu secta y en un círculo de piedra aparece el adepto que habías conseguido derrotando al enemigo final. Ahí mientras lo adoctrinas puedes cambiar su color su forma su nombre etc. Después Ratau te dice que tienes que construir un templo y un centro donde rezarte para aumentar tu devoción y conseguir nuevos edificios que construir en tu secta. En el templo puedes dar sermones desbloquear vellocinos o dar nuevas doctrinas.
                    </p>
                    <p>
                        <img src={cult} alt="Cabra dando sermón" className="float-left p-3 w-40 sm:max-w-50"/>
                        Así puedes seguir avanzando por las mazmorras reclutando a adeptos para aumentar tu secta puedes encontrarte a amigos de Ratau para jugar a la matatena y conseguir piezas para desbloquear vellocinos o oro haciendo apuestas y también puedes desbloquear nuevos lugares en tu mapa particular a lgares donde se puede trasladar desde tu secta que en cada mazomrra se puede desbloquear un lugar nuevo como por ejemplo en la foresta oscura te encontraras con un señor pez que te nseñara un lugar llamado el pasaje del peregrino o Ratau cuando nos deja de ayudar nos enseña la cabaña solitaria donde se puede jugar a la matatena con sus amigos que también se desbloque uno por cada mazomrra y cada uno con más dificultad al llegar al fianl de esta mazmorra y en la cuarta fase y última te encuentras a Leshy el primer obispo celebrando un ritual que te da más poder para derrotarte al vencerle consigues su corazón con el que puedes conseguir uno de los poderes en el templo y también en el templo se puede conseguir mejorar tus armas, corazones, habilidades, maldiciones etc.
                    </p>
                </section>
                
            </div>
        </DefaultTemplate>
    )
}