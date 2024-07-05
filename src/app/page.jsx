import Header from "./components/Header";

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
      <span className="block">[Coloque aqui a sessão: About]</span>
      <span className="block">[Coloque aqui a sessão: Products]</span>
      <span className="block">[Coloque aqui a sessão: FAQ]</span>
      <span className="block">[Coloque aqui a sessão: Footer]</span>
    </>
  );
}
