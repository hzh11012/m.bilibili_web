<template>
  <div class="m-space-info">
    <div class="banner">
      <img src="@/assets/bannerTop_new.png" alt />
    </div>
    <div class="part1">
      <div class="face">
        <img class="avatar-img" :src="userInfo.avatarImg" />
      </div>
      <div class="relation">
        <div class="count">
          <div class="fans">
            <span class="num">{{userInfo.fansNum}}</span>
            <span class="type">粉丝</span>
          </div>
          <div class="split">
            <span></span>
          </div>
          <div class="follow">
            <span class="num">{{userInfo.followNum}}</span>
            <span class="type">关注</span>
          </div>
          <div class="split">
            <span></span>
          </div>
          <div class="likes">
            <span class="num">{{userInfo.likesNum}}</span>
            <span class="type">获赞</span>
          </div>
        </div>
        <div :class=" userInfo.btnType ? 'follow-btn' : 'white' ">
          <slot name="btn" />
        </div>
      </div>
    </div>
    <div class="part2">
      <div class="base">
        <div class="name">{{userInfo.name}}</div>
        <div class="gender">
          <i v-if="userInfo.gender == 1" class="iconfont icon-male" style="color:#00a1d6"></i>
          <i v-if="userInfo.gender == 2" class="iconfont icon-female" style="color:#fb7299"></i>
        </div>
        <div class="level">
          <i v-if="userInfo.level == 0" class="vanfont" style="color:#BFBFBF">&#xE6CB;</i>
          <i v-else-if="userInfo.level == 1" class="vanfont" style="color:#BFBFBF">&#xE6CC;</i>
          <i v-else-if="userInfo.level == 2" class="vanfont" style="color:#95DDB2">&#xE6CD;</i>
          <i v-else-if="userInfo.level == 3" class="vanfont" style="color:#92D1E5">&#xE6CE;</i>
          <i v-else-if="userInfo.level == 4" class="vanfont" style="color:#FFB37C">&#xE6CF;</i>
          <i v-else-if="userInfo.level == 5" class="vanfont" style="color:#FF6C00">&#xE6D0;</i>
          <i v-else-if="userInfo.level == 6" class="vanfont" style="color:#FF0000">&#xE6D1;</i>
          <i v-else></i>
        </div>
        <div class="vip" v-if="userInfo.isVip">{{userInfo.vipType}}</div>
      </div>
      <div class="verify" v-if="userInfo.isVerify">
        <img class="official" :src="userInfo.verifyImg" />
        <span>{{userInfo.verifyContent}}</span>
        <a @click="isZhankai" v-text="isShow ? '收起':'展开'"></a>
      </div>
      <div class="desc">
        <span
          :class="isShow ? (userInfo.isVerify ? 'spread hasRole': 'spread') : (userInfo.isVerify ? 'hasRole': '') "
        >{{userInfo.personDesc}}</span>
        <a @click="isZhankai" v-if="!userInfo.isVerify" v-text="isShow ? '收起':'展开'"></a>
      </div>
      <div class="tags" v-if="isShow">
        <span v-for="item in userInfo.tags" :key="item.id">{{item.text}}</span>
      </div>
      <div class="clearfloat"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userInfo"],
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    isZhankai() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="less" scoped>
.m-space-info {
  background: white;
  .banner {
    height: 23.997vw;
    overflow: hidden;
    img {
      height: 34.722vw;
      width: 100%;
    }
  }
  .part1 {
    padding: 0 3.2vw;
    height: 22.772vw;
    .face {
      float: left;
      position: relative;
      .avatar-img {
        margin-top: -1.6vw;
        position: absolute;
        width: 22.4vw;
        height: 22.4vw;
        border-radius: 11.2vw;
        background: url(../../assets/loading.png) no-repeat 50%;
        background-size: contain;
        background-color: #e7e7e7;
      }
    }
    .relation {
      float: right;
      width: 58.66667vw;
      padding-top: 2.13333vw;
      .count {
        display: flex;
        text-align: center;
        .fans,
        .follow,
        .likes {
          flex: 1;
          span {
            display: block;
          }
          .num {
            font-size: 3.733vw;
            color: #212121;
          }
          .type {
            font-size: 3.333vw;
            color: #999999;
          }
        }
        .split {
          align-items: center;
          margin-top: 2.667vw;
          span {
            width: 0.278vw;
            display: block;
            height: 4.267vw;
            background: #e7e7e7;
          }
        }
      }
      .follow-btn {
        button {
          padding: 0;
          width: 100%;
          height: 8vw;
          display: block;
          border: none;
          outline: none;
          box-sizing: border-box;
          border-radius: 1.06667vw;
          font-size: 3.73333vw;
          margin-top: 3.2vw;
          background: #fb7299;
          color: white;
        }
      }
      .white {
        button {
          padding: 0;
          width: 100%;
          height: 8vw;
          display: block;
          border: none;
          outline: none;
          box-sizing: border-box;
          border-radius: 1.06667vw;
          font-size: 3.73333vw;
          margin-top: 3.2vw;
          border: 1px solid #fb7299;
          background: #ffffff;
          color: #fb7299;
        }
      }
    }
  }
  .part2 {
    padding: 3.2vw;
    .base {
      display: flex;
      align-items: center;
      height: 9.167vw;
      .name {
        font-size: 4.8vw;
      }
      .gender {
        margin-left: 1.06667vw;
        i {
          font-size: 12px;
        }
      }
      .level {
        margin: 0.5vw 0 0 1.06667vw;
        i {
          font-size: 23px;
        }
      }
      .vip {
        background: #fb7299;
        color: white;
        font-size: 3.73333vw;
        width: 21.6vw;
        height: 4.48vw;
        line-height: 4.48vw;
        text-align: center;
        border-radius: 0.8vw;
        margin-left: 1.6vw;
        vertical-align: middle;
        -webkit-transform: scale(0.71);
        transform: scale(0.71);
        -webkit-transform-origin: left;
        transform-origin: left;
        margin-right: -6.66667vw;
      }
      div {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .verify {
      font-size: 3.467vw;
      margin-top: 2.13333vw;
      .official {
        width: 4.8vw;
        height: 4.8vw;
        margin-right: 1.06667vw;
        vertical-align: middle;
        float: left;
      }
      span {
        white-space: normal;
      }
      a {
        float: right;
        color: #1389bf;
      }
    }
    .desc {
      font-size: 3.467vw;
      span {
        width: 83.46667vw;
        margin-top: 2.13333vw;
        color: #999;
        line-height: 4.53333vw;
        overflow: hidden;
        text-overflow: ellipsis;
        float: left;
        height: 4.53333vw;
        white-space: nowrap;
      }
      .spread {
        height: auto;
        white-space: normal;
        word-break: break-all;
      }
      .hasRole {
        width: 100%;
      }
      a {
        margin-top: 1.86667vw;
        float: right;
        color: #1389bf;
      }
    }
    .tags {
      span {
        background: #f4f4f4;
        color: #505050;
        display: inline-block;
        padding: 0.53333vw 1.33333vw;
        margin-right: -2.66667vw;
        font-size: 3.73333vw;
        border-radius: 0.53333vw;
        -webkit-transform: scale(0.71);
        transform: scale(0.71);
        -webkit-transform-origin: left;
        transform-origin: left;
      }
    }
    .clearfloat {
      clear: both;
    }
  }
}
</style>