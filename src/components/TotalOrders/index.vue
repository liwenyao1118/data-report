<template>
  <div>
    <common-card title="累计订单量" value="3,691,550">
      <template>
        <!-- 使用vue-echarts组件替代原生echarts -->
        <!-- <div id="total-echarts">
                    ok
                </div> -->
        <vue-echarts :option="getOptions()"></vue-echarts>
      </template>
      <template v-slot:footer>
        <div>昨日订单量 <span class="emphasis">2,000,000</span></div>
      </template>
    </common-card>
  </div>
</template>
<script>
// 导入混入对象
import CommonCardMixins from "@/mixins/CommonCardMixins";
export default {
  mixins: [CommonCardMixins],
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: "category",
          show: false,
          // x轴两边留白策略
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
        series: [
          {
            type: "line",
            // 标记图形设为空
            symbol: "none",
            data: [
              620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530,
              220, 620,
            ],
            // 区域填充样式
            areaStyle: {
              color: "purple",
              opacity: 0.7,
            },
            // 线条填充样式
            lineStyle: {
              opacity: 0,
            },
            smooth: true,
          },
        ],
      };
    },
  },
};
</script>
<style lang="less" scoped>
#total-echarts {
  height: 100%;
}
</style>