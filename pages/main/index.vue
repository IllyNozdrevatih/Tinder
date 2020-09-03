<template>
  <div class="container-fluid no-gutters p-0">
        <b-row class="no-gutters">
          <b-col col lg="4">
            <swipe-sidebar/>
          </b-col>
          <b-col col lg="8" class="overflow-hidden">
            <swiper/>
          </b-col>
        </b-row>
  </div>
</template>

<script>
import SwipeSidebar from '~/components/Core/SwipeSidebar'
import Swiper from '~/components/Core/Swiper'

export default {
    components: {
      SwipeSidebar, Swiper
    }
}
</script>

<style>

</style>