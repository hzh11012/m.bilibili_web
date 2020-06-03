<template>
  <div>
    <search-head
      :isShowGuanbi="this.inputValue"
      @guanbi="guanbi"
      @search="search"
      v-model="inputValue"
      :placeholder="hotSearch"
    ></search-head>
    <tab @toggleTabs="toggleTabs" :searchResult="searchResult"></tab>
    <main-panel :is="active" :searchResult="searchResult"></main-panel>
    <pagego-top></pagego-top>
  </div>
</template>

<script>
import SearchHead from "@/components/Search/SearchHead.vue";
import Tab from "@/components/SearchResult/Tab.vue";
import MainPanel from "@/components/SearchResult/MainPanel.vue";
import FanjuPanel from "@/components/SearchResult/FanjuPanel.vue";
import UpPanel from "@/components/SearchResult/UpPanel.vue";
import TvPanel from "@/components/SearchResult/TvPanel.vue";
import PagegoTop from "@/components/common/PagegoTop.vue";
export default {
  data() {
    return {
      active: "MainPanel",
      inputValue: "",
      hotSearch: "柯南入驻Ｂ站！童年回来了！",
      historyWord: [],
      searchResult: {
        fanjuNum: 24,
        upNum: 11,
        tvNum: 100,
        videoList: [
          {
            id: 123,
            videoImg: require("@/assets/picture/3.jpg"),
            duration: 206,
            title: "【大理寺日志】《嘿！陈拾》一首歌看完大理寺日志！",
            authorName: "Ice空帆船",
            viewNum: 2155125,
            danmuNum: 434,
            videohref: "/video"
          },
          {
            id: 343,
            videoImg: require("@/assets/picture/3.jpg"),
            duration: 206,
            title: "【大理寺日志】《嘿！陈拾》一首歌看完大理寺日志！",
            authorName: "Ice空帆船",
            viewNum: 1216852,
            danmuNum: 45645,
            videohref: "/video"
          }
        ],
        fanjuList: [
          {
            id: 0,
            fanjuImg: require("@/assets/picture/fanju0.png"),
            title: "公主连结Re:Dive",
            fanjuHref: "/video"
          }
        ],
        upList: [
          {
            uid: 1232682,
            upImg: require("@/assets/picture/up.jpg"),
            name: "公主连结ReDive",
            fansNum: 2451287,
            videoNum: 64,
            sign: "与你再次连结的物语",
            upHref: "/userinfo"
          }
        ],
        tvList: [
          // {
          //   id: 0,
          //   tvImg: require("@/assets/picture/tv0.jpg"),
          //   title: "名侦探柯南：绀青之拳",
          //   area: "地区：日本",
          //   cv:
          //     "演员：高山南 山口胜平 山崎和佳奈 小山力也 绪方贤一 岩居由希子 高木涉 大谷育江 林原惠美 松井菜樱子 桧山修之 石井康嗣 浅川悠 高桥广树 梶裕贵 间宫康弘 林修 河北麻由子 山崎育三郎",
          //   staff: "导演：永冈智佳",
          //   tvHref: "/video"
          // }
        ]
      }
    };
  },
  methods: {
    search() {
      if (this.inputValue == "") {
        this.inputValue = this.hotSearch;
      }
      let searchWord = JSON.parse(localStorage.getItem("searchWord"));
      if (searchWord == null) {
        let li = [];
        li.unshift({ value: this.inputValue });
        localStorage.setItem("searchWord", JSON.stringify(li));
      } else {
        let obj = JSON.parse(localStorage.getItem("searchWord"));
        if (!obj.find(v => v.value === this.inputValue)) {
          if (this.historyWord.length > 9) {
            this.historyWord.pop();
          }
          let li = this.historyWord;
          li.unshift({ value: this.inputValue });
          localStorage.setItem("searchWord", JSON.stringify(li));
        }
      }
      //axios获取搜索结果数据
      //TODO
      this.$router
        .push({
          path: "/searchresult",
          query: { keyword: this.inputValue }
        })
        .catch(data => {});
    },
    guanbi() {
      this.$router.push("/search");
    },
    toggleTabs(index) {
      if (index == 0) {
        this.active = "MainPanel";
      } else if (index == 1) {
        this.active = "FanjuPanel";
      } else if (index == 2) {
        this.active = "UpPanel";
      } else {
        this.active = "TvPanel";
      }
    }
  },
  components: {
    SearchHead,
    Tab,
    MainPanel,
    FanjuPanel,
    UpPanel,
    TvPanel,
    PagegoTop
  },
  created() {
    if (localStorage.getItem("searchWord") !== null) {
      this.historyWord = JSON.parse(localStorage.getItem("searchWord"));
    }
    this.inputValue = this.$route.query.keyword;
  }
};
</script>

<style lang="less" scoped>
</style>