<template>
    <main v-if="!loading">
        <DataTitle :text="title" :date="date" />
        <DataBoxes :stats="stats" />
        <CountrySelect @get-country="getCountryData" :countries="countries" />
        <div class="w-full mx-auto m-5 text-center">
            <button
                v-if="stats.Country"
                @click="clearData"
                class="bg-gray-200 text-black rounded p-2 focus:outline-none transition duration-300 ease-in-and-out hover:bg-gray-50"
            >
                Clear Country
            </button>
        </div>
    </main>

    <main class="flex flex-col align-center justify-center text-center" v-else>
        <img :src="loadingImage" class="w-14 m-auto" alt="" />
    </main>
</template>

<script>
    import DataTitle from '@/components/DataTitle'
    import DataBoxes from '@/components/DataBoxes'
    import CountrySelect from '@/components/CountrySelect'

    export default {
        name: 'Home',
        components: {
            DataTitle,
            DataBoxes,
            CountrySelect,
        },
        data() {
            return {
                loading: true,
                title: 'Global',
                date: '',
                stats: {},
                countries: [],
                loadingImage: require('../assets/loading.gif'),
            }
        },
        methods: {
            async getData() {
                const res = await fetch('https://api.covid19api.com/summary')
                const data = await res.json()
                return data
            },
            getCountryData(country) {
                this.stats = country
                this.title = country.Country
            },
            async clearData() {
                this.loading = true
                const data = await this.getData()
                this.title = 'Global'
                this.stats = data.Global
                this.loading = false
            },
        },
        async created() {
            console.log('Page loaded...')
            const data = await this.getData()
            console.log(data)
            this.date = data.Date
            this.stats = data.Global
            this.countries = data.Countries
            this.loading = false
        },
    }
</script>
