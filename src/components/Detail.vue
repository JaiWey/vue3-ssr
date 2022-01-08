<template>
  <div>
    <div>Detail page</div>
    <h1>name: {{ data.name }}</h1>
    <h2>gender: {{data.gender}}</h2>
    <h3>height: {{data.height}}</h3>
  </div>
</template>
<script>
import store from '../../ssr/store'
import { fetchGet } from '../fetch'
export default {
  name: "detail",
  data: () => ({
    data: {}
  }),
  created() {
    if (store.initData) {
      this.data = store.initData
      delete store.initData
    }
  },
  mounted() {
    if (!this.data.name) {
      this._.type.asyncFetch({params: this.$route.params}).then(res => {
        this.data = res
      })
    }
  },
  async asyncFetch({params}) {
    const res = await fetchGet(`/api/people/${params.id}`)
    return res.data
  }
};
</script>