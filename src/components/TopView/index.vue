<template>
    <div>
        <el-row :gutter="12">
            <el-col :span="6">
                <el-card shadow="hover">
                    <TotalSales/>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <TotalOrders/>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <TodayUsers/>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <TotalUsers/>
                </el-card>
            </el-col>
        </el-row>
    </div>  
</template>
<script>
// 引入头部的三种card可视化组件
import TodayUsers from '@/components/TodayUsers'
import TotalOrders from '@/components/TotalOrders'
import TotalSales from '@/components/TotalSales'
import TotalUsers from '@/components/TotalUsers'
export default {
    components: {
        TodayUsers,
        TotalOrders,
        TotalSales,
        TotalUsers
    }
}
</script>
<style lang="less" scoped>
</style>