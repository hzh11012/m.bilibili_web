<template>
  <div class="main">
    <van-field
      :label="label"
      :placeholder="placeholder"
      clearable
      :type="type"
      v-model="content"
      :maxlength="maxlength"
      label-width="20.264vw"
      :isShowBtn="isShowBtn"
      :btnMsg="btnMsg"
    >
      <template class="btn-box" v-if="isShowBtn" #button>
        <button class="getMsg" @click="onClick">{{btnMsg}}</button>
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  props: ["label", "placeholder", "type", "maxlength", "isShowBtn", "btnMsg"],
  data() {
    return {
      content: "",
      isShowBtn1: false
    };
  },
  methods: {
    handlerule() {
      this.$emit("inputChange", this.content);
    },
    onClick() {
      this.$emit("onClick");
    }
  },
  watch: {
    content() {
      this.handlerule();
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  .van-field {
    height: 12.008vw;
    border-top: 0.278vw solid rgb(231, 231, 231);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.733vw;
    padding: 0 3.2vw;
    .getMsg {
      outline: none;
      border: none;
      color: #fb7299;
      border-left: 1px solid #e7e7e7;
      background: white;
      padding-left: 20px;
    }
  }
}
</style>