import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Inicio() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-white">
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]" />
        <img
          src="https://images.squarespace-cdn.com/content/v1/53f06387e4b0058ebcdb9751/1587009062220-TIACW3D08NHWT2MX04M6/S070_CAM_01_pedrofleming.com"
          alt="Hero"
          className="h-full w-full object-cover object-center"
          width="1600"
          height="800"
          style={{ aspectRatio: "1600/800", objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ scale: 1.0, opacity: 0.1, y: +30 }}
            transition={{ duration: 0.5 }}
            animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
          >
            Revista Digital
          </motion.h1>

          <motion.p
            className="max-w-xl text-lg text-muted-foreground"
            initial={{ scale: 1.0, opacity: 0.1, y: +30 }}
            transition={{ duration: 0.5 }}
            animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
          >
            Exploremos juntos.
          </motion.p>
        </div>
      </section>

      <section className="bg-[#252525] py-12 md:py-24 px-4">

        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          <div className="group relative overflow-hidden rounded-lg bg-[#1a1a1a] transition-all duration-300 hover:bg-[#252525]">
            <Link to="/Arquitectura">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] transition-all duration-300 group-hover:from-[#252525]/80 group-hover:to-[#252525]/80" />
              <div className="relative z-10 p-6 transition-all duration-300 group-hover:p-8">
                <h3 className="text-2xl font-bold text-center">
                  Articulo Cientifico
                </h3>
                <p className="mt-2 text-muted-foreground text-center">
                  TODO lo relacionado con Articulos cientificos
                </p>
              </div>
            </Link>
          </div>

          <Link to="/Capas">
            <div className="group relative overflow-hidden rounded-lg bg-[#1a1a1a] transition-all duration-300 hover:bg-[#252525]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] transition-all duration-300 group-hover:from-[#252525]/80 group-hover:to-[#252525]/80" />
              <div className="relative z-10 p-6 transition-all duration-300 group-hover:p-8">
                <h3 className="text-2xl font-bold text-center">
                  Nuestra Porpuesta
                </h3>
                <p className="mt-2 text-muted-foreground text-center">
                  Podran leer y vizualisar nuestra solucion a la problematica
                </p>
              </div>
            </div>
          </Link>

          <div className="group relative overflow-hidden rounded-lg bg-[#1a1a1a] transition-all duration-300 hover:bg-[#252525]">
            <Link to="/Ventajas">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] transition-all duration-300 group-hover:from-[#252525]/80 group-hover:to-[#252525]/80" />
              <div className="relative z-10 p-6 transition-all duration-300 group-hover:p-8">
                <h3 className="text-2xl font-bold text-center">¿Qué revistas recomendamos?</h3>
                <p className="mt-2 text-muted-foreground text-center">
                Tipos de revistas donde recomendamos publicar.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
