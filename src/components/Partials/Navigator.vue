<template>
    <b-navbar toggleable="lg" class="go-navigator">
        <b-container>
            <b-navbar-brand style="cursor: pointer;">
                <img class="logo-img" src="../../assets/images/logo-v.png">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!--<b-navbar-nav>-->
                    <!--<b-nav-item href="#"><span class="go-color">No</span>sotros</b-nav-item>-->
                    <!--<b-nav-item href="#"><span class="go-color">Pr</span>oductos</b-nav-item>-->
                    <!--<b-nav-item href="#"><span class="go-color">Po</span>rtafolio</b-nav-item>-->
                    <!--<b-nav-item href="#"><span class="go-color">Te</span>cnología</b-nav-item>-->
                    <!--<b-nav-item href="#"><span class="go-color">Co</span>ntacto</b-nav-item>-->
                <!--</b-navbar-nav>-->
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
    export default {
        name: "Navigator"
    }
</script>

<style scoped>
    .go-navigator{
        background-color: transparent !important;
        margin-top: 40px;
    }
    @media (max-width: 991px) {
        .go-navigator{
            margin-top: 0px;
            background-color: white !important;
        }
        .logo-img{
            height: 40px;
        }
    }
</style>