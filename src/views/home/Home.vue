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
      weekendList: []
    }
  },
  mounted() {
    // this.getCityInfo()
    this.getHomeInfo()
  },
  methods: {
    // getCityInfo(){
    //   axios.get('/mock/city.json').then(this.getCityInfoRes)
    // },
    // getCityInfoRes(res){
    //   res = res.data.data
    //   if(res){
    //     this.city = res.hotCities
    //   }
    // },
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
  }
}
</script>

<style scoped>

</style>