<template>
  <div class="main">
    <search-head
      @search="search"
      :placeholder="hotSearch"
      @inputChange="content => this.inputValue = content"
    ></search-head>
    <search-hot :hotWord="hotWord" @onClick="onClick"></search-hot>
    <search-history :historyList="historyWord" @clearHistory="clearHistory" @onClick='onClick'></search-history>
  </div>
</template>

<script>
import SearchHead from "@/components/Search/SearchHead.vue";
import SearchHot from "@/components/Search/SearchHot.vue";
import SearchHistory from "@/components/Search/SearchHistory.vue";
export default {
  data() {
    return {
      inputValue: "",
      hotWord: [
        { value: "张艺兴" },
        { value: "卫星" },
        { value: "Twice回归" },
        { value: "金龟子" },
        { value: "徐大sao" },
        { value: "传闻中的陈芊芊" },
        { value: "少年奇拉比" },
        { value: "美国" },
        { value: "王者荣耀蒙恬" },
        { value: "绿皮书" },
        { value: "明日方舟" },
        { value: "老番茄" },
        { value: "创造营2020" },
        { value: "黑人抬棺" },
        { value: "名侦探柯南" },
        { value: "文在寅" },
        { value: "周深" },
        { value: "三时三餐" },
        { value: "小狼XF" },
        { value: "(G)I-DLE" }
      ],
      hotSearch: "柯南入驻Ｂ站！童年回来了！",
      historyWord: []
    };
  },
  components: {
    SearchHead,
    SearchHot,
    SearchHistory
  },
  methods: {
    clearHistory() {
      this.historyWord = [];
      localStorage.removeItem("searchWord");
      console.log("清除历史记录");
    },
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
      this.$router.push("/searchresult");
    },
    onClick(value) {
      this.inputValue = value;
      this.search();
    }
  },
  created() {
    if (localStorage.getItem("searchWord") !== null) {
      this.historyWord = JSON.parse(localStorage.getItem("searchWord"));
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  background: white;
  height: 100%;
}
</style>