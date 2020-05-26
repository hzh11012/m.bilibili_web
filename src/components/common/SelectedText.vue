<template>
  <div>
    <div class="selected-box">
      <select class="selected" v-model="selected">
        <option
          :disabled="item.value == '17'"
          v-for="item in options"
          :key="item.value"
          :value="item"
        >{{item.name}}</option>
      </select>
      <van-icon class="icon" name="arrow" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: "1", name: "中国大陆", tel: "+86" },
        { value: "5", name: "中国香港特别行政区", tel: "+852" },
        { value: "2", name: "中国澳门特别行政区", tel: "+853" },
        { value: "3", name: "中国台湾", tel: "+886" },
        { value: "4", name: "美国", tel: "+1" },
        { value: "6", name: "比利时", tel: "+32" },
        { value: "7", name: "澳大利亚", tel: "+61" },
        { value: "8", name: "法国", tel: "+33" },
        { value: "9", name: "加拿大", tel: "+1" },
        { value: "10", name: "日本", tel: "+81" },
        { value: "11", name: "新加坡", tel: "+65" },
        { value: "12", name: "韩国", tel: "+82" },
        { value: "13", name: "马来西亚", tel: "+60" },
        { value: "14", name: "英国", tel: "+44" },
        { value: "15", name: "意大利", tel: "+39" },
        { value: "16", name: "德国", tel: "+49" },
        { value: "18", name: "俄罗斯", tel: "+7" },
        { value: "19", name: "新西兰", tel: "+64" },
        { value: "17", name: "--其他--" },
        { value: "22", name: "阿富汗", tel: "+93" },
        { value: "20", name: "阿尔巴尼亚", tel: "+355" },
        { value: "21", name: "阿尔及利亚", tel: "+213" },
        { value: "31", name: "安道尔", tel: "+376" },
        { value: "32", name: "安哥拉", tel: "+244" },
        { value: "33", name: "安提瓜岛和巴布达", tel: "+1268" },
        { value: "23", name: "阿根廷", tel: "+54" },
        { value: "204", name: "亚美尼亚", tel: "+374" },
        { value: "183", name: "阿森松岛", tel: "+247" },
        { value: "34", name: "奥地利", tel: "+43" },
        { value: "26", name: "阿塞拜疆", tel: "+994" },
        { value: "37", name: "巴哈马群岛", tel: "+1242" },
        { value: "40", name: "巴林", tel: "+973" },
        { value: "131", name: "孟加拉国", tel: "+880" },
        { value: "35", name: "巴巴多斯", tel: "+1246" },
        { value: "43", name: "白俄罗斯", tel: "+375" },
        { value: "52", name: "伯利兹", tel: "+501" },
        { value: "46", name: "贝宁", tel: "+229" },
        { value: "44", name: "百慕大群岛", tel: "+1441" },
        { value: "54", name: "不丹", tel: "+975" },
        { value: "51", name: "玻利维亚", tel: "+591" },
        { value: "49", name: "波黑", tel: "+387" },
        { value: "53", name: "博茨瓦纳", tel: "+267" },
        { value: "42", name: "巴西", tel: "+55" },
        { value: "193", name: "文莱", tel: "+673" },
        { value: "45", name: "保加利亚", tel: "+359" },
        { value: "55", name: "布基纳法索", tel: "+226" },
        { value: "56", name: "布隆迪", tel: "+257" },
        { value: "96", name: "柬埔寨", tel: "+855" },
        { value: "100", name: "喀麦隆", tel: "+237" },
        { value: "72", name: "佛得角", tel: "+238" },
        { value: "102", name: "开曼群岛", tel: "+1345" },
        { value: "68", name: "非洲中部", tel: "+236" },
        { value: "214", name: "乍得", tel: "+235" },
        { value: "216", name: "智利", tel: "+56" },
        { value: "77", name: "哥伦比亚", tel: "+57" },
        { value: "103", name: "科摩罗", tel: "+269" },
        { value: "75", name: "刚果", tel: "+242" },
        { value: "76", name: "刚果(金)", tel: "+243" },
        { value: "107", name: "库克岛", tel: "+682" },
        { value: "78", name: "哥斯达黎加", tel: "+506" },
        { value: "105", name: "克罗地亚", tel: "+385" },
        { value: "81", name: "古巴", tel: "+53" },
        { value: "162", name: "塞浦路斯", tel: "+357" },
        { value: "97", name: "捷克", tel: "+420" },
        { value: "58", name: "丹麦", tel: "+45" },
        { value: "59", name: "迪戈加西亚岛", tel: "+246" },
        { value: "90", name: "吉布提", tel: "+253" },
        { value: "61", name: "多米尼加", tel: "+1767" },
        { value: "62", name: "多米尼加代表", tel: "+1809" },
        { value: "63", name: "厄瓜多尔", tel: "+593" },
        { value: "27", name: "埃及", tel: "+20" },
        { value: "157", name: "萨尔瓦多", tel: "+503" },
        { value: "57", name: "赤道几内亚", tel: "+240" },
        { value: "64", name: "厄立特里亚", tel: "+291" },
        { value: "30", name: "爱沙尼亚", tel: "+372" },
        { value: "28", name: "埃塞俄比亚", tel: "+251" },
        { value: "73", name: "福克兰岛", tel: "+500" },
        { value: "65", name: "法罗岛", tel: "+298" },
        { value: "70", name: "斐济", tel: "+679" },
        { value: "71", name: "芬兰", tel: "+358" },
        { value: "67", name: "法属圭亚那", tel: "+594" },
        { value: "66", name: "法属波利尼西亚", tel: "+689" },
        { value: "95", name: "加蓬", tel: "+241" },
        { value: "74", name: "冈比亚", tel: "+220" },
        { value: "154", name: "格鲁吉亚", tel: "+995" },
        { value: "94", name: "加纳", tel: "+223" },
        { value: "215", name: "直布罗陀", tel: "+350" },
        { value: "199", name: "希腊", tel: "+30" },
        { value: "80", name: "格陵兰岛", tel: "+299" },
        { value: "79", name: "格林纳达", tel: "+1473" },
        { value: "82", name: "瓜德罗普岛", tel: "+590" },
        { value: "83", name: "关岛", tel: "+1671" },
        { value: "92", name: "几内亚", tel: "+224" },
        { value: "93", name: "几内亚比绍", tel: "+245" },
        { value: "84", name: "海地", tel: "+509" },
        { value: "87", name: "洪都拉斯", tel: "+504" },
        { value: "201", name: "匈牙利", tel: "+36" },
        { value: "47", name: "冰岛", tel: "+354" },
        { value: "209", name: "印度", tel: "+91" },
        { value: "210", name: "印尼", tel: "+62" },
        { value: "207", name: "伊朗", tel: "+98" },
        { value: "206", name: "伊拉克", tel: "+964" },
        { value: "29", name: "爱尔兰", tel: "+353" },
        { value: "208", name: "以色列", tel: "+972" },
        { value: "200", name: "科特迪瓦", tel: "+225" },
        { value: "203", name: "牙买加", tel: "+1876" },
        { value: "211", name: "约旦", tel: "+962" },
        { value: "106", name: "肯尼亚", tel: "+254" },
        { value: "89", name: "基里巴斯", tel: "+686" },
        { value: "85", name: "朝鲜", tel: "+850" },
        { value: "104", name: "科威特", tel: "+965" },
        { value: "91", name: "吉尔吉斯斯坦", tel: "+996" },
        { value: "110", name: "老挝", tel: "+856" },
        { value: "108", name: "拉脱维亚", tel: "+371" },
        { value: "111", name: "黎巴嫩", tel: "+961" },
        { value: "109", name: "莱索托", tel: "+266" },
        { value: "113", name: "利比里亚", tel: "+231" },
        { value: "114", name: "利比亚", tel: "+218" },
        { value: "112", name: "立陶宛", tel: "+370" },
        { value: "115", name: "卢森堡", tel: "+352" },
        { value: "124", name: "马其顿", tel: "+389" },
        { value: "118", name: "马达加斯加", tel: "+261" },
        { value: "121", name: "马拉维", tel: "+265" },
        { value: "119", name: "马尔代夫", tel: "+960" },
        { value: "122", name: "马里", tel: "+223" },
        { value: "120", name: "马耳他", tel: "+356" },
        { value: "123", name: "马里亚纳岛", tel: "+1670" },
        { value: "126", name: "马歇尔岛", tel: "+692" },
        { value: "125", name: "马提尼克岛", tel: "+596" },
        { value: "128", name: "毛里塔尼亚", tel: "+222" },
        { value: "127", name: "毛里求斯", tel: "+230" },
        { value: "139", name: "墨西哥", tel: "+52" },
        { value: "133", name: "密克罗尼西亚", tel: "+691" },
        { value: "135", name: "摩尔多瓦", tel: "+373" },
        { value: "137", name: "摩纳哥", tel: "+377" },
        { value: "129", name: "蒙古", tel: "+976" },
        { value: "130", name: "蒙特塞拉特岛", tel: "+1664" },
        { value: "136", name: "摩洛哥", tel: "+212" },
        { value: "138", name: "莫桑比克", tel: "+258" },
        { value: "134", name: "缅甸", tel: "+95" },
        { value: "140", name: "纳米比亚", tel: "+264" },
        { value: "143", name: "瑙鲁", tel: "+674" },
        { value: "144", name: "尼泊尔", tel: "+977" },
        { value: "86", name: "荷兰", tel: "+31" },
        { value: "145", name: "尼加拉瓜", tel: "+505" },
        { value: "146", name: "尼日尔", tel: "+227" },
        { value: "147", name: "尼日利亚", tel: "+234" },
        { value: "148", name: "纽埃岛", tel: "+683" },
        { value: "150", name: "诺福克岛", tel: "+672" },
        { value: "149", name: "挪威", tel: "+47" },
        { value: "25", name: "阿曼", tel: "+968" },
        { value: "38", name: "巴基斯坦", tel: "+92" },
        { value: "151", name: "帕劳", tel: "+680" },
        { value: "41", name: "巴拿马", tel: "+507" },
        { value: "36", name: "巴布亚新几内亚", tel: "+675" },
        { value: "39", name: "巴拉圭", tel: "+595" },
        { value: "132", name: "秘鲁", tel: "+51" },
        { value: "69", name: "菲律宾", tel: "+63" },
        { value: "50", name: "波兰", tel: "+48" },
        { value: "152", name: "葡萄牙", tel: "+351" },
        { value: "48", name: "波多黎各", tel: "+1787" },
        { value: "101", name: "卡塔尔", tel: "+974" },
        { value: "99", name: "聚会岛", tel: "+262" },
        { value: "117", name: "罗马尼亚", tel: "+40" },
        { value: "116", name: "卢旺达", tel: "+250" },
        { value: "159", name: "萨摩亚，东部", tel: "+684" },
        { value: "158", name: "萨摩亚，西部", tel: "+685" },
        { value: "168", name: "圣马力诺", tel: "+378" },
        { value: "166", name: "圣多美和普林西比", tel: "+239" },
        { value: "165", name: "沙特阿拉伯", tel: "+966" },
        { value: "161", name: "塞内加尔", tel: "+221" },
        { value: "163", name: "塞舌尔共和国", tel: "+248" },
        { value: "160", name: "塞拉利昂", tel: "+232" },
        { value: "171", name: "斯洛伐克", tel: "+421" },
        { value: "172", name: "斯洛文尼亚", tel: "+386" },
        { value: "176", name: "所罗门群岛", tel: "+677" },
        { value: "177", name: "索马里", tel: "+252" },
        { value: "141", name: "南非", tel: "+27" },
        { value: "198", name: "西班牙", tel: "+34" },
        { value: "170", name: "斯里兰卡", tel: "+94" },
        { value: "167", name: "圣卢西亚", tel: "+1784" },
        { value: "169", name: "圣皮埃尔和密克隆群岛", tel: "+508" },
        { value: "174", name: "苏丹", tel: "+249" },
        { value: "175", name: "苏里南", tel: "+597" },
        { value: "173", name: "斯威士兰", tel: "+268" },
        { value: "155", name: "瑞典", tel: "+46" },
        { value: "156", name: "瑞士", tel: "+41" },
        { value: "202", name: "叙利亚", tel: "+963" },
        { value: "179", name: "坦桑尼亚", tel: "+255" },
        { value: "178", name: "泰国", tel: "+66" },
        { value: "60", name: "多哥", tel: "+228" },
        { value: "188", name: "托克劳岛", tel: "+690" },
        { value: "180", name: "汤加", tel: "+676" },
        { value: "182", name: "特立尼达和多巴哥", tel: "+1868" },
        { value: "184", name: "突尼斯", tel: "+216" },
        { value: "186", name: "土耳其", tel: "+90" },
        { value: "187", name: "土库曼斯坦", tel: "+993" },
        { value: "181", name: "特克斯和凯科斯", tel: "+1649" },
        { value: "185", name: "图瓦卢", tel: "+688" },
        { value: "194", name: "乌干达", tel: "+256" },
        { value: "195", name: "乌克兰", tel: "+380" },
        { value: "24", name: "阿联酋", tel: "+971" },
        { value: "196", name: "乌拉圭", tel: "+598" },
        { value: "197", name: "乌兹别克斯坦", tel: "+998" },
        { value: "189", name: "瓦努阿图", tel: "+678" },
        { value: "192", name: "委内瑞拉", tel: "+58" },
        { value: "212", name: "越南", tel: "+84" },
        { value: "191", name: "维珍群岛(英属)", tel: "+1284" },
        { value: "190", name: "维珍群岛(美属)", tel: "+1340" },
        { value: "88", name: "维克岛", tel: "+1808" },
        { value: "153", name: "瓦利斯群岛和富图纳群岛", tel: "+1681" },
        { value: "205", name: "也门", tel: "+967" },
        { value: "142", name: "塞尔维亚", tel: "+381" },
        { value: "213", name: "赞比亚", tel: "+260" },
        { value: "164", name: "桑给巴尔岛", tel: "+259" },
        { value: "98", name: "津巴布韦", tel: "+263" }
      ],
      selected: { value: "1", name: "中国大陆", tel: "+86" }
    };
  },
  methods: {
    changeTel() {
      this.$emit("tel", this.selected);
    }
  },
  watch: {
    selected() {
      this.changeTel();
    }
  }
};
</script>
<style lang="less" scoped>
.selected-box {
  width: 100%;
  background: white;
  border-top: 1px solid rgb(231, 231, 231);
  border-bottom: 1px solid rgb(231, 231, 231);
  position: relative;
  .selected {
    height: 11.731vw;
    line-height: 11.731vw;
    border: none;
    width: 100%;
    outline: none;
    font-family: PingFangHK-Regular;
    padding: 0 3.2vw;
    font-size: 3.733vw;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  .icon {
    position: absolute;
    right: 3.2vw;
    font-size: 4.267vw;
    top: 3.672vw;
  }
}
</style>