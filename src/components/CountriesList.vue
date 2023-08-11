<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import CountryDetails from './CountryDetails.vue';

const route = useRoute();

const countries = ref([]);
const selectedCountry = ref();

const fetchCountries = async () => {
  const response = await fetch(`https://ih-countries-api.herokuapp.com/countries`);
  const data = await response.json();
  countries.value = data;
}

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
      <div v-if="countries.length > 0" class="col-5" style="max-height: 90vh; overflow: scroll">
        <ul class="list-group">
          <li v-for="country in countries" @click="selectCountry(country)" class="list-group-item country-list">
            <!-- <RouterLink :to="{ name: 'details', params: { details:country.alpha3Code }}">
              
            </RouterLink> -->
            <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`">
              <p>{{ country.name.common }}</p>
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