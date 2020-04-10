<template>
  <div id="app">
    <Header />
    <b-container class="bv-example-row">
      <!-- <b-row>
        <b-col sm="6" offset="3">
          <BuildingType /> 
        </b-col>
      </b-row>
      -->
      <b-row> 
        <b-col sm="6" offset="3">
          <LoadingType :firstliveload="liveloads"
          /> 
        </b-col>
      </b-row>
    </b-container>


    
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import BuildingType from './components/BuildingType.vue'
import LoadingType from './components/LoadingType.vue'


export default {
  name: 'App',
  components: {
    Header,
    // BuildingType,
    LoadingType
  },
  data() {
    return{
      liveloads: []
    }
  },
  mounted: function() {
    fetch('https://strukanwar.herokuapp.com/asceloading', {
      method: "get"
      })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.liveloads = jsonData.loading;
        //console.log("test", jsonData.loading)
      })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
