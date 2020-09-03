<template>
    <div class="container-fluid no-gutters p-0">
        <b-row>
            <b-col col lg="3">
                <cycle-button>
                    <home slot="inner" />
                </cycle-button>
            </b-col>
            <b-col col lg="3">
                <cycle-button  @click="refresh">
                    <reload slot="inner" />
                </cycle-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Home from '~/assets/icons/home.svg'
import Reload from '~/assets/icons/reload.svg'

export default {
    components: {
       Home, Reload
    },
    methods: {
        refresh(){
            this.$store.commit('swiper/refresh')
            this.$store.commit('cards/refresh')
        }
    }
}
</script>