<template>
    <section class="">



        <parallax-container class="parallax-go">
            <parallax-element class="iphoneGo" :parallaxStrength="10" :type="'translation'">
            </parallax-element>
            <parallax-element class="iphoneGo-logo" :parallaxStrength="-5" :type="'translation'">
                <img src="../assets/img/iphonex-logo.png"/>
            </parallax-element>
        </parallax-container>



    </section>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .fullbackground {
        height: 100%;
    }
    .fullbackground{
        background: url(../assets/img/backgorund.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    .parallax-go{
        margin-top: 30px;
    }
    .iphoneGo{
        background-image: url("../assets/img/iphonex.png");
        background-size: cover;
        width: 280px;
        height: 557px;
        float: right;
    }
    .iphoneGo-logo{
        width: 280px;
        height: 557px;
        float: right;
        margin-right: -280px;
    }
    .iphoneGo-logo img{
        width: 100%;
    }

</style>

