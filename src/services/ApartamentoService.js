import axios from "axios";
require("dotenv").config();

const API_URL = process.env.REACT_APP_API_URL + "/apartamentos";


class ApartamentoService {
  getApartamentos() {
    return axios.get(API_URL);
  }

  createApartamento(apartamento) {
    return axios.post(API_URL, apartamento);
  }

  updateApartamento(apartamento, apartamentoId) {
    return axios.patch(
      API_URL + "/" + apartamentoId,
      apartamento
    );
  }

  deleteApartamento(apartamentoId) {
    return axios.delete(API_URL + "/" + apartamentoId);
  }

  getApartamentoById(apartamentoId) {
    return axios.get(API_URL + "/" + apartamentoId);
  }

  getMoradorByApartamento(apartamentoId) {
    return axios.get(API_URL + "/" + apartamentoId + "/moradores");
  }

  getVeiculoByApartamento(apartamentoId) {
    return axios.get(API_URL + "/" + apartamentoId + "/veiculos");
  }

}

export default new ApartamentoService();
