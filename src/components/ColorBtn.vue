<template>
  <button class="color-btn" :style="{color: color }" @click="btnClick(text, color)">{{ text }}</button>
</template>

<script>
export default {
  name: 'ColorBtn',
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    color: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    btnClick(text, color) {
      this.$emit('btnClick', { color: color, text: text })
    }
  }
}
</script>

<style lang="scss" scoped>
.color-btn {
  background-color: #3a7d8e;
  font-size: x-large;
  text-shadow: 1px 1px #000;
  border-radius: 10px;
  margin: 5px;
  width: 110px;

  &:hover {
    opacity: 0.3;
  }
}
</style>
