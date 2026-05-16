import estilos from "./apresentacao.module.css";
import { retornaMedicos } from "@/app/dados/dados";
import { FaRegUser } from "react-icons/fa6";


export default async function Apresentacao() {
    const medicos = await retornaMedicos();

    return (
        <main className={estilos.container_apresentacao}>
            <h2>Nossa Equipe Médica</h2>

            <div className={estilos.container_medicos}>
                {medicos.map((medico) => (
                    <div key={medico.id} className={estilos.cartao_medico}>
                        <div className={estilos.conteudo_medico}>
                            <div className={estilos.container_avatar}>
                                <FaRegUser />
                            </div>
                            <h3 className={estilos.nome_medico}>{medico.nomeMedico}</h3>
                            <p className={estilos.especialidades_medico}>{medico.Especialidades}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}