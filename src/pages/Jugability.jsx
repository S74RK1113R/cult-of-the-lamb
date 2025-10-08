import DefaultTemplate from "../template/DefaultTemplate";
import lamb from "../assets/img-3.jfif"
import city from "../assets/secta.jfif"
import titlegame from "../assets/img1.jfif"
export default function Jugability() {
    return(
        <DefaultTemplate>
            <div className="w-11/12 sm:w-8/12 ">

                <section className="flex flex-col items-center justify-center text-zinc-300 space-y-3 p-10">
                    <p>
                        <img src={lamb} alt="Imágen de la cabra del juego" className=" w-40 float-left p-5 sm:max-w-60" />
                        Cult of the Lamb gira en torno a un cordero poseído que debe formar un culto para apaciguar a la deidad que salvó su vida. A través de un sistema roguelike, el jugador debe aventurarse en cinco regiones para derrotar a los enemigos y hacer crecer sus seguidores. El mundo, generado aleatoriamente, contiene recursos que reunir, ventajas y armas que recoger, enemigos en forma de cultistas rivales y no creyentes contra los que luchar, y otros animales que rescatar; estos animales pueden ser adoctrinados en el culto del jugador. Tienen una apariencia que puede cambiarse y rasgos positivos y negativos, que pueden afectar a su forma de actuar en el culto o a su reacción ante las acciones del jugador en relación con el culto.
                    </p>

                    <p>
                        <img src={city} alt="Imagen de la aldea" className=" w-40 sm:max-w-70 float-right p-5" />
                        El jugador puede gestionar a sus seguidores en la aldea de su culto. A los seguidores se les pueden asignar tareas en la base como recoger recursos, construir estructuras, rendir culto, realizar rituales, enviarlos a ayudar al jugador en la batalla o sacrificarlos, lo que puede afectar a las habilidades del jugador y al propio culto. El jugador debe asegurarse de que las necesidades de sus seguidores están cubiertas realizando sermones y rituales para reforzar su fe, cocinando comida para que sobrevivan, proporcionándoles refugio y asegurándose de que la aldea está limpia y es higiénica. De lo contrario, los seguidores pueden volverse en contra del jugador, propagar la disidencia y acabar abandonando el culto con otros seguidores; para evitarlo, el jugador puede mantenerlos, darles regalos, reeducarlos o detenerlos en una picota hasta que dejen de disentir.
                    </p>

                    <p>
                        <img src={titlegame} alt="Imágen del titulo del juego" className=" w-40 sm:max-w-70 float-left p-5" />
                        El juego añadió muchas actualizaciones que se informaba de ellas en el menu principal en una pestaña donde ponía "se vienen cositas" como añadir un modo cooperativo de dos jugadores con un personaje nuevo llamada la cabra que también se desbloqueo en el templo para ser el look principal del jugador, o también se desbloqueó el pecado que vino con muchos edificios o novedades como por ejemplo mejorar tu templo. También se podían construir la tasca, el refugio del revolcón que genera huevos que son nuevos adeptos que se tienen que incubar en la incubadora y cuando sale tiene que estar en la guardería. A lo largo de su existencia creó contenidos descargables como nuevas formas de adeptos o decoraciones que valían dinero como el heretic pack, cultist pack, pilgrim pack y sinful pack.
                    </p>

                    <p>
                        Otra gran actualización fue la introducción de una segunda parte de cuando derrotas a los cuatro obispos y al jefe final El que Espera un ser misterio aparece en la puerta de El que Espera diciendo que restaures lo que has roto y que acabes tu trabajo con los obispos. Al decirte esto se desbloquean otra vez todas la mazmorras y te las tienes que volver a pasar pero esta vez para poder acceder a ellas deberas sacrificar a adeptos de diferentes niveles.
                    </p>
                    
                    
                </section>
                
            </div>
        </DefaultTemplate>
    )
}