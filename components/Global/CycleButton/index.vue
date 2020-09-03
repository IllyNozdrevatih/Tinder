<template>
  <div class="cycle-button" @click="$emit('click')">
      <slot name="inner"/>
  </div> 
</template>
<style lang="scss">
@import './index';
</style>