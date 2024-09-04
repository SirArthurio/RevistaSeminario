import React from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

export default function Aprendamos() {
  return (
    <div className="bg-[#252525] min-h-screen ">
      <motion.h1
        className="text-2xl font-bold mb-6 border-b border-black text-center text-white p-4"
        initial={{ scale: 1.0, opacity: 0.5, y: -50 }}
        transition={{ duration: 0.8 }}
        animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
      >
        Video de la iniciativa
      </motion.h1>
      <div className="flex justify-center bg-[#1a1a1a] p-4 m-4 rounded-lg">
        <ReactPlayer
          url="https://youtu.be/uw2MWlIzqaA?si=FdWIewZs-3Sk-Sbd"
          controls
        />
      </div>
    </div>
  );
}
