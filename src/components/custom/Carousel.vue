<template>
    <el-carousel width="280px"
                 class="carousel-index">
        <el-carousel-item>
            <div class="container-text-home">
                <p>
                    Lorem Ipsum <br/>
                    Dolor Sit<br/>
                    Amet
                </p>
            </div>
            <parallax-container class="parallax-go">
                <parallax-element class="iphoneGo" :parallaxStrength="10" :type="'translation'">
                </parallax-element>
                <parallax-element class="iphoneGo-logo" :parallaxStrength="-5" :type="'translation'">
                    <img src="../assets/img/iphonex-logo.png"/>
                </parallax-element>
            </parallax-container>
        </el-carousel-item>
        <el-carousel-item>
            <div class="container-text-home">
                <p>
                    Lorem Ipsum <br/>
                    Dolor Sit<br/>
                    Amet
                </p>
            </div>
            <parallax-container class="parallax-go">
                <parallax-element class="iphoneGo" :parallaxStrength="10" :type="'translation'">
                </parallax-element>
                <parallax-element class="iphoneGo-logo" :parallaxStrength="-5" :type="'translation'">
                    <img src="../assets/img/iphonex-logo.png"/>
                </parallax-element>
            </parallax-container>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "Carousel"
    }
</script>

<style scoped>
    .parallax-go {
        z-index: 9999 !important;
    }

    .iphoneGo {
        background-image: url("../../assets/img/iphonex.png");
        background-size: cover;
        width: 280px;
        height: 557px;
        float: right;
    }

    .iphoneGo-logo {
        width: 280px;
        height: 557px;
        float: right;
        margin-right: -280px;
    }

    .iphoneGo-logo img {
        width: 100%;
    }

    .particles-index {
        position: absolute;
        width: 100%;
        margin-top: -110px;
        z-index: -1;
        height: calc(100% + 60px);
    }

    .container-text-home {
        float: left;
    }

    .container-text-home p {
        font-size: 3.6em;
        text-align: left;
        font-weight: bold;
    }
</style>