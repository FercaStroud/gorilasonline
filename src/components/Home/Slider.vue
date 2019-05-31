<template>
    <section class="" id="inicio">
        <b-container>
            <b-row>
                <b-col sm="12" md="6">
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
                <b-col sm="12" offset-md="1" md="5">
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

    #paralla-element-1 {
    }

    #paralla-element-2 {
        left: 90px;
    }

    #paralla-element-3 {
        left: 150px;
    }

    #paralla-element-4 {
        left: 200px;
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

    @media (max-width: 1199px) {
        .slider-text-container {
            font-size: 4em;
            margin-top: 350px;
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
        .slider-text-container {
            font-size: 3em;
            margin-top: 200px;
            line-height: 46px;
        }
        .parallax-element {
            margin-top: 150px;

            img {
                max-height: 250px;
            }
        }
    }

    @media (max-width: 767px) {
        .slider-text-container {
            width: 80%;
            margin-left: 15%;
        }
        .parallax-element {
            margin-top: 50px;
            width: auto;
            margin-left: 1%;
            position: relative;
            float: left;

            img {
               width: 300px;
                height: auto !important;
                max-height: none;
                margin-left: 50%;
                position: relative;
                left: -61px;
            }
        }

    }

    @media (max-width: 475px) {
        .parallax-element {
            img {
                width: 300px;

            }
        }
        #paralla-element-4 {
        }
        .slider-text-container {
            font-size: 2em;
            margin-top: 147px;
            line-height: 33px;
        }


    }

</style>