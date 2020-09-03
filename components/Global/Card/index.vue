<template>
  <div class="tinder-card-item">
      <div class="tinder-card-item__image">          
            <slot name="image"/>
      </div>
      <div class="tinder-card-item__content">
          <div class="tinder-card-item__name">
              <h3><slot name="name"/></h3>
          </div>
          <div class="tinder-card-item__description">
              <p><slot name="description"/></p>
          </div>
      </div>
  </div>
</template>
<style lang="scss">
@import './index';
</style>