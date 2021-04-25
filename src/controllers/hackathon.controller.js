import Hackathon from "../models/hackathon.model";
import hackathonRepository from "../repositories/hackathon.repository";

export	default class HackathonController{
    async incluir(hackathon){
        const { nome , nota, isAprovado} = hackathon;
        const aluno = new Hackathon(nome , nota, isAprovado);
        hackathonRepository.inserir(hackathon);
        return {message:"Aluno inserido com sucesso", id: aluno.id};
    }

    async alterar(){}

    async excluir(){}

    async obter(){}

    async listar(){
        return hackathonRepository.listar();
    }
}