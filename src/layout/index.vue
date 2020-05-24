<template>
    <div>
        <Header></Header>
        <div class="content">
            <div class="content-body">
                <div class="content-body-left">
                    <router-view></router-view>
                </div>
                <BodyRight></BodyRight>
            </div>
            <Footer></Footer>
        </div>

    </div>
</template>
<script>
import { Header, BodyRight, Footer } from './components'
export default {
  name: 'Layout',
  components: {
    Header,
    BodyRight,
    Footer
  }
}
</script>
<style lang="less" scoped>

</style>
