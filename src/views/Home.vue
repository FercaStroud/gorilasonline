<template>
  <div class="home">
    <!-- TOP RIGHT RIBBON: START COPYING HERE -->
    <a class="github-fork-ribbon right-bottom"
       target="_blank"
       href="https://github.com/cardenas413/gorilasonline"
       data-ribbon="Fork us on GitHub" title="Fork us on GitHub">
      Fork us on GitHub!
    </a>
    <!-- TOP RIGHT RIBBON: END COPYING HERE -->

    <Slider/>
    <About/>
    <Products/>
    <Tecnologias/>
    <Pricing/>
    <Contacto/>
  </div>
</template>

<script>
import Slider from "../components/Home/Slider";
import Contacto from "../components/Home/Contacto";
import Tecnologias from "../components/Home/Tecnologias";
import About from "../components/Home/About";
import Products from "../components/Home/Products";
import Pricing from "@/components/Home/Pricing.vue";

export default {
  name: 'home',
  components: {
    Pricing,
    Products,
    About,
    Tecnologias,
    Contacto,
    Slider
  }
}
</script>

<style>
.home {
  top: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
}

.navbar.go-navigator.navbar-light.navbar-expand-lg {
  display: block !important;
}
</style>