<template>
  <div class="tinder-card">
      <div class="tinder-card__image"></div>
      <div class="tinder-card__content">
          <div class="tinder-card__name">
              <h3>{{$props.card.name}}</h3>
          </div>
          <div class="tinder-card__description">
              <p>{{$props.card.description}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        card: Object
    }
}
</script>

<style>

</style>