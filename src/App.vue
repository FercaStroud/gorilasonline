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
            <el-header style="z-index: 2; background-color: rgba(255,255,255,.3)">
                <navigator/>
            </el-header>
            <el-main>
                <full-page ref="fullpage" :options="options" id="fullpage">
                    <div class="section">
                        <Index/>
                    </div>
                    <div class="section">
                        <AboutUs/>
                    </div>
                </full-page>
            </el-main>
        </el-container>
    </div>
</template>


<script>
    import Navigator from "./components/Navigator";
    import Index from "./components/Index";
    import AboutUs from "./components/AboutUs";

    export default {
        name: 'App',
        components: {AboutUs, Index, Navigator},
        data() {
            return {
                options: {
                    activeIndex: '1',
                    menu: '#menu',
                    anchors: ['home', 'about', 'portfolio', 'contact'],
                    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
                },
            };
        },
        created() {

        },
        mounted: function () {
            //console.log(this.$store.state.application.title)

        },
        methods: {}
    }
</script>

<style lang="scss">

</style>
