<template>
<div>
  <head-city/>
  <search-city :cities="cities"/>
  <list-city :hot="hotCities" :cities="cities" :letter="letter"/>
  <alphabet-city :cities="cities" @change="handleChange"/>
</div>
</template>

<script>
import axios from "axios";
import HeadCity from "./childComps/HeadCity";
import SearchCity from "./childComps/SearchCity";
import ListCity from "./childComps/ListCity";
import AlphabetCity from "./childComps/AlphabetCity";
export default {
  name: "City",
  components: {
    AlphabetCity,
    ListCity,
    SearchCity,
    HeadCity
  },
  data(){
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted() {
    this.getCityInfo()
  },
  methods: {
    getCityInfo(){
      axios.get('/api/city.json').then(this.getCityInfoRes)
    },
    getCityInfoRes(res){
      if(res.data && res.data.ret){
        res = res.data.data
        this.hotCities = res.hotCities
        this.cities = res.cities

      }
    },
    handleChange(letter){
      this.letter = letter
    }
  }
}
</script>

<style scoped>

</style>