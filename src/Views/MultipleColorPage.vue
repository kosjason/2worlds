<template>
  <div>
    <h2>#多色-複雜版</h2>
    <ChatRoom />
    <ChatRoomInfo />
  </div>
</template>

<script>
import ChatRoom from '@/components/ChatRoom'
import ChatRoomInfo from '@/components/ChatRoomInfo'

export default {
  name: 'MultipleColorPage',
  components: {
    ChatRoom,
    ChatRoomInfo
  }
}
</script>

<style scoped>
</style>
