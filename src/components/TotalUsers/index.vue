<template>
  <div>
    <common-card title="累计用户数" value="1,291,952">
      <template>
        <!-- 使用vue-echarts组件替代原生echarts -->
        <!-- <div id="totle-users-echarts"></div> -->
        <vue-echarts :option="getOptions()"></vue-echarts>
      </template>
      <template v-slot:footer>
        <div class="ratio">
          <span>日同比</span>
          <span class="emphasis">29.15%</span>
          <div class="increase"></div>
          <span class="month">月同比</span>
          <span class="emphasis">61.44%</span>
          <div class="decrease"></div>
        </div>
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
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
        tooltip: {},
        xAxis: {
          type: "value",
          show: false,
          min: 0,
          max: 400,
        },
        yAxis: {
          type: "category",
          show: false,
        },
        series: [
          {
            name: "上月平台用户数",
            type: "bar",
            stack: "总量",
            data: [300],
            barWidth: 10,
            itemStyle: {
              color: "#45c946",
            },
          },
          {
            name: "今日平台用户数",
            type: "bar",
            stack: "总量",
            data: [100],
            itemStyle: {
              color: "#eee",
            },
          },
          // 自定义绘制图形
          {
            type: "custom",
            stack: "总量",
            data: [300],
            tooltip: {
              show: false,
            },
            renderItem: (params, api) => {
              // 获取第一个值
              const target = api.value(0);
              // 维度为0，传入item的第一个值，获取坐标
              const local = api.coord([target, 0]);
              // 设置一个空的图形指针
              let points = [];
              let points2 = [];
              // 向图形指针中添加图形坐标内容
              points.push([local[0] - 15, local[1]]);
              points.push([local[0] + 15, local[1]]);
              points.push([local[0], local[1] + 15]);
              console.log(points);
              points2.push([local[0] - 15, local[1]]);
              points2.push([local[0] + 15, local[1]]);
              points2.push([local[0], local[1] - 15]);
              // return {
              //   type: 'polygon',
              //   z2: 9,
              //   y: 20,
              //   shape: {
              //     points: points
              //   },
              //   style: {
              //     fill: '#45c946'
              //   }
              // }
              // 返回一个数组
              return {
                type: "group",
                children: [
                  {
                    type: "polygon",
                    z2: 9,
                    y: -20,
                    shape: {
                      points: points,
                    },
                    style: {
                      fill: "#45c946",
                    },
                  },
                  {
                    type: "polygon",
                    z2: 9,
                    y: 20,
                    shape: {
                      points: points2,
                    },
                    style: {
                      fill: "#45c946",
                    },
                  },
                ],
              };
            },
          },
        ],
      };
    },
  },
};
</script>

<style lang="less" scoped>
#totle-users-echarts {
  height: 100%;
  width: 100%;
}
.ratio {
  display: flex;
  //   flex-wrap: nowrap;
  .month {
    margin-left: 10px;
  }
}
</style>

