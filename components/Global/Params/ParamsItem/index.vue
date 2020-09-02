<template>
  <div class="params-item">
      <div class="params-item__icon">
          <slot name="icon" />
      </div>
      <div class="params-item__count">{{$props.count}}</div>
  </div>
</template>

<script>
export default {
    props: {
        count: Number
    }
}
</script>
<style lang="scss">
@import './index';
</style>