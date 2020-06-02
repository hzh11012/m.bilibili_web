<template>
  <div class="search-bar">
    <form action class="input-area">
      <i class="vanfont ic_search">&#xE635;</i>
      <input
        type="search"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('getInputValue',$event.target.value)"
        @keyup.enter="search"
      />
      <i class="vanfont guanbi" @click="guanbi" v-if="isShowGuanbi">&#xE63C;</i>
    </form>
    <router-link to="/home/home" class="cancel">取消</router-link>
  </div>
</template>

<script>
export default {
  props: ["placeholder", "value","isShowGuanbi"],
  model: {
    porp: "value",
    event: "getInputValue"
  },
  data() {
    return {};
  },
  methods: {
    guanbi() {
      this.$emit("guanbi");
    },
    search() {
      this.$emit("search");
    }
  }
};
</script>

<style lang="less" scoped>
.search-bar {
  height: 11.73333vw;
  padding: 0 3.2vw;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  .input-area {
    margin-top: 1.86667vw;
    height: 8vw;
    width: 82.4vw;
    line-height: 8vw;
    padding: 0 3.2vw;
    background: #f4f4f4;
    border-radius: 0.53333vw;
    display: inline-block;
    .ic_search {
      font-size: 5.33333vw;
      color: #a0a0a0;
      vertical-align: middle;
    }
    .guanbi {
      font-size: 3.73333vw;
      float: right;
      color: #a0a0a0;
      vertical-align: middle;
    }
    input {
      outline: none;
      font-size: 3.46667vw;
      color: #505050;
      border: none;
      background: transparent;
      width: 61.33333vw;
    }
    input[type="search"]::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
  .cancel {
    font-size: 4vw;
    color: #fb7299;
    float: right;
    line-height: 11.73333vw;
  }
}
</style>