import estilos from './topo.module.css';
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Topo() {
    return (
        <header className={estilos.container_topo}>
            <div className={estilos.topo}>
                <h1>
                    Clínica de Pediatria
                </h1>
                <p>Cuidando da sua saúde com excelência e dedicação</p>
            </div>
            <div className={estilos.container_cards}>
                <div className={estilos.cards}>
                    <IoLocationOutline />
                    <p>Av. Paulista, 1000 - São paulo</p>
                </div>
                 <div className={estilos.cards}>
                    <IoMdTime />
                    <p>Seg-Sex: 8h às 20h</p>
                </div>
                <div className={estilos.cards}>
                   <FaPhoneAlt />
                    <p>(11) 30000-0000</p>
                </div>
            </div>
        </header>

    );
}