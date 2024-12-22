import "./servicoscard.css";

const ServicosCard = ({ titulo, texto, icone }) => {
    return (
        <div className="servicos-card">
            <div className="servicos-card-container">
                <div className="servicos-card-icone-box">
                    {icone}
                </div>
                <h4>{titulo}</h4>
                <p>{texto}</p>
            </div>
        </div>
    );
}

export default ServicosCard;