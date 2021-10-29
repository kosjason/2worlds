<template>
  <div class="chat-room">
    <div class="chat-room__header">
      <h2>二之國 - 文字變色 產生器(多顏色版本)</h2>
    </div>
    <div class="chat-room__content">
      <div class="chat-room__content-container">
        <div class="content-container--left">
          <ColorBtn v-for="item in colorList" :text="item.text" :color="item.color" :key="item.text" @btnClick="changeTextClick" />
        </div>
        <div class="content-container--right">
          <form name="myForm" class="form">
            <div class="form-title">輸入文字：(目前字數:{{ contentTextOrigin.length }}/80)</div>
            <textarea name="myTxtArea" class="textarea" v-model="contentTextOrigin" rows="10" cols="16" maxlength="80" />
            <div class="form-btn" @click="copyClick">按我複製</div>
          </form>
          <div class="result-title">顯示結果：</div>
          <div class="result" v-html="contentTextResult" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorBtn from '@/components/ColorBtn'
import colorConfig from '@/config/colorConfig'
import copy from 'copy-to-clipboard'

export default {
  name: 'ChatRoom',
  components: {
    ColorBtn
  },
  data() {
    return {
      colorList: colorConfig,
      contentTextOrigin: '',
      colorObject: {}
    }
  },
  computed: {
    contentTextResult() {
      const regex = /<[\w]+>\W+<\/>|<[\w]+>.+<\/>/gm;
      return this.contentTextOrigin.replaceAll(regex, (val) => {
        const _color = val.match(/<[\w]+>/gm)[0].replace('<', '').replace('>', '')
        const _newVal = val.replace(`<${_color}>`, `<span style="color: ${this.colorObject[_color]}">`).replace('</>', '</span>')
        return _newVal.slice(0, 80)
      })
    }
  },
  created() {
    this.generateColorList()
  },
  methods: {
    generateColorList() {
      colorConfig.forEach(val => {
        this.colorObject[val.text] = val.color
      })
    },
    changeTextClick(val) {
      const myTextarea = document.myForm.myTxtArea
      const _start = myTextarea.selectionStart;
      const _end = myTextarea.selectionEnd
      if (_start === _end) return false
      const selectText = this.contentTextOrigin.substring(_start, _end);
      this.contentTextOrigin = this.contentTextOrigin.substring(0, _start) + this.changeText(selectText, val.text) + this.contentTextOrigin.substring(
          _end)
      myTextarea.focus();
    },
    changeText(val, colorText) {
      return `<${colorText}>${val}</>`
    },
    copyClick() {
      copy(this.contentTextOrigin)
      alert('複製完成')
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 0px;
  color: #fff;
  text-align: center;
  line-height: 50px;
}

.chat-room {
  border: 3px solid #d8d0ab;
  width: 450px;
  border-radius: 10px;

  &__header {
    background-color: #3b848b;
    height: 50px;
  }

  &__content {
    background-image: url('https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/139957272_215408196892382_5760857534643167376_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=FgVAjflSZvgAX_3Ny6k&_nc_ht=scontent-tpe1-1.xx&oh=23f43a91722d45364e03f87d267f766f&oe=6125451B');
    background-position: center;
    height: 630px;

    &-container {
      background: rgba(29, 65, 79, 0.8);
      height: 100%;
      display: flex;


    }
  }

  .content-container {
    &--left {
      background-color: #27454f;
      width: 120px;
      padding: 10px 0;
    }

    &--right {
      width: 330px;
    }
  }
}

.form {
  margin: 0 auto;
  margin: 10px;

  &-btn {
    background-color: #fff;
    text-align: center;
    align-content: center;
    border-radius: 10px;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    border: 2px solid #000;
    width: 250px;
    padding: 10px;

    &:hover {
      opacity: 0.8;
    }
  }

  &-title {
    font-size: 20px;
    color: #fff;
    margin: 0 auto;
    margin: 10px;
  }
}

.textarea {
  font-size: 25px;
  opacity: 0.5;
  resize: none;
}

.result {
  font-size: 25px;
  margin: 10px;
  padding: 10px;
  background-color: #3c7d8f;
  height: auto;
  width: 250px;
  border-radius: 20px;
  color: #fff;
  text-shadow: 1px 1px #000;
  word-break: break-all;

  &-title {
    font-size: 20px;
    color: #fff;
    margin: 0 auto;
    margin: 10px;
  }
}
</style>
