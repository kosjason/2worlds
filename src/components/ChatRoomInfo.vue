<template>
  <div>
    <h3>#<a href="javascript:" @click="visible = !visible">使用教學</a></h3>
    <transition name="fade">
      <ol v-if="visible">
        <li>【輸入文字】內打上要輸入的文字。</li>
        <img src="@/assets/image/chat-room/sample1.png" width="300" />
        <li>選取要改變顏色的字</li>
        <img src="@/assets/image/chat-room/sample2.png" width="300" />
        <li>按下左邊喜歡的顏色按鈕</li>
        <img src="@/assets/image/chat-room/sample3.png" width="300" />
        <li>全部完成後，按下【按我複製】就完成啦</li>
        <img src="@/assets/image/chat-room/sample4.png" width="300" />
        <li>再來就貼到遊戲裡面</li>
        <img src="@/assets/image/chat-room/sample5.png" width="300" />
      </ol>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ChatRoomInfo',
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

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
