"use server"

import axios from "axios";

export async function retornaMedicos() {
    let medicos = [];

    try {
        medicos = (
            await axios.get("https://apis-listagem-contato.onrender.com/medicos")
        ).data;
    } catch (erro) {
        console.error("Erro ao buscar os médicos:", erro);
    }

    return medicos;
}