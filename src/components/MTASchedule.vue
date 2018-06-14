<template>
  <div class="mta-schedule-main">
    <h2>MTA Schedule: {{ stationName }} </h2>
    TODO: display train schedule
    <br/>
    <button v-on:click="goBack">Go Back</button>
  </div>
</template>

<script>
import axios from "axios";
import { bus } from '../main';
import { routeDataStorage } from '../main';
import MTAFilter from '@/components/MTAFilter'

export default {
  name: 'MTASchedule',
        data () {
            return {
                id: 0,
                stationName: ""
            }
        },
         components: {
          
        },
        computed:{
          
      },
        mounted() {
          
        },
        created() {
          this.id = this.$route.params.id;
          var storageKey = 'station-' + this.id;
          if (routeDataStorage[storageKey] != null) {
            var station = routeDataStorage[storageKey];
            this.stationName = station.name;

            this.getStations();
          } else {
            console.warn('Key ' + storageKey + ' does not exist in storage');
            this.stationName = 'n/a';
          }
        },
        beforeDestroy() {
            
        },
        methods: { 
          goBack() {
            this.$router.push({name: 'MTAStations'});
          },
          getStations() {
            //TODO: get train schedule for the selected station
          },
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
