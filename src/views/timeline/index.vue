<template>
     <el-container>
        <el-main class="time-line-page">
            <el-row>
            <el-col :span="24">
                    <el-timeline>
                        <el-timeline-item timestamp="2018/4/12" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/12 20:46</p>
                        </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2018/4/3" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/3 20:46</p>
                        </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2018/4/2" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/2 20:46</p>
                        </el-card>
                        </el-timeline-item>
                    </el-timeline>
            </el-col>
            </el-row>
            <el-row class="timeline-pagination-row">
                <el-col class="timeline-pagination" :span="24">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                    </el-pagination>
                </el-col>
            </el-row> 
        </el-main>

     </el-container>
</template>
<script>
export default {
    data(){
        return {
            searchContent:{
                category:null,
                title:null
            }
        }
    },
    methods: {
        query(){
            console.log(this.searchContent);
        }
    }
}
</script>
<style lang="less" scope>
    .time-line-page{
        .timeline-pagination-row{
            .timeline-pagination{
                text-align: center;
            }
        }
    }
</style>