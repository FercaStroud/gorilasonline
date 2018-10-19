<template>
    <div>
        <div v-show="$store.state.application.loader" style="
            height: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background: #fafafa;
            position:fixed;
            width: 100%;
            z-index: 999;">
            <ball-scale-multiple-loader color="#ff3d00" size="60px"></ball-scale-multiple-loader>
            Cargando...
        </div>

        <el-container id="app">
            <el-header style="background-color: rgba(255,255,255,.3)">
                <navigator/>
            </el-header>
            <el-main>
                <transition
                        mode="out-in"
                        name="slide-left"
                >
                    <router-view/>
                </transition>
            </el-main>
        </el-container>
    </div>
</template>


<script>
    import Navigator from "./components/Navigator";
    export default {
        name: 'App',
        components: {Navigator},
        data() {
            return {
            };
        },
        created() {

        },
        mounted: function () {
            //console.log(this.$store.state.application.title)
        },
        methods: {

        }
    }
</script>

<style lang="scss">
    $main-color: #ff3d00;
    $secondary-color: #2c3e50;

    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
        transition-duration: 0.5s;
        transition-property: height, opacity, transform;
        transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
        overflow: hidden;
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        transform: translate(2em, 0);
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        transform: translate(-2em, 0);
    }

    body {
        margin: 0px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $secondary-color;
    }

    h1, .go {
        font-family: 'Avenir', Helvetica, Arial, sans-serif !important;
    }

    .is-bold {
        font-weight: bold;
    }

    .buttonGo {
        width: 100%;
        text-transform: uppercase;
        color: $secondary-color !important;
    }

    .buttonGo:hover {
        width: 100%;
        background-color: $secondary-color;
        color: #fffefe;
    }

    .go {
        color: $main-color;
        top: -1px;
        position: relative;
    }

    body, html {
        height: 100%;
    }

    body {
        background: -webkit-radial-gradient(85% 10%, #dcdcdc, #b0b0b0, #a6a9ad);
        background: radial-gradient(at 85% 10%, #dcdcdc, #b0b0b0, #a6a9ad);
    }

    /* ----------- Large Screens ----------- */
    @media (min-width: 1500px) {
        #app {
            width: 1440px;
            position: relative;
            left: calc(1440px / -2);
            margin-left: 50%;
        }

    }


</style>
