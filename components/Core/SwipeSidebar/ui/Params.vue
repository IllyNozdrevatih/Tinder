<template>
  <params-list>
    <h2 slot="title" class="text-white">Параметри:</h2>
        <template slot="grid">
        <div class="container-fluid no-gutters p-0">
            <b-row class="justify-content-center">
                <b-col col xl="6" lg="12" sm="12">
                    <params-item :count="$store.getters['swiper/like']">
                        <active slot="icon"/>
                    </params-item>
                </b-col>
                <b-col col xl="6" lg="12" sm="12" >
                    <params-item :count="$store.getters['swiper/nope']">
                        <inactive slot="icon"/>
                    </params-item>
                </b-col>
                <b-col col xl="6" lg="12" sm="12">
                    <params-item :count="$store.getters['swiper/super']">
                        <heart slot="icon"/>
                    </params-item>
                </b-col>
            </b-row>
        </div>
        </template>
    </params-list>
</template>
<script>
import Heart from '~/assets/icons/heart.svg'
import Active from '~/assets/icons/smile/active.svg'
import Inactive from '~/assets/icons/smile/inactive.svg'

export default {
    components: {
        Active, Inactive, Heart
    }
}
</script>