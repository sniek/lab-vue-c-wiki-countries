import { defineStore } from 'pinia'
import { ref } from "vue"

export const useCountriesStore = defineStore("countriesStore", () => {
  const countries = ref([])

  const fetchCountries = async () => {
    const response = await fetch(`https://ih-countries-api.herokuapp.com/countries`);
    const data = await response.json();
    countries.value = data;
  }

  return { countries, fetchCountries }
})