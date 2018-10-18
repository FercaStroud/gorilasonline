<template>
    <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            background-color="transparent"
            text-color="#433e40"
            active-text-color="#ff3d00"
            style="border: none">
        <el-menu-item class="" index="0"
                      @click="$router.push({ path: '/' });">
            <img style="max-height: 32px"
                 src="data:image/png;base64,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"/>
        </el-menu-item>
        <el-menu-item class="right-item is-bold desktop-menu-elemment" index="3"
                      @click="$router.push({ path: '/contacto' });">
            <span class="go">CO</span>NTACTO
        </el-menu-item>
        <el-menu-item class="right-item is-bold desktop-menu-elemment" index="2"
                      @click="$router.push({ path: '/portafolio' });">
            <span class="go">PO</span>RTAFOLIO
        </el-menu-item>
        <el-menu-item class="right-item is-bold desktop-menu-elemment" index="1"
                      @click="$router.push({ path: '/acercade' });">
            <span class="go">AC</span>ERCA DE
        </el-menu-item>
        <el-menu-item id="responsive-menu-elemment" index="5" class="right-item is-bold">OPEN</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "Navigator",
        data() {
            return {
                activeIndex: '0',
            };
        },
        methods: {}
    }
</script>

<style scoped>
    #responsive-menu-elemment {
        display: none;
    }

    @media (max-width: 768px) {
        #responsive-menu-elemment {
            display: block;
        }

        .desktop-menu-elemment {
            display: none;
        }
    }

    .right-item {
        float: right;
    }
</style>