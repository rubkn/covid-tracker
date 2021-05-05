<template>
    <div class="text-center">
        <h2 class="text-3xl font-bold">
            {{ text }}
        </h2>
        <div class="text-2xl mt-4 mb-2">
            {{ timestamp }}
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: 'DataTitle',
        props: ['text', 'date'],
        computed: {
            timestamp: function() {
                return moment(this.date).format('MMMM Do YYYY, h:mm:ss a')
            },
        },
    }
</script>
