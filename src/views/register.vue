<template>
  <div>
    <login-top
      middleTop="注册bilibili"
      :rightTop="isShow ? '账号注册' : '手机号注册'"
      @changeLogin="isShow = !isShow"
    ></login-top>
    <div v-if="!isShow">
      <login-text
        class="name"
        label="昵称"
        placeholder="请输入昵称"
        maxlength="16"
        @inputChange="contnet => model.name = contnet"
      ></login-text>
      <login-text
        class="user"
        label="账号"
        placeholder="请输入账号"
        maxlength="16"
        @inputChange="contnet => model.username = contnet"
      ></login-text>
      <login-text
        class="pwd"
        label="密码"
        placeholder="6～16个字符，区分大小写"
        type="password"
        maxlength="16"
        @inputChange="contnet => model.password = contnet"
      ></login-text>
    </div>
    <div v-if="isShow" class="form-group">
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
      <login-text
        class="pwd1"
        label="密码"
        placeholder="6～16个字符，区分大小写"
        type="password"
        maxlength="16"
        @inputChange="contnet => model.password = contnet"
      ></login-text>
    </div>
    <div class="btn-box">
      <div class="box1">
        <login-btn size="large" :plain="true" text="登录" color="#fb7299" @onClick="toLogin"></login-btn>
      </div>
      <div class="box2" v-if="!isShow">
        <login-btn size="large" :plain="false" text="同意并注册" color="#ff9db5" @onClick="register"></login-btn>
      </div>
      <div class="box2" v-if="isShow">
        <login-btn size="large" :plain="false" text="同意并注册" color="#ff9db5" @onClick="register1"></login-btn>
      </div>
    </div>
    <div class="tips">
      <p>完成注册即代表你同意</p>
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
        name: "",
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
    async register() {
      let rulg = /^.{6,16}$/;
      let rulg1 = /^.{1,16}$/;
      if (
        rulg1.test(this.model.name) &&
        rulg.test(this.model.username) &&
        rulg.test(this.model.password)
      ) {
        const { data: res } = await this.$http.post("/register", this.model);
        return this.$toast(res.msg);
      } else {
        return this.$toast("格式不正确");
      }
    },
    register1() {
      //TODO 获取api返回的code进行校验
      if (this.model.phone == "") {
        return this.$toast("手机号为空");
      } else if (this.model.phone.length !== 11) {
        return this.$toast("手机号格式错误");
      } else if (this.model.code == this.code) {
        //TODO 检测是否注册 来进行下一步操作
      } else {
        return this.$toast("验证码错误");
      }
    },
    getMsg() {
      if (this.model.phone == "") {
        return this.$toast("手机号为空");
      } else if (this.model.phone.length !== 11) {
        return this.$toast("手机号格式错误");
      } else {
        //TODO
        console.log("获取验证码");
      }
    },
    toLogin(){
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="less" scoped>
.name {
  border-bottom: 0.278vw solid rgb(231, 231, 231);
  padding-top: 4.167vw;
}
.user {
  padding-top: 4.167vw;
}
.pwd {
  border-bottom: 0.278vw solid rgb(231, 231, 231);
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
.form-group {
  padding-top: 4.267vw;
  .pwd1 {
    padding-top: 4.267vw;
    border-bottom: 0.278vw solid rgb(231, 231, 231);
  }
}
</style>