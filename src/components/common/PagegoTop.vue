<template>
  <div v-if="goTopShow" class="play-page-gotop" @click="gotop">
    <img src="@/assets/gotop.png" />
  </div>
</template>

<script>
export default {
  name: "scrollTop",
  data() {
    return {
      goTopShow: false,
      scrollTop: 0 //当前滑动距离
    };
  },
  methods: {
    gotop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 750) {
        that.goTopShow = true;
      } else {
        that.goTopShow = false;
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.scrollToTop, true);
    });
  },
  destroyed() {
    window.addEventListener("scroll", this.scrollToTop, true);
  }
};
</script>

<style lang="less" scoped>
.play-page-gotop {
  position: fixed;
  right: 1.06667vw;
  bottom: 4.53333vw;
  z-index: 15;
  img {
    width: 13.86667vw;
    height: 13.86667vw;
  }
}
</style>