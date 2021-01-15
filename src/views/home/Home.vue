<template>
<div>
  <head-home/>
  <swiper-home :swiperList="swiperList"/>
  <icons-home :iconList="iconList"/>
  <recommend-home :recommendList="recommendList"/>
  <weekend-home :weekendList="weekendList"/>

</div>
</template>

<script>
import {mapState} from 'vuex'
import axios from "axios";
import HeadHome from './childComps/HeadHome'
import SwiperHome from "./childComps/SwiperHome";
import IconsHome from "./childComps/IconsHome";
import RecommendHome from "./childComps/RecommendHome";
import WeekendHome from "./childComps/WeekendHome";
export default {
  name: "Home.vue",
  components: {
    WeekendHome,
    IconsHome,
    SwiperHome,
    HeadHome,
    RecommendHome
  },
  data(){
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  mounted() {
    // this.getCityInfo()
    this.getHomeInfo()
  },
  activated() {
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  methods: {
    getHomeInfo(){
      axios.get('/mock/index.json').then(this.getHomeInfoRes)
    },
    getHomeInfoRes(res){
      res = res.data.data
      if(res){
        // console.log(res)
        this.swiperList = res.swiperList
        this.iconList = res.iconList
        this.recommendList = res.recommendList
        this.weekendList = res.weekendList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped>

</style>