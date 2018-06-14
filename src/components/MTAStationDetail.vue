<template>
<div class="panel">
    <b v-on:click="notifyParent(station)">{{ station.name }} </b><br/>
    <img v-bind:src="station.thumbnail" v-on:click="notifyParent(station)" />
</div>
</template>

<script>
import { bus } from '../main';

export default {
  name: 'MTAStations',
        props: ['station'],
        data () {
            return {
                
            }
        },
         components: {
          
        },
        computed:{
          
      },
        mounted() {
          
        },
        methods: { 
          
          /**
           * Tell parent about the click
           */
          notifyParent(station) {
            bus.$emit('stationClicked', station);
            
          }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
