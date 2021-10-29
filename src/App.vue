<template>
  <div id="app">
    <div class="main">
      <Main />
    </div>
  </div>
</template>

<script>
import Main from '@/Views/Main'
import device from '@/utils/device'

export default {
  name: 'App',
  components: { Main },
  methods: {
    device() {
      return device
    }
  }
}
</script>
<style>
body {
  background-color: #e0e0e0;
}
</style>

<style lang="css" scoped>
.main {
  width: 450px;
  background-color: #fff;
  margin: 0 auto;
}
</style>
