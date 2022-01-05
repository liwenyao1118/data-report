<template>
    <div>
        <common-card title="累计销售额" value="¥ 60,753,331">
            <!-- 默认插槽，插入图表 -->
            <template>
                <div class="compareBox">
                    <div class="compare">日同比<span class="emphasis">102.51%</span><div class="increase"></div></div>
                    <div class="compare">月同比<span class="emphasis">161.87%</span><div class="decrease"></div></div>
                </div>
            </template>
            <!-- 具名插槽，插入底部内容 -->
            <template v-slot:footer>
                <div class="total">
                    昨日销售额 <span>¥ 30,000,000</span>
                </div>
            </template>
        </common-card>
    </div>
</template>
<script>
// 导入混入对象
import CommonCardMixins from '@/mixins/CommonCardMixins'
export default {
    mixins: [CommonCardMixins]
}
</script>
<style lang="less" scoped>
    .total {
        color: #666;
        font-size: 12px;
        span {
            color: #333;
            margin-left: 5px;
            font-weight: 700;
        }
    }
    .compareBox {
        height: 100%;
        font-size: 12px;
        color: #666;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .compare {
            margin-top: 3px;
            display: flex;
        }
    }
</style>