<template>
    <div id="userManager">
        我是我的第一个示例
        <el-table :data="logs" style="width: 100%">
              <el-table-column prop="dictCode" label="数据字典编码" width="180">
              </el-table-column>
              <el-table-column prop="dictName" label="数据字典名称" width="180">
              </el-table-column>
              <el-table-column prop="createTime" label="创建时间">
              </el-table-column>
              <el-table-column prop="sort" label="排序值">
              </el-table-column>
              <el-table-column prop="state" label="状态">
              </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { getLogs } from '@/api/logs'
export default {
    name: 'userManager',
    data() {
        return {
            logs: []
        }
    },
    mounted() {
    },
    created() {
        this.getLogsList()
    },
    methods: {
        getLogsList() {
            getLogs().then(res => {
                console.log(res)
                this.tableJson = res.data
                console.log(this.tableJson)
                this.logs = this.tableJson.list
            }).catch(() => {
            })
        }
    }
}
</script>
<style lang='stylus'>
#dashboard {
}
</style>
