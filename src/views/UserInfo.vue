<template>
  <div class="body">
    <nav-bar
      hotSearch="api获取热搜关键词"
      avatarImg="https://img.yzcdn.cn/vant/cat.jpeg"
      btnTitle="下载 App"
      leftHref
      middleHref
      rightHref
      @onClick="downloadApp"
    ></nav-bar>
    <userinfo-header
      avatarImg="https://img.yzcdn.cn/vant/cat.jpeg"
      fansNum="8.2万"
      followNum="75"
      likesNum="48.2万"
      :btnType="false"
      name="共青团中央"
      :isVip="true"
      vipType="年度大会员"
      :isVerify="true"
      verifyImg="http://s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/icon_Certification_enterprise.png"
      verifyContent="bilibili UP主认证：bilibili 知名游戏UP主"
      personDesc="大家好，我是皮皮团，右上角关注，点一下，玩好几年，看小片不花一分钱(◦˙▽˙◦)投稿发邮箱tzybilibili@163.com"
    >
      <button slot="btn">编辑资料</button>
      <i slot="gender" class="iconfont icon-male" style="color:#00a1d6"></i>
      <!-- <i slot="gender" class="iconfont icon-female" style="color:#fb7299"></i> -->
      <i slot="level" class="vanfont">&#xE6D1;</i>
      <span slot="tag" v-for="item in 3" :key="item">粉丝勋章</span>
    </userinfo-header>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import UserinfoHeader from "@/components/common/UserinfoHeader.vue";
export default {
  components: {
    NavBar,
    UserinfoHeader
  },
  methods: {
    downloadApp() {
      // window.open(
      //   "https://dl.hdslb.com/mobile/latest/iBiliPlayer-bili.apk",
      //   "_blank"
      // );
    }
  }
};
</script>

<style lang="less" scoped>
.body {
  width: 100%;
  height: 100%;
  background: white;
}
</style>