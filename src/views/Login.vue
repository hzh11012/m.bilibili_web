<template>
  <div>
    <login-top
      middleTop="登录bilibili"
      :rightTop="isShow ? '短信登录' : '密码登录'"
      @changeLogin="isShow = !isShow"
    ></login-top>
    <div v-if="isShow">
      <login-text
        class="user"
        label="账号"
        placeholder="你的手机号/邮箱"
        maxlength="16"
        @inputChange="contnet => model.username = contnet"
      ></login-text>
      <login-text
        class="pwd"
        label="密码"
        placeholder="请输入密码"
        maxlength="16"
        type="password"
        @inputChange="contnet => model.password = contnet"
      ></login-text>
      <div class="losePwd">
        <router-link to="/register">忘记密码</router-link>
      </div>
      <div class="btn-box">
        <div class="box1">
          <login-btn size="large" :plain="true" text="注册" color="#fb7299" @onClick="toRegister"></login-btn>
        </div>
        <div class="box2">
          <login-btn size="large" :plain="false" text="登录" color="#fb7299" @onClick="login1"></login-btn>
        </div>
      </div>
    </div>
    <div v-if="!isShow" class="form-group">
      <selected-text @tel="selected => selectedTel = selected"></selected-text>
      <login-text
        class="user"
        :label="selectedTel.tel"
        placeholder="请输入常用手机号"
        type="number"
        maxlength="16"
        :isShowBtn="true"
        btnMsg="获取验证码"
        @onClick="getMsg"
        @inputChange="contnet => model.phone = contnet"
      ></login-text>
      <login-text
        class="pwd"
        @inputChange="contnet => model.code = contnet"
        label="验证码"
        placeholder="请输入验证码"
        type="number"
        maxlength="6"
      ></login-text>
      <div class="btn-box">
        <div class="box3">
          <login-btn size="large" :plain="false" text="验证登录" color="#ff9db5" @onClick="login2"></login-btn>
        </div>
      </div>
    </div>
    <div class="tips">
      <p>登录即代表你同意</p>
      <p>
        <a
          target="_blank"
          href="https://www.bilibili.com/blackboard/account-useragreement.html"
        >用户协议</a>
      </p>
      <p>和</p>
      <p>
        <a target="_blank" href="https://www.bilibili.com/blackboard/privacy-h5.html">隐私政策</a>
      </p>
    </div>
    <div class="bottom-box" v-if="isShow">
      <div class="bottom-tips">
        <div class="line-box">
          <span></span>
        </div>
        <div class="title">其他登录方式</div>
        <div class="line-box">
          <span></span>
        </div>
      </div>
      <div class="bottom-btn">
        <div>
          <van-icon name="friends" />
          <span>QQ</span>
        </div>
        <div>
          <van-icon name="browsing-history" />
          <span>微博</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import LoginTop from "@/components/common/LoginTop.vue";
import LoginText from "@/components/common/LoginText.vue";
import LoginBtn from "@/components/common/LoginBtn.vue";
import SelectedText from "@/components/common/SelectedText.vue";
export default {
  components: {
    LoginTop,
    LoginText,
    LoginBtn,
    SelectedText
  },
  data() {
    return {
      model: {
        username: "",
        password: "",
        phone: "",
        code: ""
      },
      isShow: false,
      selectedTel: { value: "1", name: "中国大陆", tel: "+86" },
      code: ""
    };
  },
  methods: {
    getMsg() {
      if (this.model.phone == "") {
        return this.$toast("手机号不能为空哦");
      } else if (this.model.phone.length !== 11) {
        return this.$toast("手机号格式错误");
      } else {
        //TODO axois请求验证码
        console.log("获取验证码");
      }
    },
    toRegister() {
      this.$router.push("/register");
    },
    login1() {
      let rulg = /^.{6,16}$/;
      let rulg1 = /^.{1,16}$/;
      if (this.model.username == "") {
        return this.$toast("账号为空");
      } else if (this.model.password == "") {
        return this.$toast("密码为空");
      } else {
        if (
          this.model.username == "123456" &&
          this.model.password == "123456"
        ) {
          let that =this;
          setTimeout(function() {
            that.$router.push("/home/home");
          }, 2500);
          return this.$toast("登录成功");
        } else {
          return this.$toast("账号或密码错误");
        }
      }
    },
    login2() {
      //TODO 获取api返回的code进行校验
      if (this.model.phone == "") {
        return this.$toast("手机号为空");
      } else if (this.model.phone.length !== 11) {
        return this.$toast("手机号格式错误");
      } else if (this.model.code == this.code) {
        //TODO 登录操作
      } else {
        return this.$toast("验证码错误");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.user {
  padding-top: 4.167vw;
}
.pwd {
  border-bottom: 0.278vw solid rgb(231, 231, 231);
}
.losePwd {
  padding: 2.133vw 3.2vw;
  text-align: right;
  a {
    color: #fb7299;
    font-size: 3.467vw;
    right: 0;
  }
}
.btn-box {
  display: flex;
  .box1 {
    flex: 1;
    margin: 4.267vw 1.528vw 0 3.2vw;
  }
  .box2 {
    flex: 1;
    margin: 4.267vw 3.2vw 0 1.528vw;
  }
  .box3 {
    flex: 1;
    margin: 4.267vw 3.2vw 0 3.2vw;
  }
}
.tips {
  font-size: 3.333vw;
  width: 100%;
  color: #757575;
  margin-top: 6.4vw;
  text-align: center;
  p {
    display: inline-block;
    margin: 0;
    a {
      color: #fb7299;
    }
  }
}
.bottom-box {
  margin-top: 50.667vw;
  .bottom-tips {
    height: 5.331vw;
    margin: 0 13.333vw;
    display: flex;
    div {
      flex: 1;
    }
    .title {
      text-align: center;
      font-size: 3.733vw;
      width: 33.328vw;
      color: #757575;
    }
    .line-box {
      text-align: center;
      margin-top: 2.667vw;
      span {
        width: 100%;
        display: block;
        height: 0.278vw;
        background: #e7e7e7;
      }
    }
  }
  .bottom-btn {
    text-align: center;
    color: #757575;
    div {
      display: inline-block;
      height: 11.944vw;
      margin: 5.333vw 5.867vw 0 5.867vw;
      span {
        font-size: 3.333vw;
        display: block;
      }
      .van-icon {
        display: block;
        font-size: 6.667vw;
        color: rgb(117, 117, 117);
      }
    }
  }
}
.form-group {
  padding-top: 4.267vw;
}
</style>