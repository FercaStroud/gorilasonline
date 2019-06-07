<template>
    <div class="home">
        <Slider/>
        <About/>
        <Products/>
        <Tecnologias/>
        <Contacto/>
    </div>
</template>

<script>
    // @ is an alias to /src

    import Slider from "../components/Home/Slider";
    import Contacto from "../components/Home/Contacto";
    import Tecnologias from "../components/Home/Tecnologias";
    import About from "../components/Home/About";
    import Products from "../components/Home/Products";

    export default {
        name: 'home',
        components: {
            Products,
            About,
            Tecnologias,
            Contacto,
            Slider
        }
    }
</script>

<style scoped>
    .home {
        top: 0;
        position: absolute;
        width: 100%;
        z-index: -1;
    }
</style>