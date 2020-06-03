<template>
  <router-link :to="fanjuList.fanjuHref" class="fanju-item">
    <div class="cover">
      <img :src="fanjuList.fanjuImg" />
    </div>
    <div class="info">
      <p class="label">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanju" />
        </svg>
        <span>番剧</span>
      </p>
      <p class="title">
        <span class="van-multi-ellipsis--l3">{{fanjuList.title}}</span>
      </p>
    </div>
    <div class="clear"></div>
  </router-link>
</template>

<script>
export default {
  props: ["fanjuList"],
  data() {
    return {
      
    };
  }
};
</script>

<style lang="less" scoped>
p {
  margin: 0;
}
.fanju-item {
  display: block;
  padding: 3.2vw;
  .cover {
    display: inline-block;
    width: 20.8vw;
    height: 27.73333vw;
    float: left;
    img {
      width: 100%;
      height: 100%;
      border-radius: 1.06667vw;
      background: url("../../../assets/loading.png") no-repeat 50%;
      background-size: contain;
      background-color: #e7e7e7;
    }
  }
  .info {
    display: inline-block;
    margin-left: 3.2vw;
    color: #212121;
    width: 69.33333vw;
    font-size: 0;
    .label {
      .icon {
        width: 5vw;
        height: 5vw;
        vertical-align: middle;
      }
      span {
        margin-left: 0.8vw;
        font-size: 3.73333vw;
        vertical-align: middle;
      }
    }
    .title {
      margin-top: 2.66667vw;
      font-size: 3.73333vw;
    }
  }
  .clear {
    clear: both;
  }
}
</style>