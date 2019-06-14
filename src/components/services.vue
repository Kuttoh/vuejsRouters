<template>
    <div class="services">
        <h2>{{title}}</h2>
    </div>
</template>

<script>
    export default {
        name: "services",

        data(){
            return{
                title: "Services"
            }
        }
    }
</script>

<style scoped>
    h2 {
        text-align: center;
    }
</style>
