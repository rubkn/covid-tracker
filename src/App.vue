<template>
    <div class="container">
        <router-view />
    </div>
</template>

<script>
    import Header from '@/components/Header';

    export default {
        components: {
            Header,
        },
    };
</script>

<style>
    body {
        background: #f5f5f5;
        padding: 5rem;
    }
</style>
