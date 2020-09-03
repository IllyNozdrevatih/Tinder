<template>
  <div class="container-fluid no-gutters p-0">
    <b-row class="no-gutters h-100vh">
      <b-col col lg="4" md="4" sm="12">
        <swipe-sidebar/>
      </b-col>
      <b-col col lg="8" md="8" sm="12" class="overflow-hidden">
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