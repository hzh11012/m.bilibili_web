<template>
  <div>
    <div class="main">
      <div class="after">
        <i class="vanfont" @click="isShow =true">&#xE6EB;</i>
      </div>
      <van-tabs
        swipe-threshold="5"
        title-active-color="#fb7299"
        color="#fb7299"
        title-inactive-color="#757575"
        v-model="active"
        @click="changeTab(active)"
      >
        <van-tab
          title-style="font-size: 3.73333vw;"
          v-for="item in tabList"
          :title="item.title"
          :key="item.id"
        />
      </van-tabs>
    </div>
    <div class="drawer">
      <div v-if="isShow" class="overlay" @click="isShow = false"></div>
      <div
        class="drawer-wrap"
        :class="isShow? 't1':'f1'"
        style="width:100%;left:0;top:0;height: 44.444vw"
      >
        <div class="drawer-box">
          <a
            :href="item.to"
            v-for="item in tabList"
            :key="item.id"
            :style="item.id == active ? 'color:#fb7299' : ''"
            @click="changeTab(item.id)"
          >{{item.title}}</a>
          <i class="vanfont" @click="isShow = false">&#xE6EC;</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tabList"],
  data() {
    return {
      active: 0,
      isShow: false
    };
  },
  methods: {
    changeTab(index) {
      this.isShow = false;
      this.active = index;
      this.$emit("changeTab", this.active);
    }
  }
};
</script>
 
<style lang="less" scoped>
.main {
  display: flex;
  align-items: center;
  background: #fff;
  .after {
    float: right;
    order: 3;
    .vanfont {
      margin: 0 2.66667vw;
      color: #aaa;
      font-size: 5.33333vw;
    }
  }
  .van-tabs {
    overflow: hidden;
    flex: 1;
  }
}
.drawer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 13.333vw;
  pointer-events: none;
  overflow: hidden;
  z-index: 1003;
  .overlay {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.32);
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 13.333vw;
    z-index: 1002;
    pointer-events: auto;
  }
  .drawer-wrap {
    position: absolute;
    pointer-events: auto;
    box-sizing: content-box;
    z-index: 1003;
    background-color: #fff;
    .drawer-box {
      position: relative;
      padding: 2.66667vw 5.33333vw 5.33333vw 5.33333vw;
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      color: #757575;
      font-size: 3.73333vw;
      justify-content: space-evenly;
      box-sizing: border-box;
      a {
        margin: 2.13333vw;
        white-space: nowrap;
        color: inherit;
      }
      .vanfont {
        position: absolute;
        bottom: 0.53333vw;
        left: 50%;
        color: #aaa;
        font-size: 5.33333vw;
      }
    }
  }
}
.t1 {
  transform: translateY(0);
  transition-duration: 0.3s;
}
.f1 {
  transform: translateY(-44.444vw);
  transition-duration: 0.3s;
}
</style>