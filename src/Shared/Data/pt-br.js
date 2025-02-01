import { BsBriefcaseFill } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { IoIosCamera } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import portfolioImages from "../../Imagens/portfolio";
import timeImages from "../../Imagens/time";

const ptBr = {

    menu: [
        { nome: "Início", index: 0, href: "banner" },
        { nome: "Serviços", index: 1, href: "servicos" },
        { nome: "Sobre", index: 2, href: "sobre" },
        { nome: "Portfólio", index: 3, href: "portfolio" },
        { nome: "Time", index: 4, href: "time" },
        { nome: "Contato", index: 5, href: "contato" }
    ],

    servicos:
    {
        titulo: "Nossos Serviços",
        itens: [
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
        ]
    },

    banner: {
        titulo: "Lapidando seus Sonhos",
        subTitulo: "Para nós, todos têm o potencial de brilhar como um diamante!",
        botao: "Saiba Mais"
    },

    sobreNos: {
        titulo: "Sobre Nós",
        alt: "Mesa com computadores em cima",
        texto:
            [
                "Na Diamantec, nosso compromisso é oferecer o melhor para nossos clientes, e para isso, contamos com uma equipe de profissionais altamente especializados em áreas estratégicas como marketing, desenvolvimento de websites e softwares de gerenciamento.",
                "Acreditamos que todos nasceram para brilhar, e nossa missão é potencializar esse brilho em cada cliente, com dedicação, excelência e comprometimento.",
                "Venha fazer parte da família Diamantec e transforme suas ideias em grandes conquistas!"
            ]
    },

    portfolio: {
        titulo: "Confira o nosso Portfólio",
        itens: [
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
        ]
    },

    time: {
        titulo: "Nosso Time",
        itens: [
            {
                id: 0,
                imagem: timeImages.sarahJhonson,
                alt: "Mulher sorridente com cabelo cacheado preso em um coque, usando uma faixa de cabelo laranja com detalhes em branco e vestido rosa escuro.",
                nome: "Sarah Jhonson",
                cargo: "Arquiteta Visual Criativa"
            },
            {
                id: 1,
                imagem: timeImages.walterWhite,
                alt: "Homem jovem sorridente com cabelo curto castanho, barba rala, usando óculos de armação preta e moletom preto com capuz, com um fundo desfocado de neve.",
                nome: "Walter White",
                cargo: "Designer de Experiência Frontend"
            },
            {
                id: 2,
                imagem: timeImages.brianDoe,
                alt: "Homem jovem sorridente com barba curta e cabelo curto preto, usando uma camiseta amarela, com fundo bege texturizado.",
                nome: "Brian Doe",
                cargo: "Engenheiro de Soluções Backend"
            },
            {
                id: 3,
                imagem: timeImages.amandaJepson,
                alt: "Imagem de uma mulher sorridente com cabelo longo e ondulado, vestindo um suéter claro e um cardigã escuro, em um fundo neutro.",
                nome: "Amanda Jepson",
                cargo: "Estrategista Administrativa"
            }
        ]
    },

    contato: {
        titulo: "Fale Conosco!",
        endereco: {
            titulo: "Endereço",
            conteudo: "Av. Brasil Sul, 2000 - Parque Res. Nardini, Americana - SP"
        },
        redesSociais: {
            instagram: {
                titulo: "Instagram",
                conteudo: "@diamantec_tec"
            },
            linktree: {
                titulo: "Linktree",
                conteudo: "linktr.ee/diamantec_"
            }
        },
        formInputs: {
            nome: "Nome",
            assunto: "Assunto",
            mensagem: "Mensagem",
            botao: "Mande sua Mensagem"
        },
        envioEmailStatus: {
            carregando: "Carregando...",
            erro: "Não foi possível realizar o envio do email. Tente novamente mais tarde.",
            sucesso: "Sua mensagem foi enviada. Obrigado!"
        }
    },

    direitos: {
        texto: "Todos os Direitos Reservados"
    }
}

export default ptBr;