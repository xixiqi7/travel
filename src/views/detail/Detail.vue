<template>
<div>
  <detail-banner :bannerImg="bannerImg"
                 :sightName="sightName"
                 :gallaryImgs="gallaryImgs"/>
  <detail-header/>
  <div>
    <detail-list class="content" :list="categoryList"/>
  </div>
</div>
</template>

<script>
import axios from "axios";
import DetailBanner from "./childComps/DetailBanner";
import DetailList from "./childComps/DetailList";
import DetailHeader from "./childComps/DetailHeader";
export default {
  name: "Detail",
  components: {
    DetailHeader,
    DetailList,
    DetailBanner
  },
  data() {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: ''
    }
  },
  mounted() {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo(){
      axios.get('/mock/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoRes)
    },
    getDetailInfoRes(res){
      res = res.data.data
      this.bannerImg = res.bannerImg
      this.categoryList = res.categoryList
      this.gallaryImgs = res.gallaryImgs
      this.sightName = res.sightName
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>