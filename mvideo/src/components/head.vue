<template>
    <div class="fsb aic p5-4-3 bgf mb3">
        <router-link to="/" class="backBlock">
            <img class="back" src="../assets/images/icons/back.png" alt="" srcset="">
        </router-link>
        <div class="tit">{{title}}</div>
        <div class="moreBlock">
            <img class="more" src="../assets/images/icons/more.png" alt="" srcset="">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {},
    },
    setup() {
        
        return {
        }
    },
}
</script>



<style>
    @import '../assets/css/layout.css';
    @import '../assets/css/icons.css';
    @import '../assets/css/font.css';

</style>