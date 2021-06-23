import axios, { AxiosResponse } from "axios"
import { Deputy } from "models/deputy.interface"

const instance = axios.create({
  baseURL: "https://dadosabertos.camara.leg.br/api/v2/",
  timeout: 15000,
})

const responseBody = (response: AxiosResponse) => response.data.dados

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: any) => instance.post(url, body).then(responseBody),
  put: (url: string, body: any) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
}

export const DeputyApi = {
  getDeputies: (itemsPerPage: number, currentPage: number): Promise<Deputy[]> =>
    requests.get(`deputados?itens=${itemsPerPage}&pagina=${currentPage}`),
  getDeputy: (id: number): Promise<Deputy> => requests.get(`deputados/${id}`),
}
