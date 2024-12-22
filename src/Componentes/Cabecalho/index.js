import Navegador from '../Navegador';
import logo from '../../Imagens/logo.png';
import "./cabecalho.css";

const Cabecalho = (props) => {
    return(
        <header id="cabecalho"
                className="cabecalho">
            <div className="cabecalho-container">
                <a className="cabecalho-logo"
                   href="#banner"
                > 
                    <img className="cabecalho-logo-img" 
                         alt="Diamantec"
                         src={logo} 
                    />
                </a>
                
                <Navegador 
                    itens_navbar={props.itens_navbar}
                    clickNavMobile={props.mostraMenu}
                    MenuAberto={props.MenuAberto}
                    onClickNavbar={props.onClickNavbar}
                    onChangeLanguage={props.onChangeLanguage}
                    idioma={props.idioma}
                />   
            </div>
        </header>
    );
};

export default Cabecalho;