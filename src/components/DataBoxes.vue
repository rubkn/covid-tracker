<template>
    <div class="w-full mx-auto mb-5 text-center">
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox" class="ml-2 text-gray-500 font-bold">
            Show Deaths
        </label>
    </div>
    <div :class="showDeaths">
        <!--box1-->
        <div class="shadow-md bg-gray-50 p-8 text-center rounded">
            <h3 class="text-3xl text-black-900 font-bold mb-4">
                Cases
            </h3>

            <div class="text-2xl mb-4">
                <span class="font-bold">New:</span>
                {{ numberWithCommas(stats.NewConfirmed) }}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total:</span>
                {{ numberWithCommas(stats.TotalConfirmed) }}
            </div>
        </div>

        <!--box2-->
        <div class="shadow-md bg-green-100 p-10 text-center rounded">
            <h3 class="text-3xl text-green-900 font-bold mb-4">
                Recovered
            </h3>

            <div class="text-2xl mb-4">
                <span class="font-bold">New:</span>
                {{ numberWithCommas(stats.NewRecovered) }}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total:</span>
                {{ numberWithCommas(stats.TotalRecovered) }}
            </div>
        </div>

        <!--box3-->
        <div
            v-show="checked"
            class="shadow-md bg-gray-50 p-10 text-center rounded"
        >
            <h3 class="text-3xl text-black-900 font-bold mb-4">
                Deaths
            </h3>

            <div class="text-2xl mb-4">
                <span class="font-bold">New:</span>
                {{ numberWithCommas(stats.NewDeaths) }}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total:</span>
                {{ numberWithCommas(stats.TotalDeaths) }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DataBoxes',
        props: ['stats'],
        methods: {
            numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            },
        },
        data: function() {
            return {
                checked: false,
            }
        },
        computed: {
            showDeaths: function() {
                return this.checked
                    ? 'transform duration-1000 grid md:grid-cols-3 gap-6'
                    : 'transform duration-1000 grid md:grid-cols-2 gap-8'
            },
        },
    }
</script>
