import "./banner.css";

const Banner = (props) => {
    return(
        <section id="banner"
                 className="banner">
           <div className="banner-container">
                <h1>
                    <span>
                       {props.titulo} 
                    </span>
                </h1>
                <h2>{props.subTitulo}</h2>
                <div className="btn-saibamais">
                    <a href="#servicos">
                        {props.botaoSaibaMais}
                    </a>
                </div>
           </div>
        </section>
    );
}

export default Banner;