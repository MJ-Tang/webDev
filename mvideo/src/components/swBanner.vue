<template>
  <swiper
    :loop = "swiperOption.loop"
    :speed = "swiperOption.speed"
    :pagination = "swiperOption.pagination"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="i in list" :key="i">
        <img v-bind:src="i.img" alt="" srcset="" />
    </swiper-slide>
  </swiper>
</template>
<script>
    import {reactive} from "vue"
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import SwiperCore,{Pagination} from "swiper";
    import 'swiper/swiper-bundle.css';
    SwiperCore.use([Pagination])
    export default {
        props: {
            list:{},
        },
        components: {
            Swiper,
            SwiperSlide,
        },
        setup(){
            const swiperOption = reactive({
                loop: true,
                speed:1000,
                pagination:{
                    clickable: true
                }
                
            })
            return{
                swiperOption
            }
        }

  };
</script>

<style>
    .swiper-wrapper{
        width:100%;
        
    }
    .swiper-wrapper img{
        width:100%;
        border-radius: 25px;
        /* height: 700px; */
        background: #909090;
    }
    
    .swiper-pagination-bullet-active{
        background: #1AFFA7;
    }
</style>