<template>
  <div class="search-hot">
    <h2 class="title">大家都在搜</h2>
    <div class="list">
      <span
        class="hotword-item"
        @click="click(item.value)"
        v-for="(item,index) in hotWord"
        :key="index"
      >{{item.value}}</span>
    </div>
  </div>
</template>


<script>
export default {
  props: ["hotWord"],
  methods: {
    click(value) {
      this.$emit("onClick", value);
    }
  }
};
</script>

<style lang="less" scoped>
.search-hot {
  margin-bottom: 6.667vw;
  padding: 15.467vw 3.2vw 0;
  .title {
    margin: 0;
    color: #999;
    font-size: 3.73333vw;
    font-weight: 400;
  }
  .list {
    height: 24.53333vw;
    overflow: hidden;
    .hotword-item {
      display: inline-block;
      font-size: 3.46667vw;
      height: 9.06667vw;
      line-height: 8.8vw;
      padding: 0 3.2vw;
      color: #505050;
      border: 0.278vw solid #ccc;
      border-radius: 4.53333vw;
      margin-right: 2.66667vw;
      margin-top: 3.2vw;
    }
  }
}
</style>