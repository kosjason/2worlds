<template>
  <div class="single-color">
    <div class="color-item" v-for="item in colorList" :key="item.text">
      <ColorInput :text="item.text" :color="item.color" />
    </div>
  </div>
</template>

<script>
import colorConfig from '@/config/colorConfig'
import ColorInput from '@/components/ColorInput'

export default {
  name: 'SingleColor',
  components: {
    ColorInput,
  },
  data() {
    return {
      colorList: colorConfig
    }
  }
}
</script>

<style lang="scss" scoped>
.single-color {
  display: flex;
  flex-wrap: wrap;

  .color-item {
    width: 450px;
    height: 50px;
  }
}
</style>
