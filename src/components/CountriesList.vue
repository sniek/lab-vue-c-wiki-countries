<script setup>
/* import { useCountriesStore } from '@/stores/countryStores'; */
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import CountryDetails from './CountryDetails.vue';


const route = useRoute();
/* const countriesStore = useCountriesStore(); */

const countries = ref([]);
const selectedCountry = ref();

const fetchCountries = async () => {
  const response = await fetch(`https://ih-countries-api.herokuapp.com/countries`);
  const data = await response.json();
  countries.value = data;
}

const sortedCountriesList = computed(() => {
  return countries.value.sort((a, b) => {
      return a.name.common.localeCompare(b.name.common)
    })
})

watch(
  () => route.params.details,
  () => {
    selectedCountry.value = countries.value.find(
      (country) => country.alpha3Code === route.params.details
    )
  }
)


const selectCountry = (country) => {
  selectedCountry.value = country;
}

onMounted(() => {
  fetchCountries();
});

</script>

<template>
  <div class="container">
    <!-- Bootstrap row wrapper div -->
    <div class="row">
      <!-- Countries List (Bootstrap column) -->
      <div v-if="sortedCountriesList.length > 0" class="col-5" style="max-height: 90vh; overflow: scroll">
        <ul class="list-group">
          <li v-for="country in sortedCountriesList" @click="selectCountry(country)" class="list-group-item country-list text-center">
            <RouterLink :to="{ name: 'details', params: { details: country.alpha3Code } }">
              <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`">
              <p>{{ country.name.common }}</p>
            </RouterLink>

          </li>
        </ul>
      </div>

      <div class="col-7" v-if="selectedCountry">
        <CountryDetails 
        :name="selectedCountry.name.common" 
        :capital="selectedCountry.capital"
        :area="selectedCountry.area" 
        :borders="selectedCountry.borders" 
        :alpha2Code="selectedCountry.alpha2Code" 
        />
      </div>
    </div>
  </div>
</template>
  
<style>
.country-list {
  list-style-type: none;
}
</style>