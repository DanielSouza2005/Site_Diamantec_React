import './App.css';
import Cabecalho from './Componentes/Cabecalho';
import Banner from './Componentes/Banner';
import { useState } from 'react';

function App() {

  const itens_navbar = [
    {
      nome: "Início",
      index: 0,
      href: "#banner"
    },
    {
      nome: "Serviços",
      index: 1,
      href: "#servicos"
    },
    {
      nome: "Sobre",
      index: 2,
      href: "#sobre"
    },
    {
      nome: "Portfólio",
      index: 3,
      href: "#portfolio"
    },
    {
      nome: "Time",
      index: 4,
      href: "#time"
    },
    {
      nome: "Contato",
      index: 5,
      href: "#contato"
    }
  ];

  const [menuAberto, setMenuAberto] = useState(false);

  const mostraMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const bannerTitulo = "Lapidando seus Sonhos";
  const bannerSubTitulo = "Para nós, todos têm o potencial de brilhar como um diamante!";
  const bannerBotao = "Saiba Mais";

  return (
    <div className="App">
      <Cabecalho 
        itens_navbar={itens_navbar} 
        mostraMenu={mostraMenu}
        MenuAberto={menuAberto}
      />

      <Banner 
        titulo={bannerTitulo}
        subTitulo={bannerSubTitulo}
        botaoSaibaMais={bannerBotao}
      />
    </div>
  );
}

export default App;
