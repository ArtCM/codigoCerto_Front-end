import Header from "./components/Header";
import { FAQ } from "./components/FAQ/FAQ";
import About from "./components/About";

export default function Home() {
  return (
    <>
      {/* 
        Exemplo:
        Crie o componente, importe acima do export default e chame ele no local indicado dessa forma:
        <Header />
      */}
      <Header />
      <span className="block">[Coloque aqui a sessão: Header]</span>
      <About />
      <span className="block">[Coloque aqui a sessão: Products]</span>
      <span className="block">[Coloque aqui a sessão: FAQ]</span>
      <FAQ />
      <span className="block">[Coloque aqui a sessão: Footer]</span>
    </>
  );
}
