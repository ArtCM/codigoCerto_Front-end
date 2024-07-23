import Image from 'next/image'
import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdMonitor } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function Produtos() {
  return (
    <section className="w-full h-full bg-secondary text-terciary font-sans p-10 ">
      <h2 className="text-[35px] font-bold text-center leading-[35px] mb-10">
        <span className="text-terciary">Nossas</span> <span className="text-primary">Soluções</span>
      </h2>
      <div className="flex gap-16 justify-center">
        <div className="w-[300px] min-h-[370px] bg-gray-200 flex flex-col justify-between items-center border border-white shadow-md p-4">
        <MdMonitor className='h-[48px] w-[48px]' />
          <p className="font-bold text-lg">SITES</p>
          <p className="text-terciary leading-6 mt-2 text-lg ">Sites são essenciais na era digital, permitindo a comunicação e interação online. Utilizando as linguagens de programação, eles oferecem uma experiência responsiva e interativa, adaptando-se a diversos dispositivos e mantendo os usuários engajados.</p>
          <button className="w-[250px] h-[43.4px] bg-primary text-terciary rounded mt-4 ">
            Contratar!
          </button>
        </div>
         <div className="w-[300px] min-h-[370px] bg-gray-200 flex flex-col justify-between items-center border border-white shadow-md p-4">
         <IoSettingsOutline className='h-[48px] w-[48px]'/>
         <p className="font-bold text-lg">SOFTWARES</p>
          <p className="text-terciary mt-2 leading-6 text-lg ">Softwares são programas essenciais que permitem a execução de tarefas em dispositivos eletrônicos. Eles variam de aplicativos simples a sistemas complexos, facilitando processos, aumentando a eficiência e aprimorando a experiência do usuário.</p>
          <button className="w-[250px] h-[43.4px] bg-primary text-terciary rounded mt-4 ">
            Contratar!
          </button>
        </div>
        <div className="w-[300px] min-h-[370px] bg-gray-200 flex flex-col justify-between items-center border border-white shadow-md p-4">
          <MdOutlineDesignServices className='h-[48px] w-[48px]'/>
          <p className="font-bold text-lg">DESING</p>
          <p className="text-terciary mt-2 leading-6 text-lg ">Design é a arte de criar soluções visuais e funcionais, combinando estética e utilidade. Ele é essencial em diversas áreas, como web, gráfico e produto, melhorando a experiência do usuário e comunicando mensagens de forma eficaz.</p>
          <button className="w-[250px] h-[43.4px] bg-primary text-terciary rounded mt-4 ">
            Contratar!
          </button>
        </div>
      </div>
    </section>
  );
}
