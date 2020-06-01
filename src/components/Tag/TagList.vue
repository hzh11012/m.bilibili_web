<template>
  <div>
    <div class="title">
      <span>相关标签</span>
      <van-icon
        size="5.278vw"
        color="#999"
        name="arrow-down"
        :class="rotate?'rotate':''"
        @click="rotateAndshow"
      />
    </div>
    <div ref="fold" class="tag-list">
      <div class="tags">
        <router-link :to="item.tagHref+'/?id='+item.id" v-for="item in tagList" :key="item.id">{{item.tagName}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tagList"],
  data() {
    return {
      rotate: false,
      isShow: false,
      foldheight: 13.33333
    };
  },
  methods: {
    rotateAndshow() {
      this.rotate = !this.rotate;
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.$refs.fold.style.height = this.foldheight;
      } else {
        this.$refs.fold.style.height = 13.33333 + "vw";
      }
    }
  },
  mounted() {
    this.$nextTick(e => {
      this.foldheight = this.$refs.fold.offsetHeight / 3.6 + "vw";
      this.$refs.fold.style.height = 13.33333 + "vw";
    });
  }
};
</script>

<style lang="less" scoped>
.title {
  display: flex;
  padding: 1.33333vw 2.66667vw;
  margin-top: 2.66667vw;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 4.26667vw;
  }
  .van-icon {
    transition: transform 0.25s, -webkit-transform 0.25s;
  }
}
.tag-list {
  padding: 2.66667vw;
  overflow: hidden;
  transition: height 0.3s;
  .tags {
    display: flex;
    flex-wrap: wrap;
    a {
      display: block;
      color: #505050;
      background: #f4f4f4;
      font-size: 3.46667vw;
      margin: 0 2.66667vw 2.66667vw 0;
      padding: 1.6vw 3.2vw;
      border-radius: 5.33333vw;
    }
  }
}
.rotate {
  transform: rotate(180deg);
}
</style>