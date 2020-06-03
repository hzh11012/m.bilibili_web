<template>
  <div class="not-found-box">
    <div class="not-found">
      <img src="@/assets/notFound.png" />
      <p>什么都没有找到啊 T_T</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.not-found-box {
  text-align: center;
  min-height: 1px;
  .not-found {
    padding-top: 26.66667vw;
    text-align: center;
    font-size: 3.46667vw;
    color: #757575;
    img {
      width: 64vw;
    }
    p {
      height: 12vw;
      line-height: 12vw;
    }
  }
}
</style>