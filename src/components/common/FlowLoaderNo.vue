<template>
  <div class="flow-loader-nomore" v-if="finished">
    <div class="seeyou">
      <img src="@/assets/no-more-tips.png" />
      <p>
        只能到这里了~
        <br />我们在客户端不见不散哦
      </p>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MFooter from "@/components/common/MFooter.vue";
export default {
    props:['finished'],
    components:{
        MFooter
    }
};
</script>

<style lang="less" scoped>
.flow-loader-nomore {
  text-align: center;
  min-height: 1px;
  .seeyou {
    box-sizing: border-box;
    color: #999;
    text-align: center;
    font-size: 3.73333vw;
    padding: 5.33333vw 0;
    img {
      width: 40%;
      margin-bottom: 2.66667vw;
    }
    p {
      margin: 0;
    }
  }
}
</style>