<template>
    <div class="blog">
        <h2>{{title}}</h2>
    </div>
</template>

<script>
    export default {
        name: "blog",

        data(){
            return{
                title: "Blog"
            }
        }
    }
</script>

<style scoped>
    h2 {
        text-align: center;
    }
</style>
