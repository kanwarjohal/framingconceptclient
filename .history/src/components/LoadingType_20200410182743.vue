

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
        <option :value="[l.occupancy, l.use, l.uniformloadpsf]" v-for="l in firstliveload">{{l.occupancy +" "+ l.use +" : "+ l.uniformloadpsf}} psf </option>
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
        <b-button v-on:click="postPost">Run</b-button>
    </div>
    <div>
        <img src="@hollowcoresections.png"/>
    </div>
    <div>
    <b-table striped hover :items="hollowcoreitems" :fields="fields"></b-table>
    </div>
</div>
</template>


<script>
import axios from 'axios'
    export default {
        data(){
                return{selected_loading:"Select loading", 
                selected_building:"Select building", 
                input_span:"5", hollowcoreitems:[],
                fields: [
                    {
                    key: 'depth',
                    label: 'Thickness in.',
                    sortable: true
                    },
                    {
                    key: 'strands13mm',
                    label: 'Number of 1/2" Strands',
                    sortable: true
                    },
                    {
                    key: 'mr',
                    label: 'Moment Resistance kip-ft',
                    sortable: true,
                    },
                    {
                    key: 'mu',
                    label: 'Moment Ultimate kip-ft',
                    sortable: true
                    },
                    {
                    key: 'utilization',
                    label: 'Utilization',
                    sortable: true
                    },
                ],
                }
        },
        props: {
            firstliveload: Array
        },
        methods: {
            postPost: function() {
                axios({
                    method: 'post',
                    url: 'https://strukanwar.herokuapp.com/framingrequest',
                    data: { userinput: this.selected_loading, 
                            span: this.input_span
                    }
                }).then((response) => {
                    console.log(response.data)
                    this.hollowcoreitems = response.data
                })
            }
        }
    }
</script>

//    .then((response) => {
//                 return response.json()
//             })
//             .then((jsonData) => {
//                 this.framingresponse = jsonData.framingresponse;
//             })