<template>
    <select
        @change="onChange()"
        v-model="selected"
        class="w-1/3 form-select border p-3 rounded-lg"
    >
        <option value="0">Worldwide</option>
        <option
            v-for="country in countries"
            :value="country.ID"
            :key="country.ID"
        >
            {{ country.Country }}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'CountrySelect',
        props: ['countries'],
        data() {
            return {
                selected: 0,
            };
        },
        methods: {
            onChange() {
                const country = this.countries.find(
                    (item) => item.ID === this.selected
                );
                //console.log(country);
                this.$emit('get-country', country);
            },
        },
    };
</script>
