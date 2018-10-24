<template>
    <section class="fullSection">
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                <vue-particles class="particles-index"
                               color="#dedede"
                               :particleOpacity="0.7"
                               :particlesNumber="130"
                               shapeType="circle"
                               :particleSize="3"
                               linesColor="#f3f3f3"
                               :linesWidth="1"
                               :lineLinked="true"
                               :lineOpacity="0.4"
                               :linesDistance="80"
                               :moveSpeed="8"
                ></vue-particles>
            </div>
            <div class="section">
                <div class="section-container">
                    Second section ...
                </div>
            </div>
        </full-page>
    </section>

        <!--<div class="block">
            <el-carousel  width="280px"
                          height="557px">
                <el-carousel-item>
                    <div class="container-text-home">
                        <p>
                            Lorem Ipsum <br/>
                            Dolor Sit<br/>
                            Amet
                        </p>
                    </div>
                    <parallax-container class="parallax-go" @click="console.log('ok')">
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
                    <parallax-container class="parallax-go" >
                        <parallax-element class="iphoneGo" :parallaxStrength="10" :type="'translation'">
                        </parallax-element>
                        <parallax-element class="iphoneGo-logo" :parallaxStrength="-5" :type="'translation'">
                            <img src="../assets/img/iphonex-logo.png"/>
                        </parallax-element>
                    </parallax-container>
                </el-carousel-item>
            </el-carousel>
        </div>-->
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                activeIndex: '1',
                options: {
                    anchors: ['page1', 'page2', 'page3'],
                    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
                },
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    body, html{
        overflow: hidden;
    }
</style>

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
    .parallax-go{
        z-index: 9999 !important;
    }
    .iphoneGo{
        background-image: url("../assets/img/iphonex.png");
        background-size: cover;
        width: 280px;
        height: 557px;
        float: right;
    }
    .iphoneGo-logo{
        width: 280px;
        height: 557px;
        float: right;
        margin-right: -280px;
    }
    .iphoneGo-logo img{
        width: 100%;
    }
    .particles-index{
        position: absolute;
        width: 100%;
        margin-top: -110px;
        z-index: -1;
    }
    .container-text-home{
        float: left;
    }
    .container-text-home p{
        font-size: 3.6em;
        text-align: left;
        font-weight: bold;
    }
</style>

