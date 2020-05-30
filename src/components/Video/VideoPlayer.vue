<template>
  <div class="m-video-player">
    <img class="pic" :src="videoDetail.poseterUrl" alt />
    <div class="player">
      <div class="player-container">
        <div class="player-box" id="player">
          <video
            @timeupdate="timeupdate"
            @canplay="canplay"
            @ended="end"
            ref="video"
            preload="metadata"
            width="100%"
            height="100%"
            :poster="videoDetail.poseterUrl"
            :src="videoDetail.videoUrl"
          ></video>
          <div class="display">
            <div class="load-layer" v-show="loadLayer" @click="playVideo(),loadLayer=false">
              <img src="@/assets/video_play.png" />
              <div>{{duration | setTime}}</div>
            </div>
            <div class="ShowControl" v-show="playstate" @click="isShowControl = !isShowControl"></div>
            <div class="control-bar" v-show="isShowControl">
              <div class="time-container">
                <span class="text time-current-text">{{currentTime | setTime}}</span>
                <span class="control-time-split"></span>
                <span class="text time-total-text">{{duration | setTime}}</span>
              </div>
              <div class="control-slider">
                <van-slider
                  active-color="#DE698C"
                  inactive-color="#4c4c4c"
                  bar-height="0.833vw"
                  button-size="3.889vw"
                  v-model="progress"
                  @change="onChange"
                />
              </div>
              <div class="right" @click="fullScreen">
                <span class="control-btn btn-widescreen">
                  <i class="iconfont icon-Full_Screen" style="color:white"></i>
                </span>
              </div>
            </div>
            <div class="state-icon" v-show="isShowControl" @click="playVideo">
              <img v-if="!isPlay" src="@/assets/video_play.png" />
              <img v-else src="@/assets/video_stop.png" />
            </div>
          </div>
          <div class="ending-panel" v-show="isShowEndPanel">
            <img class="panel-bakcground" :src="videoDetail.poseterUrl" />
            <div class="panel-container">
              <div @click="playLoop(videoDetail.tuijian.id),Playtuijian(),isShowEndPanel=false">
                <div class="header">为你推荐:</div>
                <div class="panel-video">
                  <div class="panel-video-pic">
                    <img :src="videoDetail.tuijian.imgUrl" />
                  </div>
                  <div class="panel-video-title">
                    <p class="van-multi-ellipsis--l2">{{videoDetail.tuijian.title}}</p>
                  </div>
                </div>
              </div>
              <div class="panel-btn" @click="playVideo(),isShowEndPanel=false">
                <img src="@/assets/ic_replay_end.png" />
                <span>重新播放</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["videoDetail"],
  data() {
    return {
      isPlay: false,
      isShowControl: false,
      duration: 0,
      currentTime: 0,
      progress: 0,
      ready: false,
      isShowEndPanel: false,
      loadLayer: true,
      isFull: false,
      playstate: false
    };
  },
  methods: {
    playVideo() {
      if (this.isPlay) {
        this.toPause();
      } else {
        this.toPlay();
      }
    },
    toPlay() {
      this.isPlay = true;
      this.playstate = true;
      this.$refs.video.play();
    },
    toPause() {
      this.isPlay = false;
      this.$refs.video.pause();
    },
    end() {
      this.isPlay = false;
      this.playstate = false;
      this.isShowControl = false;
      this.isShowEndPanel = true;
    },
    canplay() {
      this.duration = this.$refs.video.duration;
    },
    timeupdate() {
      this.currentTime = this.$refs.video.currentTime;
      this.progress = (this.currentTime / this.duration) * 100;
    },
    onChange(val) {
      this.currentTime = (val / 100) * this.duration;
      this.$refs.video.currentTime = this.currentTime;
    },
    fullScreen() {
      let d = document.getElementById("player");
      if (this.isFull) {
        document.exitFullscreen();
        this.isFull = false;
      } else {
        d.requestFullscreen();
        this.isFull = true;
      }
    },
    playLoop(id) {
      this.$emit("tuijianClick", id);
    },
    Playtuijian() {
      setTimeout(() => {
        this.playVideo();
      }, 0);
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
.m-video-player {
  position: relative;
  width: 100%;
  height: 0;
  background-color: #f4f4f4;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  padding-top: 56.25%;
  .pic,
  .player {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .player-container {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    .player-box {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      .display {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translateZ(0);
        user-select: none;
        .control-bar {
          display: flex;
          position: absolute;
          z-index: 2;
          bottom: 0;
          left: 0;
          right: 0;
          height: 12.222vw;
          border: 0 solid #e2e2e2;
          background-color: rgba(0, 0, 0, 0.5);
          font-size: 0;
          text-align: left;
          opacity: 1;
          .time-container > * {
            font-size: 6.389vw;
            display: inline-block;
          }
          .time-container {
            height: 12.222vw;
            .text {
              color: white;
              font-size: 4.167vw;
              height: 100%;
              line-height: 12.222vw;
              vertical-align: top;
              float: left;
              width: 13.889vw;
              font-family: arial, sans-serif;
            }
            .time-current-text {
              text-align: right;
            }
            .time-total-text {
              text-align: left;
            }
            .control-time-split {
              width: 1.667vw;
              font-size: 4.167vw;
              color: #fff;
              height: 100%;
              line-height: 12.222vw;
              vertical-align: top;
              float: left;
              font-family: arial, sans-serif;
            }
            .control-time-split::before {
              content: "/";
              margin: 0 0.139vw;
            }
          }
          .control-slider {
            position: relative;
            height: 12.222vw;
            flex: 1;
            .van-slider {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
            }
          }
          .control-btn {
            height: 100%;
            width: 13.333vw;
            align-items: center;
            justify-content: center;
            i {
              font-size: 5vw;
              transform: rotate(90deg);
            }
          }
        }
        .control-bar > .right {
          font-size: 0;
          cursor: default;
          height: 12.222vw;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .control-bar > .right > * {
          font-size: 6.389vw;
          display: inline-flex;
        }
        .state-icon {
          position: absolute;
          display: block;
          bottom: 15.556vw;
          right: 3.194vw;
          width: 12.778vw;
          height: 12.778vw;
          margin-left: -12.5vw;
          margin-top: -12.5vw;
          img {
            height: 12.778vw;
            width: 12.778vw;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }
        .ShowControl {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
        .load-layer {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          overflow: hidden;
          text-align: center;
          cursor: pointer;
          img {
            position: absolute;
            display: block;
            bottom: 4.722vw;
            right: 3.056vw;
            width: 13.333vw;
            height: 12.222vw;
            background-size: 100% auto;
          }
          div {
            position: absolute;
            bottom: 18px;
            left: 12px;
            border: 1px solid hsla(0, 0%, 100%, 0.6);
            background-color: hsla(0, 0%, 100%, 0.2);
            padding-left: 8px;
            padding-right: 8px;
            border-radius: 2px;
            color: #fff;
            font-size: 12px;
            line-height: 20px;
            text-align: center;
          }
        }
      }
      .ending-panel {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.8);
        .panel-bakcground {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 65vw;
          z-index: -2;
        }
        .panel-container {
          background: rgba(0, 0, 0, 0.8);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 3.333vw;
          color: #fff;
          font-size: 3.889vw;
          .header {
            margin-bottom: 3.333vw;
          }
          .panel-video {
            display: flex;
            flex-direction: row;
            margin-bottom: 8.333vw;
            .panel-video-pic {
              border-radius: 1.667vw;
              width: 31.944vw;
              height: 19.444vw;
              overflow: hidden;
              position: relative;
              img {
                height: 100%;
                width: 100%;
              }
            }
            .panel-video-title {
              display: flex;
              flex: 1;
              flex-direction: column;
              margin-left: 3.333vw;
              justify-content: space-between;
              p {
                margin: 0;
                overflow: hidden;
                word-break: break-all;
                height: 11.111vw;
              }
            }
          }
          .panel-btn {
            display: flex;
            flex-direction: row;
            align-items: center;
            align-self: flex-end;
            img {
              margin-left: 6.667vw;
              margin-right: 0.833vw;
              width: 4.444vw;
              height: 4.444vw;
            }
          }
        }
      }
    }
  }
}
</style>