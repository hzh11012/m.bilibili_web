<template>
  <div class="space">
    <table class="infoCard">
      <tr>
        <td>头像</td>
        <td>
          <img class="avatarImg" :src="userDetail.avatarImg" />
        </td>
      </tr>
      <tr>
        <td>昵称</td>
        <td>{{userDetail.name}}</td>
      </tr>
      <tr>
        <td>UID</td>
        <td>{{userDetail.uid}}</td>
      </tr>
      <tr>
        <td>性别</td>
        <td v-if="userDetail.gender == 0">男</td>
        <td v-else-if="userDetail.gender == 1">女</td>
        <td v-else>保密</td>
      </tr>
      <tr>
        <td>出生日期</td>
        <td>{{userDetail.birthday}}</td>
      </tr>
      <tr>
        <td>个性签名</td>
        <td>{{userDetail.signature}}</td>
      </tr>
    </table>
    <div class="opCard">
      <a class="item" @click="logOut">退出登录</a>
      <a class="item" @click="isShow">返回空间</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userDetail"],
  methods: {
    isShow() {
      this.$emit("isShow");
    },
    logOut() {
      this.$emit("logOut");
    }
  }
};
</script>

<style lang="less" scoped>
.space {
  background: #f4f4f4;
  .infoCard {
    margin-top: 3.2vw;
    width: 100%;
    font-size: 4vw;
    background: #fff;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid #eee;
      td {
        padding: 2.66667vw 0;
        box-sizing: border-box;
        line-height: 1.44;
      }
      td:first-child {
        padding-left: 3.2vw;
        text-align: left;
        color: #505050;
        user-select: none;
        width: 25.411vw;
      }
      td:nth-child(2) {
        padding-right: 3.2vw;
        text-align: right;
        color: #999;
        max-width: 48vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    img {
      width: 12.26667vw;
      height: 12.26667vw;
      border-radius: 6.13333vw;
      vertical-align: middle;
      max-width: 100%;
    }
    .avatarImg {
      background: url(../../assets/loading.png) no-repeat 50%;
      background-size: contain;
      background-color: #e7e7e7;
    }
  }
  .opCard {
    margin-top: 5.33333vw;
    .item:first-child {
      border-bottom: 1px solid #eee;
    }
    .item {
      display: block;
      padding: 2.66667vw;
      text-align: center;
      color: #505050;
      background: #fff;
      font-size: 3.73333vw;
      text-decoration: none;
      user-select: none;
    }
  }
}
</style>