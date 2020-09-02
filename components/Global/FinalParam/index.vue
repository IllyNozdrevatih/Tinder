<template>  
    <div class="final-param">
        <div class="final-param__number">
            <h3><slot name="number"/></h3>
        </div>
        <div class="final-param__name">
            <p><slot name="name"/></p>
        </div>
    </div>
</template>
<style lang="scss">
@import './index';
</style>