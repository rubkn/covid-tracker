<template>
    <main
        v-if="loading"
        class="flex flex-col align-center justify-center text-center"
    >
        <img :src="loadingImage" class="w-14 m-auto" alt="" />
    </main>

    <main
        v-else
        class="flex flex-row flex-wrap justify-around items-end flex-auto"
    >
        <Header />
        <CountrySelect @get-country="getCountryData" :countries="countries" />
        <DataBoxes :stats="stats" />
        <!-- <DataTitle :text="title" :date="date" /> -->
        <div class="w-full mx-auto m-5 text-center">
            <button
                v-if="stats.Country"
                class="bg-gray-200 text-black rounded p-2 focus:outline-none transition duration-300 ease-in-and-out hover:bg-gray-50"
                @click="clearData()"
            >
                Clear
            </button>
        </div>
    </main>
</template>

<script>
    import Header from '@/components/Header';
    import DataTitle from '@/components/DataTitle';
    import DataBoxes from '@/components/DataBoxes';
    import CountrySelect from '@/components/CountrySelect';

    export default {
        name: 'Home',
        components: {
            Header,
            DataTitle,
            DataBoxes,
            CountrySelect,
        },
        data() {
            return {
                loading: true,
                title: 'COVID-19 TRACKER',
                date: '',
                stats: {},
                countries: [],
                loadingImage: require('../assets/loading.gif'),
            };
        },
        methods: {
            async getData() {
                const res = await fetch('https://api.covid19api.com/summary');
                const data = await res.json();
                return data;
            },
            getCountryData(country) {
                this.stats = country;
                this.title = country.Country.toUpperCase();
                this.value = country.ID;
            },
            async clearData() {
                this.loading = true;
                const data = await this.getData();
                this.title = 'COVID-19 TRACKER';
                this.stats = data.Global;
                this.loading = false;
            },
        },
        async created() {
            console.log('Page loaded...');
            const data = await this.getData();
            console.log(data);
            this.date = data.Date;
            this.stats = data.Global;
            this.countries = data.Countries;
            this.loading = false;
        },
    };
</script>
