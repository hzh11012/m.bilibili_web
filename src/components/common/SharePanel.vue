<template>
  <div class="share-panel">
    <ul class="share-list">
      <li>
        <a href="javascript:void(0);" target="_black" class="share-item">
          <i class="icon icon_weibo"></i>
          <span>新浪微博</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" target="_black" class="share-item">
          <i class="icon icon_qqkongjian"></i>
          <span>QQ空间</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" target="_black" class="share-item">
          <i class="icon icon_qq"></i>
          <span>QQ好友</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" target="_black" class="share-item">
          <i class="icon icon_tieba"></i>
          <span>百度贴吧</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" target="_black" class="share-item">
          <i class="icon icon_bili"></i>
          <span>bilibili动态</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" target="_black" class="share-item">
          <i class="icon icon_link"></i>
          <span>复制链接</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" target="_black" class="share-item">
          <i class="icon icon_qrcode"></i>
          <span>分享二维码</span>
        </a>
      </li>
    </ul>
    <div class="share-cancel" @click="cancel">取消</div>
  </div>
</template>

<script>
export default {
  methods: {
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style lang="less" scoped>
.share-panel {
  width: 100%;
  padding: 5.333vw 0;
  .share-list {
    text-align: left;
    li {
      display: inline-block;
      text-align: center;
      letter-spacing: normal;
      width: 25%;
      .share-item {
        display: inline-block;
        text-align: center;
        text-decoration: none;
        outline: none;
        float: none;
        margin-bottom: 4vw;
        width: 100%;
        .icon {
          display: block;
          width: 100%;
          height: 13.333vw;
          margin: 0 auto;
        }
        .icon_weibo {
          background: url("../../assets/weibo.png") no-repeat 50%;
          background-size: contain;
        }
        .icon_qqkongjian {
          background: url("../../assets/qqkongjian.png") no-repeat 50%;
          background-size: contain;
        }
        .icon_qq {
          background: url("../../assets/qq.png") no-repeat 50%;
          background-size: contain;
        }
        .icon_tieba {
          background: url("../../assets/tieba.png") no-repeat 50%;
          background-size: contain;
        }
        .icon_bili {
          background: url("../../assets/bili.png") no-repeat 50%;
          background-size: contain;
        }
        .icon_link {
          background: url("../../assets/link.png") no-repeat 50%;
          background-size: contain;
        }
        .icon_qrcode {
          background: url("../../assets/qrcode.png") no-repeat 50%;
          background-size: contain;
        }
        span {
          color: #333;
          font-size: 3.889vw;
          line-height: 7.5vw;
          display: block;
        }
      }
    }
  }
  .share-cancel {
    border: 0.278vw solid #ddd;
    border-radius: 1.389vw;
    width: 94%;
    height: 11.667vw;
    line-height: 11.667vw;
    display: block;
    color: #999;
    font-size: 4.167vw;
    text-align: center;
    margin: 0.667vw auto 0;
  }
}
</style>