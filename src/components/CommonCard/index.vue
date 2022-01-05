<template>
    <div class="common-card">
        <div class="title">{{title}}</div>
        <div class="value">{{value}}</div>
        <div class="chart">
            <!-- 默认插槽显示图表 -->
            <slot>（图表内容）</slot>
        </div>
        <div class="line"></div>
        <div class="total">
            <!-- 底部的具名插槽 -->
            <slot name="footer">（底部内容）</slot>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title','value']
}
</script>
<style lang="less" scoped>
    .title {
        font-size: 12px;
        color: #999;
    }
    .value {
        font-size: 25px;
        color: #000;
        margin-top: 5px;
        letter-spacing: 1px;
    }
    .chart {
        height: 50px;
    }
    .line {
        margin: 10px 0;
        border-top: 1px solid #eee;
    }
    .total {
        font-size: 12px;
        color: #666;
    }
</style>