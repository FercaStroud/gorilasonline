<template>
    <section class="">
        Indexs
    </section>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .fullbackground {
        height: 100%;
    }
    .fullbackground{
        background: url(../assets/img/backgorund.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
</style>

