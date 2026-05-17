import estilos from "./apresentacao.module.css";
import { retornaMedicos } from "@/app/dados/dados";
import { FaRegUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";



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
                                <FaRegUser className={estilos.avatar}/>
                            </div>
                            <h3 className={estilos.nome_medico}>{medico.nomeMedico}</h3>
                            <p className={estilos.especialidades_medico}>{medico.Especialidades}</p>
                            <div className={estilos.info_contato}>
                                <div className={estilos.item_contato}>
                                     <FaPhoneAlt className={estilos.info}/>
                                    <span>{medico.Telefone}</span>
                                </div>
                                <div className={estilos.item_contato}>
                                    <MdOutlineMail className={estilos.info} />
                                    <span>{medico.Email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}