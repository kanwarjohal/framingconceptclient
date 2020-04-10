

<template>
<div>
    <!-- <div class="mt-3">Building Type:</div>
    <div>
    <b-form-select v-model="selected_building">
        <option value="Select building">Select building type.</option>
        <option :value="l.loading_type" v-for="l in firstliveload" :key="l.loading">{{l.loading_type}}</option>
    </b-form-select>
    </div> -->
    <div class="mt-3">Loading:</div>
    <div>
    <b-form-select v-model="selected_loading">
        <option value="Select loading">Select loading type</option>
        <option :value="l.use, l.uniformloadpsf, " v-for="l in firstliveload">{{l.occupancy +" "+ l.use +" : "+ l.uniformloadpsf}} psf </option>
    </b-form-select>
    </div>
    <div class="mt-3">Span: {{ input_span }} ft.</div>
    <!-- <div id="app">
        <input id="my-field" v-model="input_span">
    </div> -->
    <div>
        <b-input-group prepend="5" append="120">
        <b-form-input type="range" min="5" max="120" v-model="input_span"></b-form-input>
        </b-input-group>
    </div>
    <div class="mt-3">
        <b-button @click="runMethod()">Run</b-button>
    </div>
</div>
</template>

<script>
  export default {
    data(){
        return{selected_loading:"Select loading", selected_building:"Select building", input_span:"5"}
    },
    props: {
        firstliveload: Array
    },
    methods: {
        runMethod(){
            console.log(this.selected_loading)
            // var s = this.selected_loading
            // var s2 = this.selected_building
            // fetch('url', s, s2)
        }
        
    }
  }
</script>