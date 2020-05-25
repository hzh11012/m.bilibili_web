<template>
  <div class="nav-bar">
    <a :href="leftHref">
      <i class="vanfont vanfont-logo">&#xE725;</i>
    </a>
    <div class="right">
      <a :href="middleHref" class="search">
        <i class="vanfont">&#xE62f;</i>
        <span class="hot-word van-ellipsis">{{hotSearch}}</span>
      </a>
      <a :href="rightHref">
        <van-image round width="6.397vw" height="6.397vw" :src="avatarImg" />
      </a>
      <button @click="onClick">{{btnTitle}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hotSearch", "avatarImg", "btnTitle","leftHref","middleHref","rightHref"],
  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>

<style lang="less" scoped>
a {
  outline: 0;
  text-decoration: none;
}
.nav-bar {
  height: 11.731vw;
  background: white;
  padding: 0 3.2vw 0 4.8vw;
  a {
    float: left;
    .vanfont-logo {
      line-height: 11.731vw;
      width: 16.336vw;
      font-size: 7.222vw;
      color: #fb7299;
    }
  }
  .right {
    height: 100%;
    float: right;
    .search {
      display: inline-block;
      width: 29.332vw;
      height: 6.4vw;
      margin: 2.667vw 4vw 0 0;
      line-height: 6.4vw;
      border-radius: 3.2vw;
      background: #f4f4f4;
      padding: 0 2.93333vw;
      white-space: nowrap;
      color: #999;
      box-sizing: content-box;
      .hot-word {
        font-size: 3.333vw;
        line-height: 6.4vw;
        display: block;
      }
      i {
        font-size: 3.333vw;
        float: left;
        margin-right: 1.067vw;
      }
    }
    button {
      width: 21.332vw;
      height: 6.397vw;
      border: none;
      background: #fb7299;
      color: white;
      font-size: 3.467vw;
      border-radius: 0.556vw;
      margin: 2.667vw 0 0 3.2vw;
    }
    a {
      margin-top: 2.667vw;
    }
  }
}
</style>