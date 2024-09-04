import React from "react";
import { motion } from "framer-motion";

export default function Conclusion() {
  return (
    <div className="text-justify bg-[#252525] text-white min-h-screen p-2">
      <motion.h1
        className="text-2xl font-bold mb-6 border-b border-black text-center p-4"
        initial={{ scale: 1.0, opacity: 0.5, y: -50 }}
        transition={{ duration: 0.8 }}
        animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
      >
        ¿Que quienes somos?
      </motion.h1>
      <motion.section
        className="bg-[#1a1a1a] text-white shadow-2 p-4 rounded-lg"
        initial={{ scale: 1.2, opacity: 0.5, z: +30 }}
        transition={{ duration: 0.8 }}
        animate={{ scale: 1.0, opacity: 1.0, z: 0 }}
      >
        <p className="pt-3">Somos un grupo de desarrollo creado por estudiantes con muchas ganas de desarrollar, innovar y optimizar sistemas con la finalidad de dar soluciones utiles y faciles a problemas complejos. </p>
        <p>
          Si estas interesado en este proyecto o en algun otro, no dudes en ponerte en contacto con nosotros, tambien puedes ver nuestro git hub si deseas ver mas proyectos:
        </p>
        <a href="GitHub">
          <p className="pt-4 text-lg font-bold">
          https://github.com/Cod3G3ar
          </p>
        </a>
        <p className="pt-4 text-lg font-bold">
          Telefono: +57 3045510907
        </p>
      </motion.section>
    </div>
  );
}
