<template>
  <div>
    <div class="tabs">
      <span :class="value == 0 ? 'on':''" @click="value = 0">动态</span>
      <span :class="value == 1 ? 'on':''" @click="value = 1">视频</span>
      <span :class="value == 2 ? 'on':''" @click="value = 2">相簿</span>
    </div>
    <div class="lists">
      <div v-if="value == 0" class="dynamicList">
        <div>
          <ul class="list">
            <li class="card" v-for="item in dynamicList" :key="item.id">
              <div class="card">
                <div class="cardHeader wings" @click="clickHeader">
                  <div class="avatar">
                    <i class="img">
                      <img :src="item.userImg" />
                    </i>
                    <i class="badge">
                      <img
                        v-if="item.userBadge == 0"
                        src="@/assets/icon_Certification_official.png"
                      />
                      <img
                        v-else-if="item.userBadge == 1"
                        src="@/assets/icon_Certification_enterprise.png"
                      />
                    </i>
                  </div>
                  <div class="nameBox">
                    <div class="username">{{item.userName}}</div>
                    <p class="userExtra">{{item.userExtra}}</p>
                  </div>
                </div>
                <div class="main" @click="clickMain">
                  <div class="wings">
                    <slot name="contentTitle" />
                  </div>
                  <div class="wings">
                    <slot name="content" />
                  </div>
                </div>
                <ul class="footer">
                  <li class="transmit" @click="clickTransmit">转发</li>
                  <li class="comment" @click="clickComment">评论</li>
                  <li
                    class="support"
                    :class="item.isSupport?'active':''"
                    @click="clickSupport"
                  >{{item.TextorNum}}</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="value == 1" class="videoList">
        <router-link :to="item.videoHref" class="videoItem" v-for="item in videoList" :key="item.id">
          <div class="videoCover">
            <img class="videoImg" :src="item.videoImg" />
            <span class="durationTime">{{item.durationTime | setTime}}</span>
          </div>
          <div class="videoInfo">
            <h3 class="title van-multi-ellipsis--l2">{{item.videoTitle}}</h3>
            <div class="state">
              <span class="viewNum">
                <i class="vanfont">&#xE6E6;</i>
                <span>{{item.viewNum}}</span>
              </span>
              <span class="danmuNum">
                <i class="vanfont">&#xE6E7;</i>
                <span>{{item.danmuNum}}</span>
              </span>
            </div>
          </div>
        </router-link>
      </div>
      <div v-if="value == 2" class="albumList">
        <router-link
          :to="item.albumHref"
          target="_blank"
          class="albumItem"
          v-for="item in albumList"
          :key="item.id"
        >
          <div class="albumCover">
            <img class="albumImg" :src="item.albumImg" />
            <span class="durationPages">{{item.durationPages}}</span>
          </div>
          <div class="albumInfo">
            <h3 class="title van-multi-ellipsis--l2">{{item.albumTitle}}</h3>
            <div class="state">
              <span class="viewNum">
                <van-icon name="eye-o" />
                <span>{{item.viewNum}}</span>
              </span>
              <span class="liuyanNum">
                <i class="vanfont">&#xE639;</i>
                <span>{{item.liuyanNum}}</span>
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["videoList", "albumList", "dynamicList"],
  data() {
    return {
      value: 0
    };
  },
  methods: {
    //点赞
    clickSupport() {
      this.$emit("clickSupport");
    },
    //点击头部区域
    clickHeader() {
      this.$emit("clickHeader");
    },
    //点击主体内容区域
    clickMain() {
      this.$emit("clickHeaderD");
    },
    //点击转发
    clickTransmit() {
      this.$emit("clickTransmit");
    },
    //点击评论
    clickComment() {
      this.$emit("clickComment");
    }
  },
  filters: {
    setTime: function(val) {
      if (!val) return "00:00";
      let min = parseInt(val / 60);
      if (min < 10) {
        min = "0" + min;
      }
      let sec = parseInt(val % 60);
      if (sec < 10) {
        sec = "0" + sec;
      }
      val = `${min}:${sec}`;
      return val;
    }
  }
};
</script>

<style lang="less" scoped>
.tabs {
  background: white;
  height: 10.66667vw;
  line-height: 10.66667vw;
  padding-left: 3.2vw;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  font-size: 0;
  span {
    display: inline-block;
    margin-right: 8.53333vw;
    color: #757575;
    font-size: 3.46667vw;
  }
  .on {
    color: #fb7299;
  }
}
.lists {
  background: white;
  .dynamicList {
    ul,
    li {
      list-style: none;
    }
    .card {
      border-bottom: 0.556vw #f4f4f4 solid;
      background-color: #fff;
      .card {
        position: relative;
        .cardHeader {
          display: flex;
          padding-top: 3.889vw;
          padding-bottom: 3.889vw;
          .avatar {
            position: relative;
            overflow: visible;
            width: 11.111vw;
            height: 11.111vw;
            margin-right: 1.944vw;
            line-height: 11.111vw;
            .img {
              display: inline-block;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 50% 50%;
                display: block;
              }
            }
            .badge {
              position: absolute;
              width: 5vw;
              height: 5vw;
              bottom: -0.556vw;
              right: -0.556vw;
              border-radius: 50%;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 50% 50%;
                display: block;
              }
            }
          }
          .nameBox {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            p {
              margin: 0;
            }
            .username {
              color: #212121;
              display: flex;
              font-size: 4.167vw;
              font-weight: 500;
            }
            .userExtra {
              font-size: 3.333vw;
              color: #999;
              font-weight: 400;
            }
          }
        }
        .main {
          padding-bottom: 3.889vw;
        }
        .footer {
          display: flex;
          padding: 0 3.889vw 3.333vw;
          justify-content: space-around;
          li {
            flex: 1 1 33%;
            padding-left: 15vw;
            font-size: 3.611vw;
            line-height: 5.556vw;
            color: #757575;
            list-style: none;
          }
          li.transmit {
            background: url(data:image/png;base64,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)
              8.333vw center no-repeat;
            background-size: 5.556vw;
          }
          li.comment {
            background: url(data:image/png;base64,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)
              8.333vw center no-repeat;
            background-size: 5.556vw;
          }
          li.support {
            background: url(data:image/png;base64,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)
              8.333vw center no-repeat;
            background-size: 5.556vw;
          }
          li.active.support {
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAABD1JREFUaAXtmk1sDVEUgM+ZmVYrfmJBIhESCRIbERFWgoUFK4l04/+nrxtEtCkLixcbP60mbGiLiliVNKGp1IKQiAWxIJFQLPyFEPFbpebOcS6d5t7pvNc79LV91zzRe+7cc++c75w7Z+7cGYD0l3rAKg/gSND41U1r+bz8nxYDYDfLXUBw1GvIXCq0PcMKTA2t5eLVx7NEtCYODBE63NmwGquqfsa1D8UxZygGMR1DvPzQlAtWjkEEq/wu3Gc63t/oDRuwqGneRQDrBjMSgXZQlgpmV8EGVsF+1jQvJQrq1GO5ZI7yJPh2ck6u9n89XnBg2tM4HQNqZRDP2FgBY411EyoWFJiyLWW+j20ENDmRXV7Qm0g/gbK51xMMGqqKL70n+HazIKwblwF8M9ZNqFiwCIvqph08jTcmtOePOno9f9XPoFNBgKn65BKexg0G549XccqKB5hqm6cJEOcTJakodllvcQDTsctjfEFtDDslymBaR0DC7ObvpvpJ9YY0aYlnL45zklqY1AhdnwoWXXmevGtpyp6bIL70rODrcR6vgAZGjbAjXPDL1ZH/uUnoxievISLfkuhM8p7cg7AXHXzuUNCOR6oexo0RG2GqPTVeCL9efO5ez8vBctmRy4E/hLd8cEifcHitXcpjZgaezOQIhyYgCAAO8xPZGRfLtmP9Bvk01v8bkKVl0vGFf5evw0wI269dRAI7bpMIetqotdVVzdaAqbGxxBfBBQ7nLFWpWGUO2Apx+9MG1X4NWHRhBcMuUhWKXeYpvlll0IC5YZPaaIPMyXaeyhEFnqs2WiJriVkHJphqCWQ/BiE86q+woAFzUs97X1Y7Fo1M2KnaqgGrDbbInkMXVRargXkX9A3UZW7/N8B8hbbzUlVbJFodYYhMZxlpLWWroS92mSPb7Y4ruRrlsDjCdCXuudpeYMfRsnMYaSuBeddEuF5pRwipllYCc1q+iQc2vldBQ9lKYAf1xUYIK0s7gZ3cuzAW3pbwAdZlnqpRVWX7IpxnOls5pT3Xjb0dhVG2KsL8bPsaDm29E8LFlVYB8zb7pejDQhTaLmCEvNNZwlsDzNP5qztj2rVoRKN1DVi+yIoqFE0dsRN3rvwxmL0aML9QeTFYh1HcftrENh0Y4Z5Jp1Gng/DYra/UNuty2agDAxh5KddgI3Uc0TkwWHYObdOA3UWT2jm1a5teoeKoLRGPevWVLab2acBYUSG8UmctJ693pgOMpB7vSrZ44yt3J7FBA5Yd8eC2J275mPmc5jtHbdZGvM+7ccu9I1VbMItBEuC8bxpo7+mZwhfLkILJAcZ8HRe4N0oatv3eKOP3sejXNO/nTO/w9qgc1+HvC+Q/rss3GthXgsPXG9fl95R9evT7SwTW79P78wakbxzWk/oE3/nPM8d1rsPCibfkbEwCmuqmHkg9kHog9UDqgdQDqQeG3QO/AOrqNkN50/0bAAAAAElFTkSuQmCC);
          }
          li.active {
            color: #fb7299;
          }
        }
      }
    }
  }
  .videoList {
    padding-left: 3.2vw;
    .videoItem {
      height: 24.26667vw;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      display: block;
      padding: 2.4vw 3.2vw 2.4vw 0;
      .videoCover {
        float: left;
        width: 31.2vw;
        height: 19.46667vw;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          border-radius: 1.06667vw;
        }
        .videoImg {
          background: url(../../assets/loading.png) no-repeat 50%;
          background-size: contain;
          background-color: #e7e7e7;
        }
        .durationTime {
          position: absolute;
          font-size: 3.2vw;
          padding: 0 0.53333vw;
          right: 1.06667vw;
          bottom: 1.06667vw;
          border-radius: 0.53333vw;
          background: rgba(0, 0, 0, 0.5);
          color: white;
        }
      }
      .videoInfo {
        position: relative;
        margin-left: 34.4vw;
        height: 19.46667vw;
        .title {
          margin: 0;
          font-size: 3.73333vw;
          color: #212121;
          line-height: 4.53333vw;
          font-weight: 400;
        }
        .state {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          font-size: 2.66667vw;
          color: #999;
          line-height: 4.53333vw;
          height: 4.53333vw;
          .viewNum,
          .danmuNum {
            display: inline-block;
            i {
              font-size: 4.278vw;
              margin-right: 1.06667vw;
              vertical-align: middle;
            }
            span {
              display: inline-block;
              vertical-align: middle;
            }
          }
          .danmuNum {
            margin-left: 7.73333vw;
          }
        }
      }
    }
  }
  .albumList {
    padding: 0 3.2vw;
    .albumItem {
      height: 27.73333vw;
      padding: 2.13333vw 0;
      box-sizing: border-box;
      display: block;
      .albumCover {
        float: left;
        width: 23.46667vw;
        height: 23.46667vw;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          border-radius: 1.06667vw;
        }
        .albumImg {
          background: url(../../assets/loading.png) no-repeat 50%;
          background-size: contain;
          background-color: #e7e7e7;
        }
        .durationPages {
          position: absolute;
          font-size: 3.2vw;
          padding: 0 0.53333vw;
          right: 1.06667vw;
          bottom: 1.06667vw;
          border-radius: 0.53333vw;
          background: rgba(0, 0, 0, 0.5);
          color: white;
        }
      }
      .albumInfo {
        position: relative;
        margin-left: 26.66667vw;
        height: 23.46667vw;
        .title {
          margin: 0;
          font-size: 3.46667vw;
          color: #999;
          line-height: 4.8vw;
          font-weight: 400;
        }
        .state {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          font-size: 2.66667vw;
          color: #999;
          line-height: 4.53333vw;
          height: 4.53333vw;
          .viewNum,
          .liuyanNum {
            display: inline-block;
            i {
              font-size: 4.444vw;
              margin-right: 1.06667vw;
              vertical-align: middle;
            }
            i.vanfont {
              font-size: 3.889vw;
              margin-right: 1.06667vw;
              vertical-align: middle;
            }
            span {
              display: inline-block;
              vertical-align: middle;
            }
          }
          .liuyanNum {
            margin-left: 5.33333vw;
          }
        }
      }
    }
  }
}
.wings {
  padding-left: 3.333vw;
  padding-right: 3.333vw;
}
</style>





