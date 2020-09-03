<template>
  <div class="prams-list">
      <div class="prams-list__title">
          <slot name="title"/>
      </div>
      <div class="prams-list__grid">
          <slot name="grid" />
      </div>
  </div>
</template>
<style lang="scss">
@import './index';
</style>