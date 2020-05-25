<template>
  <div>
    <van-button @click="onClick" class="btn" :size="size" :plain="plain" :color="color">{{text}}</van-button>
  </div>
</template>

<script>
export default {
  props: ["text", "color", "plain", "size"],
  methods: {
    onClick() {
      this.$emit('onClick');
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  background: rgba(0, 0, 0, 0);
  height: 11.944vw;
  font-size: 3.733vw;
}
</style>