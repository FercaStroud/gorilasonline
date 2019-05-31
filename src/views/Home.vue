<template>
  <div class="home">
    <Slider/>
    <Contacto/>
  </div>
</template>

<script>
// @ is an alias to /src

import Slider from "../components/Home/Slider";
import Contacto from "../components/Home/Contacto";
export default {
  name: 'home',
  components: {
    Contacto,
    Slider
  }
}
</script>

<style scoped>
  .home{
    top: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
</style>