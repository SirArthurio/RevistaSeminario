import React from "react";
import DataTable, { createTheme } from "react-data-table-component";

export default function Tabla() {
    createTheme('nier', {
        text: {
          primary: '#ffffff',
          secondary: '#2aa198',
        },
        background: {
          default: '#252525',
        },
        context: {
          background: '#252525',
          text: '#FFFFFF',
        },
        divider: {
          default: '#1a1a1a',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');
  const columnas = [
    {
      name: "Revistas",
      selector: row => row.Ventajas,
    },
    {
      name: "Tipo",
      selector: row => row.Desventajas,
    },
  ];
  const data = [
    {
      Ventajas: "Journal of Internet Services and Applicationss.",
      Desventajas:"Revista Diaria.",
    },
    {
        Ventajas: "Revista Chilena de Derecho y TecnologiaOpen Access.",
        Desventajas:"Revista Diaria.",
    },
    {
        Ventajas: "Brazilian Journal of Operations and Production Management.",
        Desventajas:"Revista Diaria.",
    },
    {
        Ventajas: "Journal of Computer Science and Technology(Argentina)Open Access",
        Desventajas:"Revista Diaria.",
    },

    {
        Ventajas:"Uniciencia",
        Desventajas:"Revista Diaria.",
    },
     {
        Ventajas:"Revista de Informatica Teorica e Aplicada",
        Desventajas:"Revista Diaria.",
    },
    {
      Ventajas:"Revista Colombiana de Computacion",
      Desventajas:"Revista Diaria.",
    },
    {
      Ventajas:"Journal of Engineering and Technology for Industrial Applications",
      Desventajas:"Revista Diaria.",
    },
    {
      Ventajas:"Aibi, Revista de Investigacion Administracion e Ingenierias",
      Desventajas:"Revista Diaria.",
    },
    {
      Ventajas:"Data and Metadata",
      Desventajas:"Revista Diaria.",
    },

  ];

  return (
    <div>
    <section className="border bg-[#252525] text-white text-center text-2xl p-4 h-full">
      <h2 className="p-2 m-2">Revistas y tipos</h2>
      <DataTable columns={columnas} data={data}  theme="nier"/>
    </section>
    </div>

  );
}
