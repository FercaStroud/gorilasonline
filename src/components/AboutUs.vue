<template>
    <section class="section">
        <div class="section-container">
            <div class="left-title-container">
                <img src="../assets/img/acercade.png"/>
            </div>
            <div class="right-container">
                <div class="content-container">
                    <div class="left el-col-md-12">
                        <img src="../assets/img/logo.png"/>
                    </div>
                    <div class="right el-col-md-12">
                        <div>
                            <p class="go-text is-bold go-color">
                                EN GORILAS
                            </p>
                            <p class="go-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae, cumque
                                dolor eius exercitationem expedita, ipsa iure, molestias necessitatibus nihil
                                quibusdam sint vel. Est eum molestiae natus nisi omnis veniam?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae, cumque
                                dolor eius exercitationem expedita, ipsa iure, molestias necessitatibus nihil
                                quibusdam sint vel. Est eum molestiae natus nisi omnis veniam?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae, cumque
                                dolor eius exercitationem expedita, ipsa iure, molestias necessitatibus nihil
                                quibusdam sint vel. Est eum molestiae natus nisi omnis veniam?
                            </p>
                            <p class="go-text">
                                <span class="go-text is-bold">Teléfono:</span> +52 871 204 27 86<br/>
                                <span class="go-text is-bold">Dirección:</span> Torreón, México<br/>
                                <span class="go-text is-bold">Email:</span> contacto@gorilasonline.com <br/>
                                <span class="go-text is-bold">Facebook:</span> /Gorilasonline
                            </p>
                            <el-button class="btn buttonGo">
                                DESCARGA NUESTRO CV
                            </el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "AboutUs",
        data() {
            return {
                options: {
                    menu: '#menu',
                    anchors: ['page1', 'page2'],
                    sectionsColor: ['#e3683c', '#e85b2a'],
                    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
                },
            }
        }
    }
</script>

<style scoped>
    .right-container {
        background-image: url("../assets/img/aboutusbg.png");
        background-repeat: repeat-x;
    }
</style>