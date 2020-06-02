<template>
  <div>
    <div class="result-tab">
      <a class="tab-item" :class="activeIndex==0?'on':''" @click="toggleTabs(0)">综合</a>
      <a class="tab-item" :class="activeIndex==1?'on':''" @click="toggleTabs(1)">
        <span>番剧</span>
        <span
          v-if="searchResult.fanjuNum > 0 && searchResult.fanjuNum <100"
        >({{searchResult.fanjuNum}})</span>
        <span v-else-if="searchResult.fanjuNum > 99">(99+)</span>
      </a>
      <a class="tab-item" :class="activeIndex==2?'on':''" @click="toggleTabs(2)">
        <span>UP主</span>
        <span v-if="searchResult.upNum > 0 && searchResult.upNum <100">({{searchResult.upNum}})</span>
        <span v-else-if="searchResult.upNum > 99">(99+)</span>
      </a>
      <a class="tab-item" :class="activeIndex==3?'on':''" @click="toggleTabs(3)">
        <span>影视</span>
        <span v-if="searchResult.tvNum > 0 && searchResult.tvNum <100">({{searchResult.tvNum}})</span>
        <span v-else-if="searchResult.tvNum > 99">(99+)</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["searchResult"],
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    toggleTabs(index) {
      this.activeIndex = index;
      this.$emit("toggleTabs", index);
    }
  }
};
</script>

<style lang="less" scoped>
.result-tab {
  height: 11.73333vw;
  position: fixed;
  top: 11.73333vw;
  left: 0;
  right: 0;
  z-index: 2;
  background: #fff;
  padding: 0 5.33333vw;
  display: flex;
  justify-content: space-between;
  .tab-item {
    display: inline-block;
    height: 8vw;
    line-height: 8vw;
    font-size: 3.73333vw;
    margin-top: 1.86667vw;
    color: #757575;
  }
  .on {
    color: #fb7299;
    border-bottom: 0.53333vw solid #fb7299;
  }
}
</style>