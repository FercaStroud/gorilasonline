<template>
    <div>
        <vs-navbar v-model="activeItem" color="#ffffff"
                   text-color="#58595b"
                   active-text-color="#fe3f16"
        style="position: fixed;">
            <div slot="title">
                <vs-navbar-title>
                    <img class="logo"
                         src="../assets/images/n-l-horizontal.png">
                </vs-navbar-title>
            </div>

            <vs-navbar-item index="0">
                <a href="#nosotros">Nosotros</a>
            </vs-navbar-item>
            <vs-navbar-item index="1">
                <a href="#productos">Productos</a>
            </vs-navbar-item>
            <vs-navbar-item index="2">
                <a href="#portafolio">Portafolio</a>
            </vs-navbar-item>
            <vs-navbar-item index="3">
                <a href="#tacnologia">Tecnologīa</a>
            </vs-navbar-item>
            <vs-navbar-item index="4">
                <a href="#contacto">Contacto</a>
            </vs-navbar-item>
        </vs-navbar>
    </div>
</template>

<script>
    export default {
        name: "navigator",
        data: () => ({
            activeItem: 0
        })
    }
</script>

<style>
    .logo {
        max-height: 45px;
        margin: 10px
    }
    @media (max-width: 800px){
        .logo{
            max-height: 33px;
            margin: 8px;
        }
    }

</style>