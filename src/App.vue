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
            <el-header>
                <navigator/>
            </el-header>
            <el-main>
                <router-view/>
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
            return {}
        },
        mounted: function () {
            //console.log(this.$store.state.application.title)
        },
        methods: {}
    }
</script>

<style lang="scss">
    $main-color: #ff3d00;
    body {
        margin: 0px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    h1, .go {
        font-family: 'Avenir', Helvetica, Arial, sans-serif !important;
    }

    .is-bold {
        font-weight: bold;
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
            left: calc( 1440px / -2);
            margin-left: 50%;
        }

    }


</style>
