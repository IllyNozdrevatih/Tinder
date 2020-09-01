<template>
  <div class="swipe-sidebar gradient--green-to-blue">
    <div class="swipe-sidebar__wrap">
      <div class="swipe-sidebar__nav">
        <navigation/>
      </div>
      <div class="swipe-sidebar__params"></div>
      <div class="swipe-sidebar__queue"></div>
    </div>
  </div>
</template>

<script>
import Navigation from './ui/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>
<style lang="scss">
@import './index';
</style>