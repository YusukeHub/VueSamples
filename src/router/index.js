import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueTable2Sample from '@/components/VueTable2Sample'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/VueTable2Sample', name: 'VueTable2Sample', component: VueTable2Sample }
  ]
})
