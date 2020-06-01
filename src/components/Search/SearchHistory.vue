<template>
  <div class="search-history">
    <h2>历史搜索</h2>
    <ul class="history-list">
      <li v-for="(item,index) in historyList" :key="index" @click="onClick(item.value)">
        <i class="iconfont icon-history"></i>
        <span>{{item.value}}</span>
      </li>
    </ul>
    <div class="clear-history" @click="clearHistory">
      <span>清除历史记录</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["historyList"],
  methods: {
    clearHistory() {
      this.$emit("clearHistory");
    },
    onClick(value) {
      this.$emit("onClick", value);
    }
  }
};
</script>

<style lang="less" scoped>
.search-history {
  background: white;
  border-top: 2.66667vw solid #f4f4f4;
  font-size: 0;
  h2 {
    margin: 0;
    height: 12.26667vw;
    padding-left: 3.2vw;
    line-height: 12.26667vw;
    font-weight: 400;
    color: #999;
    font-size: 3.73333vw;
  }
  .history-list {
    padding-left: 3.2vw;
    li {
      height: 11.73333vw;
      line-height: 11.73333vw;
      border-bottom: 0.278vw solid #ccc;
      i {
        color: #999;
        margin-right: 2.13333vw;
        vertical-align: middle;
        font-size: 5vw;
      }
      span {
        color: #505050;
        font-size: 3.73333vw;
        vertical-align: middle;
      }
    }
  }
  .clear-history {
    height: 12.26667vw;
    line-height: 12.26667vw;
    text-align: center;
    span {
      font-size: 3.73333vw;
      color: #999;
    }
  }
}
</style>