import { BsBriefcaseFill } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { IoIosCamera } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import portfolioImages from "../../Imagens/portfolio";
import timeImages from "../../Imagens/time";

const enUS = {

    menu: [
        {
            nome: "Home",
            index: 0,
            href: "banner"
        },
        {
            nome: "Services ",
            index: 1,
            href: "servicos"
        },
        {
            nome: "About Us",
            index: 2,
            href: "sobre"
        },
        {
            nome: "Portfolio",
            index: 3,
            href: "portfolio"
        },
        {
            nome: "Team",
            index: 4,
            href: "time"
        },
        {
            nome: "Contact",
            index: 5,
            href: "contato"
        }
    ],

    servicos:
    {
        titulo: "Our Services",
        itens: [
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
        ]
    },

    banner: {
        titulo: "Polishing your Dreams",
        subTitulo: "For us, everyone has the potential to shine like a diamond!",
        botao: "Know More"
    },

    sobreNos: {
        titulo: "About Us",
        alt: "Table with computers on top",
        texto:
            [
                "At Diamantec, our commitment is to deliver the best to our clients. To achieve this, we rely on a team of highly specialized professionals in strategic areas such as marketing, website development, and management software.",
                "We believe everyone was born to shine, and our mission is to amplify that brilliance in each client, with dedication, excellence, and commitment.",
                "Join the Diamantec family and turn your ideas into great achievements!"
            ]
    },

    portfolio: {
        titulo: "Check our Portfolio",
        itens: [
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
        ]
    },

    time: {
        titulo: "Our Team",
        itens: [
            {
                id: 0,
                imagem: timeImages.sarahJhonson,
                alt: "Smiling woman with curly hair tied in a bun, wearing an orange headband with white details and a dark pink dress.",
                nome: "Sarah Jhonson",
                cargo: "Creative Visual Architect"
            },
            {
                id: 1,
                imagem: timeImages.walterWhite,
                alt: "Smiling young man with short brown hair, light beard, wearing black-framed glasses and a black hoodie, with a blurred snowy background.",
                nome: "Walter White",
                cargo: "Frontend Experience Designer"
            },
            {
                id: 2,
                imagem: timeImages.brianDoe,
                alt: "Smiling young man with short black hair and a trimmed beard, wearing a yellow T-shirt, with a textured beige background.",
                nome: "Brian Doe",
                cargo: "Backend Solutions Engineer"
            },
            {
                id: 3,
                imagem: timeImages.amandaJepson,
                alt: "Image of a smiling woman with long wavy hair, wearing a light sweater and a dark cardigan, on a neutral background.",
                nome: "Amanda Jepson",
                cargo: "Chief Administrative Strategist"
            }
        ]
    },

    contato: {
        titulo: "Contact Us!",
        endereco: {
            titulo: "Address", 
            conteudo: "2000 Av. Brasil Sul - Parque Residencial Nardini, Americana, São Paulo, Brazil"
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
            nome: "Your Name",
            assunto: "Subject",
            mensagem: "Message",
            botao: "Send Message"
        },
        envioEmailStatus: {
            carregando: "Loading...", 
            erro: "The email could not be sent. Please try again later.", 
            sucesso: "Your message has been sent. Thanks!"
        }
    },

    direitos: {
        texto: "All Rights Reserved"
    }
}

export default enUS;