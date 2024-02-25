import axios from "axios";

export class PokemonService{

    baseUrl = "http://localhost:8080/api/v1/pokemon"

    getAll(){

        return axios.get(this.baseUrl).then(res => res.data);
    }

    findById(id){

        return axios.get(this.baseUrl+ "/find/"+ id).then(res => res.data);
    }
}