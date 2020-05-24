<template>
    <div class="header">
            <div class="header-logo">

            </div>
            <div class="header-nav">
                <ul class="nav-ul">
                  
                    <li>
                        <router-link to="/home">首页</router-link>
                        <!-- <a class="active" href="#home">首页</a> -->
                    </li>
                    <li>
                        <router-link to="/detail">模块</router-link>
                    </li>
                    <li>
                        <router-link to="/timeline">时间轴</router-link>
                    </li>
                
                </ul>
            </div>
            <div class="header-search">

            </div>
        </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="less" scoped>

</style>
