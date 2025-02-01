import './App.css';
import { useState } from 'react';
import portfolioImages from "./Imagens/portfolio";

import Cabecalho from './Componentes/Cabecalho';
import Banner from './Componentes/Banner';
import Servicos from './Componentes/Servicos';
import Rodape from './Componentes/Rodape';
import SobreNos from './Componentes/SobreNos';
import Portfolio from './Componentes/Portfolio';
import Time from './Componentes/Time';
import ScrollTopo from './Componentes/ScrollTopo';
import Contato from './Componentes/Contato';

import { useLightBox } from './Hooks/LightBox';
import { useMenu } from './Hooks/Menu';
import { useTraducao } from './Hooks/Traducao';

function App() {
  const { lightboxController, aoMostrarLightBox } = useLightBox();
  const { menuAberto, aoMostrarMenu } = useMenu();
  const { conteudo } = useTraducao();
  
  const [empresa] = useState("Diamantec");  

  return (
    <div className="App">
      <Cabecalho
        itensMenu={conteudo.menu}
        mostraMenu={aoMostrarMenu}
        MenuAberto={menuAberto}
      />

      <Banner
        titulo={conteudo.banner.titulo}
        subTitulo={conteudo.banner.subTitulo}
        botaoSaibaMais={conteudo.banner.botao}
      />

      <Servicos
        titulo={conteudo.servicos.titulo}
        itens={conteudo.servicos.itens}
      />

      <SobreNos
        titulo={conteudo.sobreNos.titulo}
        alt={conteudo.sobreNos.alt}
        textos={conteudo.sobreNos.texto}
      />

      <Portfolio
        titulo={conteudo.portfolio.titulo}
        itens={conteudo.portfolio.itens}
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        aoMostrarPortfolioLightBox={aoMostrarLightBox}
        sourceLightBox={Object.values(portfolioImages)}
      />

      <Time
        titulo={conteudo.time.titulo}
        time={conteudo.time.itens}
      />

      <Contato
        titulo={conteudo.contato.titulo}

        endereco={conteudo.contato.endereco}
        instagram={conteudo.contato.redesSociais.instagram}
        linktree={conteudo.contato.redesSociais.linktree}

        inputNome={conteudo.contato.formInputs.nome}
        inputAssunto={conteudo.contato.formInputs.assunto}
        inputMensagem={conteudo.contato.formInputs.mensagem}
        inputBotao={conteudo.contato.formInputs.botao}

        statusEmailForm={conteudo.contato.envioEmailStatus}
      />

      <Rodape
        empresa={empresa}
        textoDireitos={conteudo.direitos.texto}
      />

      <ScrollTopo />
    </div >
  );
}

export default App;
