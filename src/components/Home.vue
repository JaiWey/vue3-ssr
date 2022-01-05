<template>
  <div>
    <div v-for="(person, i) in people" :key="i">
      <h3>{{person.name}}</h3> 
      <h5>{{person.gender}}</h5> 
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "App",
  data: () => ({
    people: []
  }),
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      axios.get('/api/people?page=1').then(res => {
        console.log(res)
        this.people = res.data.results
      })
    },
  }
};
</script>