import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

export default function Ejemplos() {
  return (
    <div className="text-center bg-[#252525] text-white min-h-screen p-2">
      <motion.h1
        className="text-2xl font-bold mb-6 border-b border-black text-center p-4"
        initial={{ scale: 1.2, opacity: 0.5, y: -30 }}
        transition={{ duration: 0.8 }}
        animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
      >
        Documento de ejemplo
      </motion.h1>
      <Card className=" bg-[#1a1a1a] text-white shadow-2 p-4 m-4 rounded-lg ">
        <CardBody>
          <motion.div
            className="  flex justify-center items-center"
            initial={{ scale: 1.2, opacity: 0.5, z: -30 }}
            transition={{ duration: 0.8 }}
            animate={{ scale: 1.0, opacity: 1.0, z: 0 }}
          >
          <a href="https://docs.google.com/document/d/1TnR4xLa-hSeayWD_PQTRcQfq-F-1fjOc/edit?usp=drive_link&ouid=101923425644450168741&rtpof=true&sd=true">
          https://docs.google.com/document/d/1TnR4xLa-hSeayWD_PQTRcQfq-F-1fjOc/edit?usp=drive_link&ouid=101923425644450168741&rtpof=true&sd=true
          </a>
          </motion.div>
        </CardBody>
      </Card>
    </div>
  );
}
