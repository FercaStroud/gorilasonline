<template>
  <div class="home">
    <Slider/>
  </div>
</template>

<script>
// @ is an alias to /src

import Slider from "../components/Home/Slider";
export default {
  name: 'home',
  components: {
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