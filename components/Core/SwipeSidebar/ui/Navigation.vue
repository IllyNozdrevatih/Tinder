<template>
    <div class="container-fluid no-gutters p-0">
        <b-row>
            <b-col col lg="3">
                <cycle-button>
                    <home slot="inner" />
                </cycle-button>
            </b-col>
            <b-col col lg="3">
                <cycle-button>
                    <reload slot="inner" />
                </cycle-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import CycleButton from '~/components/Global/CycleButton'

import Home from '~/assets/icons/home.svg'
import Reload from '~/assets/icons/reload.svg'

export default {
    components: {
       CycleButton, Home, Reload
    }
}
</script>

<style>

</style>