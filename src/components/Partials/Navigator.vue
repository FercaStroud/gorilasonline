<template>
    <b-navbar toggleable="lg" class="go-navigator">
        <b-container>
            <b-navbar-brand style="cursor: pointer;">
                <img class="logo-img" src="../../assets/images/logo-v.png">
            </b-navbar-brand>

            <b-button v-b-modal.modal-center class="hidden-md" style="background-color: transparent">
                <i style="font-size: 1em; color:#f16338" class="fas fa-bars"></i>
            </b-button>

            <b-modal id="modal-center" centered hide-footer hide-header>
                <b-navbar-nav style="text-align: center">
                    <b-nav-item href="#inicio"><span class="go-color">In</span>icio</b-nav-item>
                    <b-nav-item href="#nosotros"><span class="go-color">No</span>sotros</b-nav-item>
                    <b-nav-item href="#productos"><span class="go-color">Pr</span>oductos</b-nav-item>
                    <b-nav-item href="#portafolio"><span class="go-color">Po</span>rtafolio</b-nav-item>
                    <b-nav-item href="#tecnologia"><span class="go-color">Te</span>cnología</b-nav-item>
                    <b-nav-item style="float: left;">
                        <i @click="openURL('https://www.facebook.com/GorilasOnlineLATAM/')"
                           class="fab fa-facebook"></i>
                        <i @click="openURL('https://twitter.com/gorilasonline')"
                           class="fab fa-twitter"></i>
                        <i @click="openURL('https://instagram.com/gorilasonline')"
                           class="fab fa-instagram"></i>
                    </b-nav-item>
                </b-navbar-nav>
            </b-modal>


            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#inicio"><span class="go-color">In</span>icio</b-nav-item>
                    <b-nav-item href="#nosotros"><span class="go-color">No</span>sotros</b-nav-item>
                    <b-nav-item href="#productos"><span class="go-color">Pr</span>oductos</b-nav-item>
                    <b-nav-item href="#portafolio"><span class="go-color">Po</span>rtafolio</b-nav-item>
                    <b-nav-item href="#tecnologia"><span class="go-color">Te</span>cnología</b-nav-item>
                    <b-nav-item href="#contacto"><span class="go-color">Co</span>ntacto</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
    export default {
        name: "Navigator",
        methods: {
            openURL: function (arg) {
                window.open(arg, "_blank");
            }
        }
    }
</script>

<style scoped>
    .fab {
        font-size: 1.5em;
        margin-left: 10px;
        color: #f16338
    }

    .hidden-md {
        display: none;
    }

    .go-navigator {
        margin-top: 40px;
    }

    @media (min-width: 1280px) {
        .navbar-expand-lg .navbar-nav .nav-link {
            font-size: 1.2em;
        }
    }
    @media (max-width: 991px) {
        .hidden-md {
            display: block;
        }

        .go-navigator {
            margin-top: 0;
            position: fixed;
            width: 100%;
            background-color: rgba(255, 255, 255, .5) !important;
        }

        .logo-img-md {
            width: 60%;
            left: 20%;
            position: relative;
            padding: 0 0 50px;
        }

        .logo-img {
            height: 35px;
        }

        .navbar-nav .nav-link {
            font-family: "Russo One";
            padding-right: 0;
            font-size: 2.8vh;
            padding-left: 0;
        }
    }
</style>