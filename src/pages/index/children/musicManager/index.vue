<template>
    <div id="filmManager">
        <!-- 查询 & 按钮 -->
        <div class="filter-container">
            <div class="left">
                <div class="filter-item">
                    <el-input v-model="listQuery.searchContent" clearable auto-complete="off" placeholder="音乐名称" @keyup.enter.native="getTableList" @clear="getTableList">
                        <el-button slot="append" icon="el-icon-search" @click="getTableList"></el-button>
                    </el-input>
                </div>
            </div>
            <div class="right">
                <div class="filter-item">
                    <el-button type="primary" icon="el-icon-plus" @click="createVisible = true">新增音乐</el-button>
                </div>
            </div>
        </div>
        <!-- 表格 -->
        <div class="table-container">
            <el-table :data="tableJson" style="width: 100%" border fit :header-cell-style="{'text-align': 'center'}" v-loading="loading" element-loading-text="加载中..." :height="tableHeight > 300 ? tableHeight : 300">
                <el-table-column type="index" align="center" label="序号" width="65">
                    <template slot-scope="scope">
                        <span>{{scope.$index + 1}}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="ID" width="100">
                    <template slot-scope="scope">
                        <span>{{scope.row.id}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="音乐名称" min-width="300">
                    <template slot-scope="scope">
                        <el-tag size="medium">{{scope.row.songName}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="歌手" min-width="200">
                    <template slot-scope="scope">
                        <el-tag size="medium">{{scope.row.singer}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="发行时间" min-width="120">
                    <template slot-scope="scope">
                        <i class="el-icon-time" style="margin-right: 5px"></i>
                        <span>{{scope.row.playDate}}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="语言" width="150">
                    <template slot-scope="scope">
                        <span>{{scope.row.type}}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="歌曲时长" width="150">
                    <template slot-scope="scope">
                        <span>{{scope.row.duration}}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="国家" width="150">
                    <template slot-scope="scope">
                        <span>{{scope.row.issueCountry}}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="200" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" @click="handleDialogVisible(scope.row, 'editVisible')">编辑</el-button>
                        <el-button type="danger" icon="el-icon-delete" @click="deleteAction(scope.row, scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 分页 -->
        <div class="pagination-container">
            <div class="left">
                <el-pagination @current-change="handleCurrentChange" :current-page="listQuery.currentPage" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" :page-sizes="[10, 20, 50, 100]" @size-change="handleSizeChange">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import * as filmApi from '@/api/musicApi'
export default {
    name: 'musicManager',
    data() {
        return {
            loading: false,
            listQuery: {
                currentPage: 1,
                pageSize: 10
            },
            total: 0,
            tableJson: [],
            editItem: null,
            createVisible: false,
            editVisible: false
        }
    },
    computed: {
    },
    created() {
        this.getTableList()
    },
    methods: {
        getTableList(loading = true, page = 1) {
            this.listQuery.currentPage = page
            if (loading) this.loading = true
            filmApi.getList(this.listQuery).then(res => {
                console.log(res)
                this.tableJson = res.data
                this.total = res.totalCount = res.data.length
                // this.total = res.totalCount
                if (loading) this.loading = false
            }).catch(() => {
                if (loading) this.loading = false
            })
        },
        handleSizeChange(){

        }
    }
}
</script>
<style lang='stylus'>
#tableExample {
}
</style>
