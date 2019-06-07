<template>
    <section class="" id="nosotros" style="height: auto !important; background-color: #ffffff; padding-bottom: 20px">
        <b-container>
            <b-row class="justify-content-md-center russo" style="padding-top: 15px">
                <b-col cols="12" md="auto">
                    <div id="title-bg-text">NOSOTROS</div>
                    <div id="title-fg-text"><span class="go-color">NO</span>SOTROS</div>
                </b-col>
            </b-row>
            <b-row class="justify-content-md-center" style="padding-bottom: 40px">
                <p class="go-text">
                    En <strong>GORILAS</strong> comprendemos la amplia aplicación y utilidad para las marcas
                    de la tecnología. Es por ello que ofrecemos diversas herramientas que
                    complementarán la estrategia de tu marca para encontrarse en los
                    medios adecuados para la comunicación, prospeccion y venta
                    que requiere.
                </p>
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col style="text-align: center;" cols="12" md="4" sm="12" xs="12">
                    <img style="max-height: 130px" src="../../assets/images/about-s1.jpg">
                    <h3 style="height: 67px;margin-top: 20px;" class="russo"><span class="go-color">APPS</span> MÓVILES</h3>
                    <p style="text-align: center; font-size: 1.1em">
                        Creamos plataformas adaptadas a
                        las necesidades específicas de su marca,
                        compenetrando estrategia de comunicación,
                        diseño de imagen, proyección de ventas
                        y posicionamiento de la marca en la mente
                        del segmento objetivo.
                    </p>
                </b-col>
                <b-col style="text-align: center;" cols="12" md="4" sm="12" xs="12">
                    <img style="max-height: 130px" src="../../assets/images/about-s2.jpg">
                    <h3 style="height: 67px;margin-top: 20px;" class="russo"><span class="go-color">SOLUCIÓN DE</span> SOFTWARE</h3>
                    <p style="text-align: center; font-size: 1.1em">
                        Diseño de plataformas tomando en
                        cuenta navegabilidad, interactividad, usabilidad,
                        interacción, arquitectura y buen diseño imagen
                        y contenido relevante para generar tráfico en
                        el sitio, venta y posicionamiento.
                    </p>
                </b-col>
                <b-col style="text-align: center;" cols="12" md="4" sm="12" xs="12">
                    <img style="max-height: 130px" src="../../assets/images/about-s3.jpg">
                    <h3 style="height: 67px;margin-top: 20px;" class="russo"><span class="go-color">E-</span>COMMERCE</h3>
                    <p style="text-align: center; font-size: 1.1em">
                        Solución segura, rápida y fiable, para hacer
                        crecer tu negocio. Colocamos tus productos
                        de una manera atractiva y dinámica, que facilite
                        el desplazamiento y compra dentro de
                        la plataforma.
                    </p>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    .go-text {
        font-size: 1.3em;
        text-align: center;
    }

    @media (max-width: 991px) {
        #title-fg-text {
            margin-top: -11.3vw;
        }
    }

    @media (max-width: 821px) {
        #title-fg-text {
            margin-top: -9.7vw;
        }
    }

    @media (max-width: 770px) {
        #title-fg-text {
            margin-top: -8.3vw;
        }
    }
</style>