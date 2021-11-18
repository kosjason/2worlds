<template>
  <div class="main">
    <h1>二之國-非官方--文字變色器</h1>
    <hr>
    <h4>說明:</h4>
    <p>此工具是方便遊戲內部文字變色用。</p>
    <p>分為</p>
    <ul>
      <li><a  href="javascript:void(0)" @click="goAnchor('#single')">#單色-簡易版 (手機用戶建議用此模式)</a></li>
      <li><a href="javascript:void(0)" @click="goAnchor('#multiple')">#多色-複雜版</a></li>
    </ul>

    <hr>
    <SingleColorPage id="single" />
    <hr>
    <MultipleColorPage id="multiple" />
    <hr>
    <Copyright />
  </div>
</template>

<script>
import SingleColorPage from "@/Views/SingleColorPage"
import MultipleColorPage from "@/Views/MultipleColorPage"
import Copyright from "@/Views/Copyright"

export default {
  name: "Main",
  components: {
    SingleColorPage,
    MultipleColorPage,
    Copyright
  },
  methods: {
    goAnchor(selector) {
      document.querySelector(selector).scrollIntoView({
        behavior: "smooth"
      })
    }
  }
}
</script>

<style scoped>
.main {
  justify-content: center;
  margin: 0 auto;
  overflow-x: auto;
  padding: 10px;
}
</style>
