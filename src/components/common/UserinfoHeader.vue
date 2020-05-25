<template>
  <div class="m-space-info">
    <div class="banner">
      <img src="@/assets/bannerTop_new.png" alt />
    </div>
    <div class="part1">
      <div class="face">
        <img class="avatar-img" :src="avatarImg" />
      </div>
      <div class="relation">
        <div class="count">
          <div class="fans">
            <span class="num">{{fansNum}}</span>
            <span class="type">粉丝</span>
          </div>
          <div class="split">
            <span></span>
          </div>
          <div class="follow">
            <span class="num">{{followNum}}</span>
            <span class="type">关注</span>
          </div>
          <div class="split">
            <span></span>
          </div>
          <div class="likes">
            <span class="num">{{likesNum}}</span>
            <span class="type">获赞</span>
          </div>
        </div>
        <div :class=" btnType ? 'follow-btn' : 'white' ">
          <slot name="btn" />
        </div>
      </div>
    </div>
    <div class="part2">
      <div class="base">
        <div class="name">{{name}}</div>
        <div class="gender">
          <slot name="gender" />
        </div>
        <div class="level">
          <slot name="level" />
        </div>
        <div class="vip" v-if="isVip">{{vipType}}</div>
      </div>
      <div class="verify" v-if="isVerify">
        <img class="official" :src="verifyImg" />
        <span>{{verifyContent}}</span>
        <a @click="isZhankai" v-text="isShow ? '收起':'展开'"></a>
      </div>
      <div class="desc">
        <span
          :class="isShow ? (isVerify ? 'spread hasRole': 'spread') : (isVerify ? 'hasRole': '') "
        >{{personDesc}}</span>
        <a @click="isZhankai" v-if="!isVerify" v-text="isShow ? '收起':'展开'"></a>
      </div>
      <div class="tags" v-if="isShow">
          <slot name="tag"/>
      </div>
      <div class="clearfloat"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "avatarImg",
    "fansNum",
    "followNum",
    "likesNum",
    "btnType",
    "name",
    "isVip",
    "vipType",
    "isVerify",
    "verifyImg",
    "verifyContent",
    "personDesc"
  ],
  data() {
    return {
      isShow: false,
      verifyType: true
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
        color: red;
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
</style>