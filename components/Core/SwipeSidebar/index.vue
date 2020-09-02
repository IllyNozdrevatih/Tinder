<template>
  <div class="swipe-sidebar">
    <div class="swipe-sidebar__bg gradient--green-to-blue"></div>
    <div class="swipe-sidebar__wrap">
      <div class="swipe-sidebar__nav">
        <navigation/>
      </div>
      <div class="swipe-sidebar__params">
        <params-list>
          <h2 slot="title" class="text-white">Параметри:</h2>
          <template slot="grid">
            <div class="container-fluid no-gutters p-0">
              <b-row class="justify-content-center">
                <b-col col lg="6">
                  <params-item :count="0">
                    <active slot="icon"/>
                  </params-item>
                </b-col>
                <b-col col lg="6">
                  <params-item :count="0">
                    <inactive slot="icon"/>
                  </params-item>
                </b-col>
                <b-col col lg="6">
                  <params-item :count="0">
                    <heart slot="icon"/>
                  </params-item>
                </b-col>
              </b-row>
            </div>
          </template>
        </params-list>
      </div>
    </div>
    <div class="swipe-sidebar__queue">
      <h2 class="text-white">Осталось в очереди: 14/15</h2>
    </div>
  </div>
</template>

<script>
import Navigation from './ui/Navigation'
import Heart from '~/assets/icons/heart.svg'
import Active from '~/assets/icons/smile/active.svg'
import Inactive from '~/assets/icons/smile/inactive.svg'

export default {
  components: {
    Navigation, Active,
    Inactive, Heart
  }
}
</script>
<style lang="scss">
@import './index';
</style>