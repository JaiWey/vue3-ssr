<template>
  <div style="display: flex; flex-wrap: wrap">
    <div style="width: 200px; border: 1px solid #aaa;" v-for="(person, i) in people" :key="i" @click="toDetail(person)">
      <h3>{{person.name}}</h3> 
      <h5>{{person.gender}}</h5> 
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { fetchGet } from '../fetch'
import store from '../../ssr/store'
export default {
  name: "Home",
  data: () => ({
    people: []
  }),
  created() {
    if (store.initData) {
      this.people = store.initData
      delete store.initData
    }
  },
  mounted() {
    if (this.people.length == 0) {
      this._.type.asyncFetch().then(res => {
        this.people = res
      })
    }
    //this.initData()
  },
  methods: {
    initData() {
      axios.get('/api/people?page=1').then(res => {
        this.people = res.data.results
      })
    },
    toDetail(p) {
      const found = p.url.match(/https:\/\/swapi.dev\/api\/people\/(\d)*\//)
      this.$router.push(`/detail/${found[1]}`)
    }
  },
  async asyncFetch() {
    const res = await fetchGet('/api/people?page=1')
    return res.data.results
  }
};
</script>