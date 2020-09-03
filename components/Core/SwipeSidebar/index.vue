<template>
  <div class="swipe-sidebar">
    <div class="swipe-sidebar__bg gradient--green-to-blue"></div>
    <div class="swipe-sidebar__wrap">
      <div class="swipe-sidebar__nav">
        <navigation/>
      </div>
      <div class="swipe-sidebar__params">
        <params/>
      </div>
    </div>
    <div class="swipe-sidebar__queue">
      <h2 class="text-white">Осталось в очереди: {{$store.getters['cards/cardsLeft']}} / {{$store.getters['cards/cardsCount']}}</h2>
    </div>
  </div>
</template>

<script>
import Navigation from './ui/Navigation'
import Params from './ui/Params'

export default {
  components: {
    Navigation, Params, 
  }
}
</script>
<style lang="scss">
@import './index';
</style>