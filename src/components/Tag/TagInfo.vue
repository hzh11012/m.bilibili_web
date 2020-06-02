<template>
  <div class="tag-info">
    <div class="pic" :style="'background-image: url('+tagInfo.tagImg+')'"></div>
    <div class="text">
      <p>{{tagInfo.tagName}}</p>
      <p>{{tagInfo.followNum | setNum}}人关注</p>
      <p>{{tagInfo.relatedNum | setNum}}个相关视频</p>
    </div>
    <div class="follow" @click="follow">关注</div>
  </div>
</template>

<script>
export default {
    props:['tagInfo'],
  data() {
    return {
      
    };
  },
  methods: {
    follow() {
      this.$emit("follow");
    }
  }
};
</script>

<style lang="less" scoped>
.tag-info {
  padding: 5.33333vw 2.66667vw;
  display: flex;
  border-bottom: 0.278vw solid #f4f4f4;
  .pic {
    width: 20vw;
    height: 20vw;
    margin-right: 2.66667vw;
    border-radius: 1.06667vw;
    background-position: 50%;
    background-repeat: no-repeat;
    border: 0.278vw solid #f4f4f4;
    overflow: hidden;
  }
  .text {
    align-self: center;
    p:first-child {
      font-size: 4.26667vw;
      color: #222;
      margin-bottom: 2.66667vw;
    }
    p {
      font-size: 3.2vw;
      color: #999;
    }
  }
  .follow {
    margin-left: auto;
    align-self: center;
    border: 0.278vw solid #fb7299;
    color: #fb7299;
    padding: 1.06667vw 5.33333vw;
    border-radius: 0.53333vw;
    font-size: 3.73333vw;
  }
}
p {
  margin: 0;
  font-weight: 400;
}
</style>