<template>
    <div>
        <vs-navbar v-model="activeItem" text-color="#58595b" active-text-color="#fe3f16">
                <div slot="title">
                    <vs-navbar-title>
                        <img style="max-height: 45px; margin:10px" src="../assets/images/n-l-horizontal.png">
                    </vs-navbar-title>
                </div>

                <vs-navbar-item index="0">
                    <a href="#">Nosotros</a>
                </vs-navbar-item>
                <vs-navbar-item index="1">
                    <a href="#">Productos</a>
                </vs-navbar-item>
                <vs-navbar-item index="2">
                    <a href="#">Portafolio</a>
                </vs-navbar-item>
                <vs-navbar-item index="3">
                    <a href="#">Tecnologīa</a>
                </vs-navbar-item>
                <vs-navbar-item index="4">
                    <a href="#">Contacto</a>
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

<style scoped>
</style>