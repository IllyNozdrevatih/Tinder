<template>
    <div class="final-page">
        <div class="final-home-link">            
            <cycle-button class="gradient--green-to-blue">
                <home slot="inner" />
            </cycle-button>
        </div>
        <div class="final-bg-img"></div>
        <div class="container">       
            <div class="final-wrap">
                <div class="final__header">
                    <b-row>
                        <b-col col lg="4">
                            <final-param>
                                <template slot="number">100%</template>
                                <template slot="name">Препарат 1</template>
                            </final-param>
                        </b-col>
                        <b-col col lg="4">
                            <final-param>
                                <template slot="number">100%</template>
                                <template slot="name">Препарат 1</template>
                            </final-param>
                        </b-col>
                        <b-col col lg="4">
                            <final-param>
                                <template slot="number">100%</template>
                                <template slot="name">Препарат 1</template>
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
                    <b-button class="btn--sm btn--grey">Попробовать еще</b-button>
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
    }
}
</script>
<style lang="scss">
@import './index';
</style>