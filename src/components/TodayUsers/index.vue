<template>
    <div>
        <common-card
            title="今日交易用户数"
            value="278,293"
        >
        <template>
            <div id="today-users-echarts">
                
            </div>
        </template>
        <template v-slot:footer>
            <div>
                退货率 <span class="emphasis">5.18%</span>
            </div>
        </template>
        </common-card>
    </div>
</template>
<script>
// 导入混入对象
import CommonCardMixins from '@/mixins/CommonCardMixins'
export default {
    mixins: [CommonCardMixins],
    mounted() {
        const myecharts = this.$echarts.init(document.getElementById('today-users-echarts'));
        myecharts.setOption({
            xAxis: {
                type: 'category',
                show: false,
                // boundaryGap: false,
                data: ['00:10','00:20','00:30','00:40','00:50','00:60','00:70','00:80','00:90','00:10','00:11','00:12','00:13','00:14']
            },
            yAxis: {
                show: false,
            },
            grid: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            },
            tooltip: {},
            series: [{
                type: 'bar',
                data: [410,82,200,334,390,330,220,150,82,200,134,290,330,150],
                itemStyle: {
                    color: '#3398DB'
                },
                barWidth: '60%'
            }],
        })
    },
}
</script>
<style lang="less" scoped>
    #today-users-echarts {
        height: 100%;
        width: 100%;
    }
</style>