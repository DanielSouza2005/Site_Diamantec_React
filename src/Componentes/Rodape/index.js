import "./rodape.css";

const Rodape = ({ empresa, textoDireitos }) => {
    return (
        <footer className="rodape">
            <div className="rodape-container">
                <div className="copyright">
                    © Copyright 
                    <strong>
                        <span> {empresa}</span>
                    </strong>
                    . {textoDireitos}
                </div>
            </div>
        </footer>
    );
};

export default Rodape;