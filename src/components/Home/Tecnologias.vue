<template>
    <section class="" id="tecnologia" style="height: auto !important; background-color: #ececec">
        <b-container>
            <b-row class="justify-content-md-center russo" style="padding-top: 15px">
                <b-col cols="12" md="auto">
                    <div id="title-bg-text">TECNOLOGÍA APLICADA</div>
                    <div id="title-fg-text"><span class="go-color">TECNOLOGÍA</span> APLICADA</div>
                </b-col>
            </b-row>
            <b-row class="justify-content-md-center russo" style="padding-top: 15px">
                <b-col xs="6" sm="6" md="3">
                    <img class="rows14" style="" src="../../assets/images/t1.jpg">
                </b-col>
                <b-col xs="6" sm="6" md="3">
                    <img class="rows14" src="../../assets/images/t2.jpg">
                </b-col>
                <b-col xs="6" sm="6" md="3">
                    <img class="rows14" src="../../assets/images/t3.jpg">
                </b-col>
                <b-col xs="6" sm="6" md="3">
                    <img class="rows14" src="../../assets/images/t4.jpg">
                </b-col>
                <b-col xs="6" sm="6" md="3">
                    <img class="rows48" src="../../assets/images/t5.jpg">
                </b-col>
                <b-col xs="6" sm="6" md="3">
                    <img class="rows48" src="../../assets/images/t6.jpg">
                </b-col>
                <b-col xs="6" sm="6" md="3">
                    <img class="rows48" src="../../assets/images/t7.jpg">
                </b-col>
                <b-col xs="6" sm="6" md="3">
                    <img class="rows48" src="../../assets/images/t8.jpg">
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "Tecnologias"
    }
</script>

<style scoped>
    .rows14 {
        height: 100px;
        margin-left: 40px;
        margin-bottom: 20px
    }

    .rows48 {
        width: 100%;
        margin-bottom: 20px
    }

    @media (max-width: 575px) {
        .rows14 {
            height: initial;
            margin-left: 50%;
            margin-bottom: 20px;
            width: 150px;
            left: -75px;
            position: relative;
        }
        .rows48 {
            height: initial;
            margin-left: 50%;
            margin-bottom: 20px;
            width: 150px;
            left: -75px;
            position: relative;
        }
    }
</style>