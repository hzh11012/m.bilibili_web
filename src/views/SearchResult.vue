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
    <main-panel :is="active" :searchResult="searchResult.videoList"></main-panel>
    <pagego-top></pagego-top>
  </div>
</template>

<script>
import SearchHead from "@/components/Search/SearchHead.vue";
import Tab from "@/components/SearchResult/Tab.vue";
import MainPanel from "@/components/SearchResult/MainPanel.vue";
import FanjuPanel from "@/components/SearchResult/FanjuPanel.vue";
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
      console.log(index);
      if (index == 0) {
        this.active = "MainPanel";
      } else {
        this.active = "FanjuPanel";
      }
    }
  },
  components: {
    SearchHead,
    Tab,
    MainPanel,
    FanjuPanel,
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