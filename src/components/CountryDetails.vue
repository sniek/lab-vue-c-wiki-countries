<script setup>
const props = defineProps({
    name: String,
    capital: Array,
    area: Number,
    borders: Array,
    alpha2Code: String
})


</script>

<template>
    <div class="col-7 text-center">
        <!-- This link didnt work for me, I couldnt reach the service.. maybe the site was just temporarily offline, but I dont know 
            <img src="https://restcountries.eu/data/fra.svg" alt="country flag" style="width: 300px" /> -->
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${props.alpha2Code.toLowerCase()}.png`"
            style="width: 200px;">
        <h1>{{ name }}</h1>
        <table class="table table-hover">
            <thead></thead>
            <tbody>
                <tr>
                    <td style="width: 30%">Capital</td>
                    <td>{{ capital[0] }}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                        {{ area }} km <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            <li v-for="border in borders" class="border-list">
                                <RouterLink :to="{
                                    name: 'details',
                                    params: { details: border }
                                }">
                                    {{ border }}
                                </RouterLink>

                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.border-list {
    list-style-type: none;
}
</style>