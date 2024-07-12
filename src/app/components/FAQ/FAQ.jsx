import Image from "next/image";
import { Accordion } from "./components/Accordion";

const data = [
  {
    id: 1,
    title: "Entrei na comunidade, e Agora? 🤔",
    description:
      "Somos a comunidade Codigo Certo Coders, um espaço dedicado à tecnologia e ao desenvolvimento colaborativo, com foco no voluntariado. Valorizamos o respeito e a cooperação mútua em todas as nossas interações. 🤝",
    active: true,
  },
  {
    id: 2,
    title: "Trilhas Iniciais 🎯",
    description:
      "As trilhas iniciais têm o propósito de avaliar o nível técnico dos participantes. Recomendamos que você leia atentamente as instruções de cada trilha, escolha uma área de interesse e execute o projeto com dedicação.",
    active: false,
  },
  {
    id: 3,
    title: "Finalidade das Trilhas",
    description:
      "Avaliação Técnica: Conhecer seu nível de conhecimento e habilidades práticas. Inserção em Equipes: Aqueles que completarem a trilha com sucesso serão alocados em equipes de desenvolvimento.",
    active: false,
  },
];

export const FAQ = () => {
  return (
    <section className="flex flex-col items-center py-20">
      <h2 className="text-3xl font-bold mx-auto mb-14">Dúvidas Frequentes</h2>
      <div className="flex flex-col items-center justify-between gap-10 w-4/5 md:flex-row md:items-start">
        <Image
          src="https://avatars.githubusercontent.com/u/170693068?v=4"
          alt="Descrição da imagem"
          className="w-full max-w-[460px] h-1/2 rounded-[40px] md:w-1/2"
          width={460}
          height={460}
        />
        <section className="w-full md:w-1/2 max-w-[460px] flex flex-col gap-5">
          {data.map((ask) => (
            <Accordion
              key={ask.id}
              title={ask.title}
              description={ask.description}
              active={ask.active}
            />
          ))}
        </section>
      </div>
    </section>
  );
};
