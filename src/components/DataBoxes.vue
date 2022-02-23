<template>
    <div class="flex flex-initial justify-start">
        <!--box1-->
        <div
            class="shadow-md bg-white py-7 px-5 text-left rounded-lg m-5 w-44 font-rubik"
        >
            <h3 class="text-lg text-gray-800 font-poppins font-bold">
                CASES
            </h3>

            <div class="text-4xl text-red-700">
                <span class="font-black"> +</span>
                <span class="font-bold tracking-tight">
                    {{
                        numeral(stats.NewConfirmed)
                            .format('0a')
                            .toUpperCase()
                    }}
                </span>
            </div>
            <div class="text-base text-gray-400">
                <span class="font-bold tracking-tight">
                    {{
                        numeral(stats.TotalConfirmed)
                            .format('0a')
                            .toUpperCase()
                    }}
                    <span>TOTAL</span>
                </span>
            </div>
        </div>

        <!--box2-->
        <div
            class="shadow-md bg-white py-7 px-5 text-left rounded-lg m-5 w-44 font-rubik"
        >
            <h3 class="text-lg text-gray-800 font-poppins font-bold">
                RECOVERED
            </h3>

            <div class="text-4xl text-green-700">
                <span class="font-black"> +</span>
                <span class="font-bold tracking-tight">
                    {{
                        numeral(stats.NewRecovered)
                            .format('0a')
                            .toUpperCase()
                    }}
                </span>
            </div>
            <div class="text-base text-gray-400">
                <span class="font-bold tracking-tight">
                    {{
                        numeral(stats.TotalRecovered)
                            .format('0a')
                            .toUpperCase()
                    }}
                    <span>TOTAL</span>
                </span>
            </div>
        </div>

        <!--box3-->
        <div
            class="shadow-md bg-white py-7 px-5 text-left rounded-lg m-5 w-44 font-rubik"
        >
            <h3 class="text-lg text-gray-800 font-poppins font-bold">
                DEATHS
            </h3>

            <div class="text-4xl text-red-700">
                <span class="font-black"> +</span>
                <span class="font-bold tracking-tight">
                    {{
                        numeral(stats.NewDeaths)
                            .format('0a')
                            .toUpperCase()
                    }}
                </span>
            </div>
            <div class="text-base text-gray-400">
                <span class="font-bold tracking-tight">
                    {{
                        numeral(stats.TotalDeaths)
                            .format('0a')
                            .toUpperCase()
                    }}
                    <span>TOTAL</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import numeral from 'numeral';

    export default {
        name: 'DataBoxes',
        props: ['stats'],
        data() {
            return {
                numeral,
            };
        },
    };
</script>
