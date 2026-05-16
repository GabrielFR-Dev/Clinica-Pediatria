import estilos from "./rodape.module.css";

export default function Rodape() {
    return (
        <footer className={estilos.rodape}>
            <div className={estilos.conteudo_rodape}>
                <h3 className={estilos.titulo_rodape}>Clínica e Pediatria</h3>
                <p className={estilos.subtitulo_rodape}>Cuidando da sua saúde desde 1995</p>
                <div className={estilos.links_sociais}>
                    <a href="tel:1130000000" className="link-social">
                        <span className="material-symbols-outlined">call</span>
                    </a>
                    <a href="mailto:contato@clinica.com" className="link-social">
                        <span className="material-symbols-outlined">email</span>
                    </a>
                    <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-social"
                    >Maps</a>
                </div>
            </div>
        </footer>
    )
}