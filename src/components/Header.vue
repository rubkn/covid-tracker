<template>
    <div class="text-gray-700">
        <div class="w-full text-4xl font-rubik leading-7 font-bold mb-3 mt-3">
            COVID-19<br />TRACKER
            <p class="text-xs text-left ml-1">
                API by
                <a
                    class="text-gray-400 transition duration-300 ease-in-out hover:text-gray-700"
                    href="http://www.covid19api.com"
                    target="_blank"
                    >covid19api.com</a
                >
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: ['title'],
    };
</script>
