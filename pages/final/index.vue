<template>
    <div class="final-page">
        <div class="final-home-link">                  
            <nuxt-link to="/">
                <cycle-button class="gradient--green-to-blue home-icon-gradient"  @click="refresh">
                    <home slot="inner" />
                </cycle-button>
            </nuxt-link>     
        </div>
        <div class="final-bg-img"></div>
        <div class="container">       
            <div class="final-wrap">
                <div class="final__header">
                    <b-row>
                        <b-col col lg="4">
                            <final-param>
                                <template slot="number">{{noped}}</template>
                                <template slot="name">Препарат 1</template>
                            </final-param>
                        </b-col>
                        <b-col col lg="4">
                            <final-param>
                                <template slot="number">{{liked}}</template>
                                <template slot="name">Препарат 2</template>
                            </final-param>
                        </b-col>
                        <b-col col lg="4">
                            <final-param>
                                <template slot="number">{{supered}}</template>
                                <template slot="name">Препарат 3</template>
                            </final-param>
                        </b-col>
                    </b-row>
                    <div class="final-border"></div>
                    <div class="final__desciption">
                        <h3>Ваш результат: «Что я здесь делаю?»</h3>
                        <p>Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов.</p>
                    </div>
                </div>
                <div class="final__footer">
                    <b-button class="btn--sm btn--grey" @click="goBack">Попробовать еще</b-button>
                </div>
            </div> 
        </div>

    </div>
</template>

<script>
import Home from '~/assets/icons/home.svg'
export default {
    components: {
        Home
    },
    methods: {
        goBack(){
            this.refresh()
            this.$router.push('/main')
        },
        refresh(){
            this.$store.commit('swiper/refresh')
            this.$store.commit('cards/refresh')
        }
    },
    computed: {
        liked(){
            const num = this.$store.getters['swiper/like'] / this.$store.getters['cards/cardsCount'] * 100
            return num.toFixed(1) + '%'   
        },
        noped(){
            const num = this.$store.getters['swiper/nope'] / this.$store.getters['cards/cardsCount'] * 100
            return num.toFixed(1) + '%' 
        },
        supered(){
            const num = this.$store.getters['swiper/super'] / this.$store.getters['cards/cardsCount'] * 100
            return num.toFixed(1) + '%'
        },
    }
}
</script>
<style lang="scss">
@import './index';
</style>