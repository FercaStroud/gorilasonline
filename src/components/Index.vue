<template>
    <div>
        <vue-particles class="particles-index"
                       color="#dedede"
                       :particleOpacity="0.7"
                       :particlesNumber="80"
                       shapeType="circle"
                       :particleSize="3"
                       linesColor="#f3f3f3"
                       :linesWidth="1"
                       :lineLinked="true"
                       :lineOpacity="0.4"
                       :linesDistance="80"
                       :moveSpeed="11"
        ></vue-particles>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {};
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

    .fullbackground {
        background: url(../assets/img/backgorund.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }


</style>

