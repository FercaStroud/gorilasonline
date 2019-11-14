<template>
    <section class="" id="productos" style="height: auto !important; background-color: #ececec">
        <b-container>
            <b-row class="justify-content-md-center" style="padding-top: 15px">
                <b-col cols="12" md="auto">
                    <div class="russo" id="title-bg-text">NUESTRO SOFTWARE</div>
                    <div class="russo" id="title-fg-text"><span class="go-color">NUESTRO</span> SOFTWARE</div>
                </b-col>
                <p style="font-size: 1.3em">Da click y conoce más sobre nuestras soluciones a gran escala en los siguientes rubros:</p>
            </b-row>
            <b-row class="justify-content-md-center" style="padding-top: 15px">
                <div class="slider">
                    <div class="slider-row"></div>
                </div>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "Products"
    }
</script>

<style scoped lang="scss">
    $img-w: 3000px;
    $img-h: 732px;
    $shrink: 2;
    $ratio: 1 / $shrink;
    $speed: 50s;

    .slider {
        //position: absolute;
        width: 100%;
        //top: calc(50% - #{$img-h * $ratio / 2});
        overflow: hidden;
    .slider-row {
        width: $img-w * $ratio;
        height: $img-h * $ratio;
        background-image: url("../../assets/images/todos.png");
        background-size: $img-w * $ratio $img-h * $ratio;
        animation: slide $speed linear infinite;
    }
    }

    @keyframes slide {
        from { background-position-x: 0; }
        to   { background-position-x: -$img-w * $ratio; }
    }
</style>