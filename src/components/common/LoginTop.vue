<template>
  <div>
    <div class="LoginTop">
      <div>
        <slot name="leftTop"></slot>
      </div>
      <div class="middleTop">{{middleTop}}</div>
      <div class="rightTop" @click="changeLogin">{{rightTop}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["middleTop", "rightTop"],
  methods: {
    changeLogin() {
      this.$emit("changeLogin");
    }
  }
};
</script>

<style lang="less" scoped>
.LoginTop {
  height: 12.231vw;
  background-color: white;
  display: flex;
  border-bottom: 1px solid rgb(231, 231, 231);
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .middleTop {
    flex: 2;
    font-size: 4.167vw;
  }
  .rightTop {
    font-size: 3.333vw;
  }
}
</style>