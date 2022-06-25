import axios, { AxiosInstance } from 'axios'

import { estados } from '../data/cidades.json'
import City from '../models/City'
import { CITY_SEARCH_ENDPOINT } from '../config/api'
import { API_URL, API_KEY } from '../config/api'

export default class CityService {
  private _http: AxiosInstance
  constructor(public readonly cities: City[] = []) {
    this._http = axios.create({
      baseURL: API_URL,
    })


    estados.forEach((e) => {
      const { sigla } = e

      e.cidades.forEach((c) => {
        const city: City = {
          name: c,
          state: sigla,
        }

        this.cities.push(city)
      })
    })

    this.cities.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }

      if (a.name > b.name) {
        return 1
      }

      return 0
    })


  }


  async findCityCode(cityName: string): Promise<number> {
    let cityCode = -1
    const response = await this._http.get(CITY_SEARCH_ENDPOINT, {
      params: {
        q: cityName,
        apikey: API_KEY,
        language: 'pt-BR'
      },
    })

    if (response.status == 200) {
      const { data } = response
      if (data?.length > 0) {
        cityCode = parseInt(data[0]['Key'])
      }
    } 

    return cityCode
  }
}


