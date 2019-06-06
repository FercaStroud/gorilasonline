<template>
    <section class="" id="inicio">
        <b-container>
            <b-row>
                <b-col sm="12" md="6" class="home-responsive" style="z-index: 1">
                    <div class="slider-text-container russo">
                        <strong>
                            PLATAFORMAS<br/>
                            ATRACTIVAS,
                        </strong>
                        <span><br/>
                            DINAMICAS <br/>
                            Y SEGURAS
                        </span>
                    </div>
                </b-col>
                <b-col sm="12" md="6" class="home-responsive" style="z-index: 0">
                    <parallax-container class="">
                        <parallax-element
                                class="phone-parallax-container"
                                :parallaxStrength="-1" :type="'translation'">
                            <img src="../../assets/images/parallax0.png">
                        </parallax-element>
                    </parallax-container>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "Slider",
        mounted: function () {

        }
    }
</script>

<style scoped lang="scss">
    section {
        background: url("../../assets/images/bg-section-slider.jpg") no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .slider-text-container {
        font-size: 5em;
        margin-top: 434px;
        line-height: 66px;
    }

    .phone-parallax-container {
    }

    .parallax-element {
        margin-top: 200px;

        img {
            max-height: 600px;
        }
    }

    span {
        color: white;
        text-shadow: 1px 1px #f16338, -1px -1px #f16338;
    }

    @supports (-webkit-text-stroke: 1px #f16338) {
        span {
            color: transparent;
            -webkit-text-stroke: 1px #f16338;
            text-shadow: none;
        }
    }
    @media (min-width: 2092px) {
        .parallax-element {
            margin-top: 300px;

            img {
                max-height: 700px;
            }
        }

    }
    @media (max-width: 1280px) {
        .slider-text-container {
            margin-top: 310px;
        }
        .parallax-element {
            margin-top: 120px;
        }
    }

    @media (max-width: 1199px) {
        .slider-text-container {
            font-size: 4em;
            margin-top: 310px;
            line-height: 56px;
        }
        .parallax-element {
            margin-top: 200px;

            img {
                max-height: 450px;
            }
        }
    }

    @media (max-width: 991px) {
        .home-responsive {
            flex: initial !important;
            max-width: inherit !important;
        }
        .slider-text-container {
            font-size: 8vw;
            margin-top: 27vh;
            line-height: 8vh;
            text-align: center;
        }
        .parallax-element {
            margin-top: -40vh;

            img {
                max-height: 67vh;
                margin-left: -15vh;
                opacity: 0.2;
            }
        }
        span {
            color: #f16338;
            -webkit-text-stroke: 0 #f16338;
            text-shadow: none;
        }
    }

    @media (max-width: 450px) {
        .slider-text-container {
            font-size: 12vw;
            line-height: 6vh;
            margin-top: 37vh;
        }
        .parallax-element {
            margin-top: -40vh;
        }
    }

</style>