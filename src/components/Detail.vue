<template>
  <div>
    <h1>name: {{ data.name }}</h1>
    <h2>gender: {{data.gender}}</h2>
    <h3>height: {{data.height}}</h3>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "detail",
  data: () => ({
    data: {}
  }),
  mounted() {
    axios.get(`/api/people/${this.$route.params.id}`).then(res => {
      console.log(res)
      this.data = res.data
    })
  },
};
</script>