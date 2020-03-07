<template>
    <div class="" id="contacto">
        <b-container style="padding-bottom: 30px; padding-top: 30px">
            <b-row>
                <!--<b-col sm="12" md="4">
                    <div style="text-align: center">
                        Una empresa de
                    </div>
                    <img id="logo-footer"
                         src="../../assets/images/enmedio-logo.png">
                </b-col>-->
                <!--<b-col sm="12" md="6">
                    <div class="russo go-color left-mid-pos" id="wantTo">
                        ¿QUIERES COTIZAR?
                    </div>
                    <div>
                     <p class="left-mid-pos">
                      Calle Naranjos #124, Col. Torreón Jardin <br/>
                            <span class="go-color russo">WhatsApp</span> (871) 107 6853 <br/>
                            <span class="go-color russo">Tel</span> (871) 793 02 30 y 31 <br/>
                            <a href="https://www.facebook.com/GorilasOnline/"
                               target="_blank">
                                <i style="margin-top:20px;font-size: 1.5em" class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/gorilasonline"
                               target="_blank">
                                <i style="margin-top:20px;margin-left: 10px; font-size: 1.5em"
                                   class="fab fa-twitter"></i>
                            </a>
                        </p>
                    </div>
                </b-col>-->
                <b-col sm="12" md="12">
                    <div class="russo go-color left-mid-pos"
                         style="letter-spacing:3px;">
                        ¿QUIERES COTIZAR?<br/>
                        <a style="color: white;" href="mailto:info@appsgorilasonline.com">info@appsgorilasonline.com</a>
                    </div>
                    <b-row>
                        <!--<b-col sm="12" md="4">
                            <b-form-input placeholder="Déjanos tu E-mail"></b-form-input>
                        </b-col>
                        <b-col sm="12" md="4" style="margin-top: 0px; margin-bottom: 8px">
                            <b-btn class="russo" id="send-btn">Enviar</b-btn>
                        </b-col>-->
                    </b-row>
                    <p class="left-mid-pos russo">
                       <!-- Te responderemos a la brevedad para ofrecerte una solución-->
                        Hecha con <span class="go-color">&#9829;</span> por <span class="go-color">G</span>orilas <span class="go-color">O</span>nline
                    </p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Contacto"
    }
</script>

<style scoped>
    #logo-footer {
        width: 195px;
        position: relative;
        margin-left: 50%;
        left: -97.5px;
    }

    #contacto {
        background-color: #393939;
        color: white;
    }

    #send-btn {
        background-color: transparent;
        border: 2px solid white
    }

    #send-btn:hover {
        background-color: transparent;
        border: 2px solid #f16338;
        color: #f16338
    }

    #wantTo {
        letter-spacing: 3px;
    }

    .left-mid-pos {
        text-align: left
    }

    @media (max-width: 991px) {
        #logo-footer {
            position: initial;
            left: initial;
            width: 40%;
            margin-left: 30%
        }
    }

    @media (max-width: 767px) {
        .left-mid-pos {
            text-align: center;
            margin-top: 20px;
        }

        #send-btn {
            width: 100%;
            margin-top: 5px;
        }
    }
</style>