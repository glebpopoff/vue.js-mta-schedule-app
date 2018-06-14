import Vue from 'vue'
import Router from 'vue-router'
import MTAStations from '@/components/MTAStationsMain'
import MTASchedule from '@/components/MTASchedule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MTAStations',
      component: MTAStations
    },
    {
      path: '/schedule/:id',
      name: 'MTASchedule',
      component: MTASchedule
    }
  ]
})
