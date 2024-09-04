import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Capas() {
  return (
    <motion.div
      initial={{ scale: 1.2, opacity: 0.5, z: +30 }}
      transition={{ duration: 0.5 }}
      animate={{ scale: 1.0, opacity: 1.0, z: 0 }}
      className="flex flex-col  min-h-screen bg-[#252525] text-white"
    >
      <div className="flex flex-1">
        <nav className="bg-muted   max-w-40">
          <motion.img
            initial={{ scale: 1.0, opacity: 0.1, z: +10, x: -40 }}
            transition={{ duration: 0.5 }}
            animate={{ scale: 1.0, opacity: 1.0, z: 0, y: 0 }}
            className="w-full h-full"
            src="https://i.pinimg.com/736x/72/21/49/7221491fe0c5e792d396ca13eb33d24e.jpg"
            alt="imagen de lao"
          />
        </nav>
        <main className="flex-1 pl-2 pr-2 pb-2">
          <motion.h1
            className="text-2xl font-bold mb-6 border-b border-black text-center p-4"
            initial={{ scale: 1.2, opacity: 0.5, y: -30 }}
            transition={{ duration: 0.8 }}
            animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
          >
            Nuestro Proyecto
          </motion.h1>
          <div className="grid gap-6">
            <motion.div
              initial={{ scale: 1.0, opacity: 0.1, z: +10, y: +40 }}
              transition={{ duration: 1.0 }}
              animate={{ scale: 1.0, opacity: 1.0, z: 0, y: 0 }}
            >
              <Card className="bg-[#1a1a1a] text-white shadow-2 p-4 rounded-lg">
                <CardBody>
                  <p className="text-muted-foreground pt-4 pb-3 pl-3 pr-3">
                  Valledupar, también conocida como Ciudad de Los Santos Reyes del Valle de Upar es un municipio y capital del departamento del cesar, el cual tiene una superficie de 4,978 Km2, posee 559.462 habitantes y su área metropolitana reúne aproximadamente 691.266 habitantes, la ciudad es un importante centro para la producción agrícola, agroindustrial y ganadera aunque también tiene presencia cultural en la región costera, y parte de esta presencia cultural radica principalmente en el festival de la leyenda vallenata, esto sumado a la influencia del vallenato en toda Colombia tomando como base principal que Valledupar es la cuna de este género musical, esto genera una fuerte llegada de turistas a la ciudad, pero el problema principal que enfrentan los turistas es que Valledupar es una ciudad pequeña en comparación de las ciudades insignias de Colombia, lo cual genera cierta limitantes a la hora de conocer nuevos lugares, eso sumado a la inexactitud de lugares de alto interés de la ciudad y lugares nuevo de alto interés, genera que la base de turistas que llega a Valledupar se devuelvan con sabor a poco o nada con respecto a Valledupar, esto es una problemática que gira en torno al desarrollo y la gestión turística de la ciudad y conocemos bien como una base firme y constante de turistas son capaces de generar ganancias millonarias y también conocemos que a largo plazo podrían generar con el financiamiento necesario y los planes adecuados un cambio a la razón social del municipio convirtiéndolo en un distrito turístico y acoplando el turismo como pilar para su economía, y para eso estamos aquí, para aportar nuestro grano de arena a este desierto futuro y próspero.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ scale: 1.0, opacity: 0.1, z: +10, y: +40 }}
              transition={{ duration: 1.0 }}
              animate={{ scale: 1.0, opacity: 1.0, z: 0, y: 0 }}
            >
              <Card className="bg-[#1a1a1a] text-white shadow-2 p-4 rounded-lg">
                <CardBody>
                  <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl text-center pt-1 pb-4">
                    Identificacion del Problema
                  </h2>
                  <p className="text-muted-foreground pt-4 pb-3 pl-3 pr-3">
                  Desde la recesión turística ocasionada por la pandemia del SARS-CoV-2 también conocido como COVID-19 el turismo en el mundo paro drásticamente, durante estos años el país ha experimentado la puesta en marcha de sus principales motores turísticos, siendo estos las ciudades insignias del turismo en Colombia, a pesar de Colombia tener ciudades donde su principal sustento es el turismo en mayor densidad, podemos ver conductas divergentes de este tipo de fenómenos, como es el creciente aumento de turistas a la ciudad de Valledupar, una ciudad agrícola y ganadera que posee los recursos culturales que hacen que esta sea optima para llamar la atención a los turistas interesados en aprender un poco de cultura colombiana, comidas autóctonas, paisajes montañosos, y la historia de la cuna de uno de los géneros musicales culturales mas presentes en todo el país.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ scale: 1.0, opacity: 0.1, z: +10, y: +40 }}
              transition={{ duration: 1.0 }}
              animate={{ scale: 1.0, opacity: 1.0, z: 0, y: 0 }}
            >
              <Card className="bg-[#1a1a1a] text-white shadow-2 p-4 rounded-lg">
                <CardBody>
                  <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl text-center pt-1 pb-4">
                    Descripcion de la Solucion
                  </h2>
                  <p className="text-muted-foreground pt-4 pb-3 pl-3 pr-3">
                  Sabiendo todo lo anteriormente mencionado, decidimos solucionar esta problemática, con nuestra aplicación de escritorio, Traveling Condor, una aplicación que cuenta con todos los sitios de mayor interés turístico, estratificado por las zonas de densidad turísticas evaluadas en la ciudad, la aplicación cuenta con un mapa grande, limpio y visible el cual muestra los puntos de interés y el usuario elegir el punto de interés a su gusto, una vez hecho el programa le mostrara al usuario la mejor ruta posible teniendo en cuenta el transporte público SIVA y sus respectivas estaciones de abordaje.
                  </p>

                  <p className="text-muted-foreground pt-4 pb-3 pl-3 pr-3">
                  Traveling Condor también contara con una UI intuitiva y elegante, además de mostrar las rutas de transporte público (SIVA) disponibles para que el usuario tome la mejor decisión posible, así como también un apartado donde el usuario puede pedir una sugerencia con base a sus peticiones sobre un lugar ideal para él y el Traveling Condor le brindara el lugar de interés ideal para ese usuario
                  </p>
                </CardBody>
              </Card>
            </motion.div>

          </div>
        </main>
      </div>
    </motion.div>
  );
}
