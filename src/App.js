import './App.css';
import { useEffect, useState } from 'react';

import Cabecalho from './Componentes/Cabecalho';
import Banner from './Componentes/Banner';
import Servicos from './Componentes/Servicos';
import Rodape from './Componentes/Rodape';
import SobreNos from './Componentes/SobreNos';
import Portfolio from './Componentes/Portfolio';

import { IoIosCamera } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { BsBriefcaseFill } from "react-icons/bs";

import portfolioImages from "./Imagens/portfolio";

function App() {
  function Traduzir(idioma) {
    if (idioma === "pt-br") {
      setNavbarAtivo([
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

      setServicosItens([
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

      setPortfolioTitulo("Confira o nosso Portfólio");
      setPortfolioItens([
        {
          id: 1,
          imagem: portfolioImages.pinguinhos,
          alt: " Fotografia de biscoitos de chocolate com pedaços grandes de chocolate, dispostos sobre um fundo texturizado. No centro da imagem, em destaque, há uma logo com o nome 'Pinguinho' e o slogan 'Para adoçar a sua vida!.",
          nome: "Pinguinhos",
          area: "Cookie Shop"
        },
        {
          id: 2,
          imagem: portfolioImages.pawsPets,
          alt: "Folheto informativo da petshop Paws & Pets, oferecendo serviços de banho, tosa, adestramento, além de cuidados veterinários. O folheto apresenta um design clean e convidativo, com a imagem de um cachorro sorridente.",
          nome: "Paws&Pets",
          area: "Animal Center"
        },
        {
          id: 3,
          imagem: portfolioImages.pegasus,
          alt: "Logo minimalista em branco de um unicórnio alado sobre um fundo azul claro com textura. O unicórnio possui um design geométrico e moderno.",
          nome: "Pégasus",
          area: "Linhas Aéreas"
        },
        {
          id: 4,
          imagem: portfolioImages.guarai,
          alt: "Rótulo de uma lata de refrigerante Guaraná Brasilis de 350ml, com design vibrante e ilustrações de frutas de guaraná. A marca destaca sua tradição desde 1924.",
          nome: "Guaraí",
          area: "Refrigerante"
        },
        {
          id: 5,
          imagem: portfolioImages.dyonisius,
          alt: "Rótulo de um energético Dionysus com a imagem de perfil de Dionísio, deus grego do vinho, em um círculo. O fundo é roxo e a frase 'A energia de um deus para você!' em destaque.",
          nome: "Dionysus",
          area: "Drink Energético"
        },
        {
          id: 6,
          imagem: portfolioImages.cookies,
          alt: " Fotografia de uma pilha de biscoitos de chocolate com gotas de chocolate derretidas. Os biscoitos possuem textura macia e são empilhados em um fundo escuro. A imagem inclui ilustrações divertidas com os dizeres 'Pinguinhos', 'Camadinha croc croc', 'Chocolate escorrendo' e 'Massa macia'.",
          nome: "Pinguinhos",
          area: "Cookie Shop"
        }
      ]);

      setTextoDireitos("Todos os Direitos Reservados");
    }
    else if (idioma === "en") {
      setNavbarAtivo([
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

      setServicosItens([
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

      setPortfolioTitulo("Check our Portfolio");
      setPortfolioItens([
        {
          id: 1,
          imagem: portfolioImages.pinguinhos,
          alt: "Chocolate chip cookies with large chocolate chunks, arranged on a textured background. In the center of the image, highlighted, there is a logo with the name 'Pinguinho' and the slogan 'Para adoçar a sua vida!' (which translates to 'To sweeten your life!').",
          nome: "Pinguinhos",
          area: "Cookie Shop"
        },
        {
          id: 2,
          imagem: portfolioImages.pawsPets,
          alt: "Informative flyer from the pet shop Paws & Pets, offering bathing, grooming, training services, as well as veterinary care. The flyer has a clean and inviting design, with the image of a smiling dog.",
          nome: "Paws&Pets",
          area: "Animal Center"
        },
        {
          id: 3,
          imagem: portfolioImages.pegasus,
          alt: "Minimalist white logo of a winged unicorn on a light blue textured background. The unicorn has a geometric and modern design.",
          nome: "Pégasus",
          area: "Airlines"
        },
        {
          id: 4,
          imagem: portfolioImages.guarai,
          alt: "Label of a 350ml can of Guaraná Brasilis soda, with a vibrant design and illustrations of guarana fruits. The brand highlights its tradition since 1924.",
          nome: "Guaraí",
          area: "Soda"
        },
        {
          id: 5,
          imagem: portfolioImages.dyonisius,
          alt: "Label of a Dionysus energy drink featuring a profile image of Dionysus, the Greek god of wine, in a circle. The background is purple and the phrase 'The energy of a god for you!' is highlighted.",
          nome: "Dionysus",
          area: "Energy Drink"
        },
        {
          id: 6,
          imagem: portfolioImages.cookies,
          alt: "Photograph of a stack of chocolate chip cookies with melted chocolate drips. The cookies have a soft texture and are stacked on a dark background. The image includes fun illustrations with the words 'Pinguinhos' (which translates to 'Little Penguins'), 'Camadinha croc croc' (meaning 'Crispy layers'), 'Chocolate escorrendo' (meaning 'Melting chocolate'), and 'Massa macia' (meaning 'Soft dough').",
          nome: "Pinguinhos",
          area: "Cookie Shop"
        }
      ]);

      setTextoDireitos("All Rights Reserved");
    }
  }

  let [idiomaGlobal, setIdiomaGlobal] = useState("pt-br");
  const [empresa] = useState("Diamantec");

  const [navbarAtivo, setNavbarAtivo] = useState([]);
  const [menuAberto, setMenuAberto] = useState(false);

  const [bannerTitulo, setBannerTitulo] = useState("");
  const [bannerSubTitulo, setBannerSubTitulo] = useState("");
  const [bannerBotao, setBannerBotao] = useState("");

  const [servicosTitulo, setServicosTitulo] = useState("");
  const [servicosItens, setServicosItens] = useState([]);

  const [sobreNosTitulo, setSobreNosTitulo] = useState("");
  const [sobreNosAlt, setSobreNosAlt] = useState("");
  const [sobreNosTexto, setSobreNosTexto] = useState([]);

  const [portfolioTitulo, setPortfolioTitulo] = useState("");
  const [portfolioItens, setPortfolioItens] = useState([]);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  const [textoDireitos, setTextoDireitos] = useState("");

  useEffect(() => {
    Traduzir(idiomaGlobal);
  }, [idiomaGlobal]);

  const aoAtivarItemNavbar = (id) => {
    setNavbarAtivo(navbarAtivo.map(item => {
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
  };

  const aoMostrarLightBox = (numero) => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: numero
		});    
	}

  return (
    <div className="App">
      <Cabecalho
        itens_navbar={navbarAtivo}
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
        itens={servicosItens}
      />

      <SobreNos
        titulo={sobreNosTitulo}
        alt={sobreNosAlt}
        textos={sobreNosTexto}
      />

      <Portfolio
        titulo={portfolioTitulo}
        itens={portfolioItens}
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        aoMostrarPortfolioLightBox={aoMostrarLightBox}
        sourceLightBox={Object.values(portfolioImages)}
      />

      <Rodape
        empresa={empresa}
        textoDireitos={textoDireitos}
      />
    </div >
  );
}

export default App;
