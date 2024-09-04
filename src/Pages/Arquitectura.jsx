import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Arquitectura() {
  return (
    <motion.div
      initial={{ scale: 1.2, opacity: 0.5, z: +30 }}
      transition={{ duration: 0.5 }}
      animate={{ scale: 1.0, opacity: 1.0, z: 0 }}
      className="flex flex-col  min-h-screen bg-[#252525] text-white"
    >
      <div className="flex flex-1">
        <nav className="bg-muted max-w-60">
          <img
            className="w-full h-full"
            src="https://4kwallpapers.com/images/wallpapers/windows-11-dark-mode-blue-stock-official-1080x1920-5630.jpgs"
            alt="imagen de lao"
          />
        </nav>
        <main className="flex-1 pl-2 pr-2">
        <motion.h1
            className="text-2xl font-bold mb-6 border-b border-black text-center p-4"
            initial={{ scale: 1.2, opacity: 0.5, y: -30 }}
            transition={{ duration: 0.8 }}
            animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
          >
            Articulo Cientifico
          </motion.h1>
          <div className="grid gap-6">
            <motion.div>
              <Card className="bg-[#1a1a1a] text-white shadow-2 p-4 rounded-lg">

                <CardBody>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center pb-7">¿Qué es un Articulo Cientifico?</h1>
                  <p className="text-muted-foreground">
                  Un artículo científico es un documento que presenta los resultados de una investigación original o una revisión crítica sobre un tema específico. Se publica en revistas académicas o científicas y está dirigido a una audiencia especializada. El propósito de un artículo científico es comunicar hallazgos de manera clara y rigurosa, contribuyendo al avance del conocimiento en una disciplina particular.
                  </p>
                </CardBody>
                <CardHeader>
                <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl text-center pt-10">Estructura de un Articulo Cientifico</h2>
                </CardHeader>
                <CardBody className="pt-4">
                  <p className="text-muted-foreground">
                  La estructura de un artículo científico puede variar ligeramente según el campo y la revista, pero en general sigue un formato estándar que incluye las siguientes secciones:
                  <p className="pt-3 font-bold">
                  - Título:
                  </p>
                  <p>
                  Debe ser claro y descriptivo, reflejando el contenido del artículo y captando la atención del lector.
                  </p>
                  <p className="pt-3 font-bold">
                  - Resumen (Abstract):
                  </p>
                  
                  Un resumen conciso de los objetivos, métodos, resultados y conclusiones del estudio. Suele tener entre 150 y 300 palabras y permite a los lectores determinar rápidamente la relevancia del artículo.
                  <p className="pt-3 font-bold">
                  - Introducción:
                  </p>

                  Proporciona el contexto y la justificación del estudio. Presenta el problema de investigación, la revisión de la literatura relevante y los objetivos del estudio o hipótesis.
                  <p className="pt-3 font-bold">
                  - Métodos (Metodología):
                  </p>
                  Describe en detalle el diseño del estudio, los procedimientos experimentales, los instrumentos utilizados, y cómo se recolectaron y analizaron los datos. Permite a otros investigadores replicar el estudio.
                  
                  <p className="pt-3 font-bold"> 
                  - Resultados:
                  </p>

                  Presenta los hallazgos del estudio de manera objetiva, a menudo acompañados de tablas, figuras y gráficos. Se debe evitar interpretar los resultados en esta sección.
                  <p className="pt-3 font-bold">
                  - Discusión:
                  </p>
                  
                  Interpreta los resultados en el contexto de la hipótesis inicial y la literatura existente. Discute las implicaciones, las limitaciones del estudio y su relevancia para el campo de estudio.
                  <p className="pt-3 font-bold">
                  - Conclusiones:
                  </p>

                  Resume las principales conclusiones del estudio, destacando su importancia y cómo contribuye al conocimiento existente. Algunas veces, esta sección se combina con la discusión.
                  <p className="pt-3 font-bold">
                  - Referencias (Bibliografía):
                  </p>
                  
                  Enumera todas las fuentes citadas en el artículo. Debe seguir un estilo de citación específico (APA, MLA, Chicago, etc.) según las normas de la revista.
                  <p className="pt-3 font-bold">
                  - Agradecimientos (Opcional):
                  </p>

                  Reconoce a las personas o instituciones que ayudaron en la investigación o financiación del estudio.
                  <p className="pt-3 font-bold">
                  - Apéndices (Opcional):
                  </p>

                  Incluye material adicional como datos extensos, cuestionarios, o procedimientos que son relevantes para la investigación pero no esenciales para la comprensión principal del texto.
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
