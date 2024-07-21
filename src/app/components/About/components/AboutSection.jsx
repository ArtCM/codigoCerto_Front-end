import Image from "next/image";
import Button from "./button";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">
          Por que <span className="text-red">escolher a Código Certo</span>?
        </h2>
        <p className="text-black mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button>Entrar em Contato</Button>
      </div>
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="relative w-[350px] h-[300px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/assets/img/about-img.webp"
            alt="Imagem sobre a empresa"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
