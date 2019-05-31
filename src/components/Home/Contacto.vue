<template>
    <div class="" id="contacto">
        <b-container style="padding-bottom: 30px; padding-top: 30px">
            <b-row>
                <b-col sm="12" md="4">
                    <div style="text-align: center">
                        Una empresa de
                    </div>
                    <img style="width: 195px; position:relative; margin-left: 50%; left: -97.5px;"
                         src="../../assets/images/enmedio-logo.png">
                </b-col>
                <b-col sm="12" md="4">
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
                </b-col>
                <b-col sm="12" md="4">
                    <div class="russo go-color left-mid-pos"
                         style="letter-spacing:3px;">
                        CONTACTO
                    </div>
                    <b-row>
                        <b-col sm="12" md="9">
                            <b-form-input v-model="text" placeholder="Déjanos tu E-mail"></b-form-input>
                        </b-col>
                        <b-col sm="12" md="3">
                            <b-btn class="russo" id="send-btn">Enviar</b-btn>
                        </b-col>
                    </b-row>
                    <p class="left-mid-pos">
                        Te responderemos a la brevedad para ofrecerte una solución
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
    .left-mid-pos{
        text-align: left
    }
    @media (max-width: 767px) {
        .left-mid-pos{
            text-align: center;
            margin-top: 20px;
        }
        #send-btn{
            width: 100%;
            margin-top: 5px;
        }
    }
</style>