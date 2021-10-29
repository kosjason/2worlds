<template>
  <div>
    <h2>#單色-簡易版</h2>
    <SingleColor />
    <SingleColorInfo />
  </div>
</template>

<script>
import SingleColor from '@/components/SingleColor'
import SingleColorInfo from '@/components/SingleColorInfo'

export default {
  name: 'SingleColorPage',
  components: {
    SingleColor,
    SingleColorInfo
  }
}
</script>

<style lang="scss" scoped>

</style>
