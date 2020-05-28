<template>
  <div>
    <div class="headerTabs">
      <div class="after">
        <i class="vanfont" @click="isShow = true">&#xE6EB;</i>
      </div>
      <div class="tabs" @touchend="touchend($event)" @touchstart="touchstart($event)">
        <ul
          ref="ulRefs"
          class="list"
          :style="'transform:translateX('+ (activeIndex == tabList.length-1 ? (uloffset1+uloffset*(tabList.length-6)) : (activeIndex>= 4 ? (uloffset1+uloffset*(activeIndex-'4')) :'0')) +'vw);transition-duration: 300ms;'"
        >
          <a
            class="item"
            :href="item.to+'?id='+item.id"
            v-for="item in tabList"
            :key="item.id"
            :style="item.id == activeIndex ? 'color:#fb7299' : ''"
            @click="changeTab(item.id)"
          >
            <span>{{item.title}}</span>
          </a>
          <div
            class="active-line"
            :style="'transform:translateX('+ (widpad*(activeIndex*2+1)+ widspan*(activeIndex)) +'vw);transition-duration: 300ms;'"
          ></div>
        </ul>
      </div>
    </div>
    <div class="drawer">
      <div v-if="isShow" class="overlay" @click="isShow = false"></div>
      <div
        :class="isShow? 't1':'f1'"
        class="drawer-wrap"
        style="width:100%;left:0;top:0;height: 44.444vw"
      >
        <div class="drawer-box">
          <a
            :href="item.to"
            v-for="item in tabList"
            :key="item.id"
            :style="item.id == activeIndex ? 'color:#fb7299' : ''"
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
      widpad: 4.44,
      widspan: 7.109,
      activeIndex: 0,
      uloffset: -16,
      uloffset1: -6.545,
      isShow: false
    };
  },
  methods: {
    changeTab(index) {
      this.isShow = false;
      this.activeIndex = index;
      this.$emit("changeTab", this.activeIndex);
    },
    touchend(event) {
      document.ontouchmove = null;
    },
    touchstart(event) {
      let startX = event.changedTouches[0].clientX;
      let t = this.$refs.ulRefs.style.transform;
      let x0 = Number(t.substring(11, t.length - 3));
      var that = this;
      document.ontouchmove = function(event) {
        let moveX1 = event.changedTouches[0].clientX;
        let x1 = (moveX1 - startX) / 3.6;
        if (x0 + x1 > 0) {
          that.$refs.ulRefs.style.transform = "translateX(0vw)";
        } else if (x0 + x1 < -215) {
          that.$refs.ulRefs.style.transform = "translateX(-215vw)";
        } else {
          that.$refs.ulRefs.style.transform = "translateX(" + (x0 + x1) + "vw)";
        }
      };
    }
  }
};
</script>

<style lang="less" scoped>
.headerTabs {
  height: 10.66667vw;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  .tabs {
    overflow: hidden;
    height: 100%;
    flex: 1;
    order: 1;
    .list {
      position: relative;
      z-index: 1;
      padding: 0;
      margin: 0;
      flex: 1;
      white-space: nowrap;
      text-align: left;
      display: flex;
      flex-direction: row;
      a {
        font-size: 3.73333vw;
        flex-shrink: 0;
      }
      .item {
        height: 10.66667vw;
        line-height: 10.66667vw;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        user-select: none;
        padding: 0 4.26667vw;
        color: #505050;
      }
      .active-line {
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0.53333vw;
        width: 7.109vw;
        border-radius: 0.53333vw;
        transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        pointer-events: none;
        background: #fb7299;
      }
    }
  }
  .after {
    float: right;
    order: 3;
    margin-top: 1.33333vw;
    .vanfont {
      margin: 0 2.66667vw;
      color: #aaa;
      font-size: 5.33333vw;
    }
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