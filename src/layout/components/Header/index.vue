<template>
    <div class="header">
            <div class="header-logo">

            </div>
            <div class="header-nav">
                <ul class="nav-ul">
                   <li :id="idx" @click="changeMenu(item)" v-for="(item,idx) in headerMenu">
                       <router-link :class="{active:item.id === selectMenu.id}" :to="item.menuUrl">{{item.menuName}}</router-link>
                   </li>
                </ul>
            </div>
            <div class="header-search">

            </div>
        </div>
</template>
<script>
export default {
  name: 'Header',
  data(){
      return {
          headerMenu:[],
          selectMenu:{"id":"1"},
          activeIndex:'1'
      }
  },
  created(){
      this.getHeaderMenu();
  },
  methods:{
      getHeaderMenu(){
          this.headerMenu = [{
                "id":"1",
                "menuName": "首页",
                "menuUrl": "/home"
            },
            {
                "id":"2",
                "menuName": "模块",
                "menuUrl": "/detail"
            },
            {
                "id":"3",
                "menuName": "时间轴",
                "menuUrl": "/timeline"
            }
        ]
      },
      changeMenu(item){
          console.log(item);
          this.selectMenu = item;
          console.log("点击切换",this)
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>
<style lang="less" scoped>

</style>
