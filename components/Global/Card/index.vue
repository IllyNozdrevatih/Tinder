<template>
  <div class="tinder-card">
      <div class="tinder-card__image">          
            <slot name="image"/>
      </div>
      <div class="tinder-card__content">
          <div class="tinder-card__name">
              <h3><slot name="name"/></h3>
          </div>
          <div class="tinder-card__description">
              <p><slot name="description"/></p>
          </div>
      </div>
  </div>
</template>
<style lang="scss">
@import './index';
</style>