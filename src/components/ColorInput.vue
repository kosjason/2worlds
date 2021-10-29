<template>
  <div class="color-input">
    <div class="input__header" :style="{color: color}">{{ text }}</div>
    <input class="input__input" placeholder="請輸入要變色的文字" v-model="inputVale" :maxlength="80-(text.length +5)" />
    <div class="input__clear" @click="inputVale = ''"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
    <div class="input__copy" @click="clickCopy">複製</div>
  </div>
</template>

<script>
import copy from 'copy-to-clipboard'

export default {
  name: 'ColorInput',
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
  data() {
    return {
      inputVale: ''
    }
  },
  methods: {
    changeText() {
      return `<${this.text}>${this.inputVale}</>`
    },
    clickCopy() {
      copy(`<${this.text}>${this.inputVale}</>`)
      alert(`<${this.text}>${this.inputVale}</> \n 複製完成`)
    }
  }
}
</script>

<style lang="scss" scoped>
.color-input {
  padding: 10px;
  display: flex;
  height: 40px;

  .input {
    &__header {
      background-color: #3a7d8e;
      border-radius: 8px 0 0 8px;
      width: 100px;
      text-align: center;
      line-height: 40px;
      font-size: 20px;
      border: 1px solid #000;
      text-shadow: 1px 1px #000;
    }

    &__input {
      width: 250px;
    }

    &__clear {
      background-color: #cbcbcb;
      border: 1px solid #000;
      line-height: 40px;
      width: 50px;
      text-align: center;
      &:hover{
        opacity: 0.6;
      }
    }

    &__copy {
      border-radius: 0 8px  8px 0;
      border: 1px solid #000;
      line-height: 40px;
      width: 80px;
      text-align: center;
      &:hover{
        opacity: 0.6;
      }
    }
  }
}
</style>
