<template>
    <heade :title="title "></heade>
    <swBanner :list = 'ilist' class="w95" ></swBanner>
    <div class='search fsb aic mt2'>
        <img class="searchI" src="../assets/images/icons/search.png" alt="" srcset="">
        <input class="input" placeholder="请输入要搜索的内容" type="text">
        <div class="searchB">立即搜索</div>
    </div>

    <div class="c0 mt2 mb18">
        <div class="w85 df aic">
            景点直播推荐
            <div class="tag"></div>
        </div>
    </div>
    <div v-for="i in list" :key="i">
        <router-link to="about" class="ma" >
            <div class="pa mb2">
                <img class="w100 " :src="i.pic" alt="" srcset="">
                <img class="play" :src="i.playI" alt="" srcset="">
                <div class="t cf">{{i.t}}</div>
            </div>
        </router-link>
    </div>

</template>

<script>
// @ is an alias to /src
import swBanner from '../components/swBanner.vue'
import heade from '../components/head.vue'

export default {
    name: 'Home',
    components: {
        heade,
        swBanner,
    },
    setup() {
        const title = '视频框架'
        const list = [
            {
                pic: require('../assets/images/01.png'),
                playI: require('../assets/images/icons/play.png'),
                t: '丽水街风光给人带来无尽的美丽想象，值得全家出游'
            },
            {
                pic: require('../assets/images/02.png'),
                playI: require('../assets/images/icons/play.png'),
                t: '住四钻酒店、特色客栈、玩精华景点、吃当地美食'
            },
            {
                pic: require('../assets/images/03.png'),
                playI: require('../assets/images/icons/play.png'),
                t: '在杭州的旅游途中少走弯路，带你体验不一样的杭州之旅'
            }
        ]
        return{
            title,
            list,
            ilist:[
                    {img:require("../assets/images/1.png")},
                    {img:require("../assets/images/1.png")},
                ]
        }
    }

}
</script>
<style>
@import '../assets/css/layout.css';
@import '../assets/css/font.css'
</style>