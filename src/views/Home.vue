<template>
    <div class="home">
        <top-view/>
        <sales-view/>
        <bottom-view/>
        <map-view/>
    </div>
</template>
<script>
// 引入组件
import TopView from '@/components/TopView'
import SalesView from '@/components/SalesView'
import BottomView from '@/components/BottomView'
import MapView from '@/components/MapView'
export default {
    components: {
        TopView,
        SalesView,
        BottomView,
        MapView
    }
}
</script>
<style lang="less" scoped>
    .home {
        background-color: #eee;
        padding: 20px;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
    }
</style>