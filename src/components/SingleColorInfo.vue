<template>
  <div>
    <h3>#<a href="javascript:" @click="visible = !visible">使用教學</a></h3>
    <transition name="fade">
      <ol v-if="visible">
        <li>輸入文字，並按下複製</li>
        <img src="../assets/image/single/sample1.png" width="300" />
        <li>貼到遊戲裡面即可</li>
        <img src="../assets/image/single/sample2.png" width="300" />
      </ol>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SingleColorInfo',
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
