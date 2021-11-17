class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({ baseURL: this.BASE_URL })
  }
  //obtener toda la lista
  getFullList = () => this.axiosApp.get("/characters");

  //obtener info de un solo caracter
  getOneRegister = (id) => this.axiosApp.get(`/characters/${id}`);

  //crear uno nuevo
  createOneRegister = (info) => this.axiosApp.post("/characters", info);

  //edita un caracter
  updateOneRegister = (info, id) => this.axiosApp.put(`/characters, ${id}`, info);

  //elima un caracter
  deleteOneRegister = (id) => this.axiosApp.delete(`/characters/${id}`);
}
