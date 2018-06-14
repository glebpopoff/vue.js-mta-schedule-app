<template>
  <div class="mta-stations-main">
    <h2>MTA Stations</h2>
    <mta-filter stations="filteredStations" v-model="filter"></mta-filter>
    <div class="row" v-if="filter.length >= 2">
            Found {{ filteredStations.length }} entries.
        </div>
    <hr />
    <div class="container-fluid">
      <div v-for="stations in groupedStations" class="row">
      <div v-for="entry in stations" class="col-lg-4">
        <mta-station :station="entry.station" />
      </div>
      </div>
    </div>    
  </div>
</template>

<script>
import axios from "axios";
import { bus } from '../main';
import { routeDataStorage } from '../main';
import MTAFilter from '@/components/MTAFilter'
import MTAStationDetail from '@/components/MTAStationDetail'

export default {
  name: 'MTAStations',
        data () {
            return {
                filter: "",
                stations: [],
                filteredStations: []
            }
        },
         components: {
          'mta-filter': MTAFilter,
          'mta-station': MTAStationDetail
        },
        computed:{
          groupedStations() {
              this.filteredStations = (this.filter.length >= 2) ? _.filter(this.stations, (v) => {
                  return (v.station.name.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase()) != -1);
              }) : this.stations;
              return  _.chunk(this.filteredStations, 3); //chunk in 3, filtered
              
          }
      },
        mounted() {
          this.getStations();

          bus.$on("stationClicked", (payLoad) => {
              console.log(payLoad);
              this.navigateToDetail(payLoad);
          });
        },
        methods: { 
          /**
           * Get station list from the web service
           */
          getStations() {
            axios({ method: "GET", "url": "https://raw.githubusercontent.com/glebpopoff/angularjs-metro-north-app/master/assets/data/train-stations.json" }).then(result => {
                this.stations = result.data.entity;
            }, error => {
                console.error(error);
            });
          },

          /**
           * Navigate to detail page on image click
           */
          navigateToDetail(station) {

            //show detail component
            this.$router.push({name: 'MTASchedule', params: {id: station.id}});
            //this also works this.$router.push('/url/blah-blah');
            
            //poor man's vuex / data storage
            routeDataStorage['station-' + station.id] = station;
           
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
