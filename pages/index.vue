<template>
  <div class="welcome">
    <div class="welcome-bg"></div>
    <div class="welcome-gradient gradient--green-to-blue"></div>
    <div class="welcome-content">
      <div class="container text-white">
        <div class="welcome-cycle gradient--green-to-blue">
          <div class="welcome-cycle__wrap">
            <h3 class="text-white welcome__sub-title">Добро пожаловать в игру</h3>
            <h1 class="text-white welcome__title">Помоги Фармацевту</h1>
            <nuxt-link to="/main" class="welcome__btn btn btn-secondary"
              >Начать</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import './index';
</style>