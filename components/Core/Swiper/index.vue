<template>
    <no-ssr>
        <div class="vue-tinder-wrap" v-if="$store.getters['cards/cardsLeft']">
          <vue-tinder ref="tinder" :max="1" key-name="_id" :queue.sync="queue" :offset-y="10" @submit="onSubmit">
            <template slot-scope="scope">
                <card>                    
                  <img :src="`${$axios.defaults.baseURL}${scope.data.image}`" slot="image">
                  <template slot="name">{{ scope.data.name }}</template>
                  <template slot="description">{{scope.data.description}}</template>
                </card>
            </template>
            <div slot="like" class="like-pointer">
              <swipe class="swipe-bnt--yellow">
                <template slot="text">Препарат 3</template>
              </swipe>
            </div>
            <div slot="nope" class="nope-pointer">
              <swipe class="swipe-bnt--pure">
                <template slot="text">Препарат 1</template>
              </swipe>
            </div>
            <div slot="super" class="super-pointer">
              <swipe class="swipe-bnt--blue">
                <template slot="text">Препарат 2</template>
              </swipe>
            </div>
          </vue-tinder>
          <div class="swiper-buttons">
            <b-button @click="nope" class="button--purple">Препарат 1</b-button>
            <b-button @click="superLike" class="button--blue">Препарат 2</b-button>
            <b-button @click="like" class="button--yellow">Препарат 3</b-button>
          </div>
        </div>
        <div  v-else class="h-100 w-100 d-flex align-items-center justify-content-center">
          <h1>No card items</h1>
        </div>
    </no-ssr>
</template>


<script>
import VueTinder from "vue-tinder";

export default {
  async mounted(){    
    this.$store.commit('swiper/refresh')
    this.$store.commit('cards/refresh')
    if(!this.$store.getters['cards/cards']){
      const res = await this.$store.dispatch('cards/fetch')
      if(res) this.mock(this.$store.getters['cards/cardsCount'], false)
    }
  },
  name: "App",
  components: { VueTinder },
  data: () => ({
    queue: [],
  }),
  watch: {
    refreshed() {
      this.mock(this.$store.getters['cards/cardsCount'], true)      
    }
  },
  methods: {
    like() { 
      // Swipe right
      this.$refs['tinder'].decide('like')
    },
    nope() { 
      // Swipe left
      this.$refs['tinder'].decide('nope')
    },
    superLike() { 
      // Swipe up
      this.$refs['tinder'].decide('super')
    },
    mock(count = this.$store.getters['cards/cardsCount'], refreshed) {
      if(this.$store.getters['cards/cardsAvailable']){
        const list = this.$store.getters['cards/cardsAvailable'].slice(this.offset, count)
        this.offset += count
        if(refreshed) this.queue = list
        else this.queue = this.queue.concat(list)
        
      }
    },
    onSubmit(choice) {
      if(choice){
        let type = choice.type
        if(choice.type === 'super') type = 'like'
        else if(choice.type === 'like') type = 'super'
        
        this.$store.commit('swiper/addParam', type)
        this.$store.commit('cards/cardsPop')
      }
      if (!this.$store.getters['cards/cardsLeft']) {
        this.$nuxt.$loading.start()
        setTimeout(() => {
          this.$nuxt.$loading.finish()
          this.$router.push('/final')
        }, 1000)        
      }
    }
  },
  computed: {
    refreshed() {
      return this.$store.getters['cards/refreshed']
    }
  }
};
</script>
<style lang="scss">
@import './index';
</style>