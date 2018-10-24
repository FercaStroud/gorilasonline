<template>
    <section class="fullSection">
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                <div class="section-container">
                    First section ...

                </div>
            </div>
            <div class="section">
                <div class="section-container">
                    Second section ...
                </div>
            </div>
        </full-page>
    </section>
</template>

<script>
    export default {
        name: "AboutUs",
        data() {
            return {
                options: {
                    menu: '#menu',
                    anchors: ['page1', 'page2', 'page3'],
                    sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
                    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
                },
            }
        }
    }
</script>

<style scoped>

</style>