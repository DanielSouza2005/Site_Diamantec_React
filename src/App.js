import './App.css';
import { useEffect, useState } from 'react';

import Cabecalho from './Componentes/Cabecalho';
import Banner from './Componentes/Banner';
import Servicos from './Componentes/Servicos';
import Rodape from './Componentes/Rodape';

import { IoIosCamera } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { BsBriefcaseFill } from "react-icons/bs";
import SobreNos from './Componentes/SobreNos';

function App() {
  function Traduzir(idioma) {
    if (idioma === "pt-br") {
      setNavbar_ativo([
        {
          nome: "Início",
          index: 0,
          active: true,
          href: "#banner"
        },
        {
          nome: "Serviços",
          index: 1,
          active: false,
          href: "#servicos"
        },
        {
          nome: "Sobre",
          index: 2,
          active: false,
          href: "#sobre"
        },
        {
          nome: "Portfólio",
          index: 3,
          active: false,
          href: "#portfolio"
        },
        {
          nome: "Time",
          index: 4,
          active: false,
          href: "#time"
        },
        {
          nome: "Contato",
          index: 5,
          active: false,
          href: "#contato"
        }]);

      setItens_servicos([
        {
          id: 0,
          titulo: "Marketing",
          texto: "Orientamos no processo de planejamento, na execução e no controle das estratégias para satisfazer as necessidades do mercado.",
          icone: <IoIosCamera size={36} className="servicos-card-icone" />
        },
        {
          id: 1,
          titulo: "Softwares",
          texto: "Desenvolvemos softwares responsáveis por projetar informações de diversos setores, com o intuito de facilitar processos.",
          icone: <FaComputer size={36} className="servicos-card-icone" />
        },
        {
          id: 2,
          titulo: "Páginas Web",
          texto: "Realizamos a codificação de sites e softwares de gestão de negócios, os quais estão em alta no mercado digital.",
          icone: <IoCodeSlash size={36} className="servicos-card-icone" />
        },
        {
          id: 3,
          titulo: "Administração",
          texto: "Auxiliamos no planejamento e na estratégia de negócio, nos setores de gestão financeira, recursos humanos e no controle de processos internos.",
          icone: <BsBriefcaseFill size={36} className="servicos-card-icone" />
        }
      ]);

      setBannerTitulo("Lapidando seus Sonhos");
      setBannerSubTitulo("Para nós, todos têm o potencial de brilhar como um diamante!");
      setBannerBotao("Saiba Mais");

      setServicosTitulo("Nossos Serviços");

      setSobreNosTitulo("Sobre Nós");
      setSobreNosAlt("Mesa com computadores em cima");
      setSobreNosTexto(["Na Diamantec, nosso compromisso é oferecer o melhor para nossos clientes, e para isso, contamos com uma equipe de profissionais altamente especializados em áreas estratégicas como marketing, desenvolvimento de websites e softwares de gerenciamento.",
        "Acreditamos que todos nasceram para brilhar, e nossa missão é potencializar esse brilho em cada cliente, com dedicação, excelência e comprometimento.",
        "Venha fazer parte da família Diamantec e transforme suas ideias em grandes conquistas!"]);

      setTextoDireitos("Todos os Direitos Reservados");
    }
    else if (idioma === "en") {
      setNavbar_ativo([
        {
          nome: "Home",
          index: 0,
          active: true,
          href: "#banner"
        },
        {
          nome: "Services ",
          index: 1,
          active: false,
          href: "#servicos"
        },
        {
          nome: "About Us",
          index: 2,
          active: false,
          href: "#sobre"
        },
        {
          nome: "Portfolio",
          index: 3,
          active: false,
          href: "#portfolio"
        },
        {
          nome: "Team",
          index: 4,
          active: false,
          href: "#time"
        },
        {
          nome: "Contact",
          index: 5,
          active: false,
          href: "#contato"
        }]);

      setItens_servicos([
        {
          id: 0,
          titulo: "Marketing",
          texto: "We provide guidance in the process of planning, executing, and controlling strategies to satisfy the needs of the market.",
          icone: <IoIosCamera size={36} className="servicos-card-icone" />
        },
        {
          id: 1,
          titulo: "Softwares",
          texto: "We develop systems responsible for projecting information from various sectors, in order to make processes easier.",
          icone: <FaComputer size={36} className="servicos-card-icone" />
        },
        {
          id: 2,
          titulo: "Web Pages",
          texto: "We do website coding, business management software, and other services, which are in high demand in the digital market.",
          icone: <IoCodeSlash size={36} className="servicos-card-icone" />
        },
        {
          id: 3,
          titulo: "Administration",
          texto: "We are involved in corporate planning and commercial strategy in the areas of financial management, human resources and internal process control.",
          icone: <BsBriefcaseFill size={36} className="servicos-card-icone" />
        }
      ]);

      setBannerTitulo("Polishing your Dreams");
      setBannerSubTitulo("For us, everyone has the potential to shine like a diamond!");
      setBannerBotao("Know More");

      setServicosTitulo("Our Services");

      setSobreNosTitulo("About Us");
      setSobreNosAlt("Table with computers on top");
      setSobreNosTexto(["At Diamantec, our commitment is to deliver the best to our clients. To achieve this, we rely on a team of highly specialized professionals in strategic areas such as marketing, website development, and management software.",
                        "We believe everyone was born to shine, and our mission is to amplify that brilliance in each client, with dedication, excellence, and commitment.",
                        "Join the Diamantec family and turn your ideas into great achievements!"]);

      setTextoDireitos("All Rights Reserved");
    }
  }

  let [idiomaGlobal, setIdiomaGlobal] = useState("pt-br");
  const [empresa, setEmpresa] = useState("Diamantec");

  const [bannerTitulo, setBannerTitulo] = useState("");
  const [bannerSubTitulo, setBannerSubTitulo] = useState("");
  const [bannerBotao, setBannerBotao] = useState("");

  const [servicosTitulo, setServicosTitulo] = useState("");

  const [sobreNosTitulo, setSobreNosTitulo] = useState("");
  const [sobreNosAlt, setSobreNosAlt] = useState("");
  const [sobreNosTexto, setSobreNosTexto] = useState([]);

  let [textoDireitos, setTextoDireitos] = useState("");

  let itens_navbar = [
    {
      nome: "Início",
      index: 0,
      active: true,
      href: "#banner"
    },
    {
      nome: "Serviços",
      index: 1,
      active: false,
      href: "#servicos"
    },
    {
      nome: "Sobre",
      index: 2,
      active: false,
      href: "#sobre"
    },
    {
      nome: "Portfólio",
      index: 3,
      active: false,
      href: "#portfolio"
    },
    {
      nome: "Time",
      index: 4,
      active: false,
      href: "#time"
    },
    {
      nome: "Contato",
      index: 5,
      active: false,
      href: "#contato"
    }];

  let servicos = [
    {
      id: 0,
      titulo: "Marketing",
      texto: "Orientamos no processo de planejamento, na execução e no controle das estratégias para satisfazer as necessidades do mercado.",
      icone: <IoIosCamera size={36} className="servicos-card-icone" />
    },
    {
      id: 1,
      titulo: "Softwares",
      texto: "Desenvolvemos softwares responsáveis por projetar informações de diversos setores, com o intuito de facilitar processos.",
      icone: <FaComputer size={36} className="servicos-card-icone" />
    },
    {
      id: 2,
      titulo: "Páginas Web",
      texto: "Realizamos a codificação de sites e softwares de gestão de negócios, os quais estão em alta no mercado digital.",
      icone: <IoCodeSlash size={36} className="servicos-card-icone" />
    },
    {
      id: 3,
      titulo: "Administração",
      texto: "Auxiliamos no planejamento e na estratégia de negócio, nos setores de gestão financeira, recursos humanos e no controle de processos internos.",
      icone: <BsBriefcaseFill size={36} className="servicos-card-icone" />
    }
  ];

  useEffect(() => {
    Traduzir(idiomaGlobal)
  }, [idiomaGlobal]);

  const [navbar_ativo, setNavbar_ativo] = useState(itens_navbar);
  const [itens_servicos, setItens_servicos] = useState(servicos);
  const [menuAberto, setMenuAberto] = useState(false);

  const aoAtivarItemNavbar = (id) => {
    setNavbar_ativo(navbar_ativo.map(item => {
      item.active = false;

      if (item.index === id) {
        item.active = true;
      }

      return item;
    }));
  };

  const aoMostrarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const aoTrocarIdioma = () => {
    setIdiomaGlobal(() => {
      if (idiomaGlobal === "pt-br") return "en";
      if (idiomaGlobal === "en") return "pt-br";
    });
  }

  return (
    <div className="App">
      <Cabecalho
        itens_navbar={navbar_ativo}
        mostraMenu={aoMostrarMenu}
        MenuAberto={menuAberto}
        onClickNavbar={aoAtivarItemNavbar}
        onChangeLanguage={aoTrocarIdioma}
        idioma={idiomaGlobal}
      />

      <Banner
        titulo={bannerTitulo}
        subTitulo={bannerSubTitulo}
        botaoSaibaMais={bannerBotao}
      />

      <Servicos
        titulo={servicosTitulo}
        itens={itens_servicos}
      />

      <SobreNos
        titulo={sobreNosTitulo}
        alt={sobreNosAlt}
        textos={sobreNosTexto}
      />

      <Rodape
        empresa={empresa}
        textoDireitos={textoDireitos}
      />
    </div>
  );
}

export default App;
