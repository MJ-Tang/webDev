<template>
    <heade :title="title "></heade>
    <div class="dfc mb3">
        <iframe src="http://218.64.14.242:18000/#/players/1/1/1?autoplay=true&token=qfutlYLn&ptz=true" width="540" height="290" allowfullscreen allow="autoplay" ></iframe>
    </div>
    <div class="w85 c0 mb2">
        丽水街风光给人带来无尽的美丽想象，值得全家出游
    </div>
    <div class="w85 df mb4">
        <div class="cf" v-for="i in taglist" :key="i">
            <div class="tag2">{{i}}</div>
        </div>
    </div>
    <div class="w85 mb3 c0">
        发布时间：2021.10.22
    </div>

    <div class="w85 line mb4"></div>

    <div class="w85 mb2">
        初次到杭州，3-5天行程的路线不知道要怎么样安排合理划算？1000多块钱一个人够玩5天吗，求推荐靠谱的路线和向导！
        上个月，我同事去杭州玩了5天，人均花了5000多元，还没玩好，回来跟我说各种被宰被坑…噗！
        这次我刚和姐姐同样去杭州玩了5天，整个行程下来才花了1000左右。住四钻酒店、特色客栈、玩精华景点、吃当地美食、还去了到杭州必玩的千岛湖、苏州、西湖、乌镇、还去看了灵隐寺等等，不仅如此，还额外给我们赠送了城中湖、豪华游艇…..（杭州是个旅游城市，非常火爆！！！所以切记要提前买好机票、预订酒店。飞机可以直飞杭州，朋友们也可以直接买机场高铁的票，都是很方便的！）
    </div>
    <div class="w85">
        <img class="w100 mb3"  src="../assets/images/001.png" alt="" srcset="">
    </div>
</template>

<script>
import heade from '../components/head.vue'
export default {
    name: 'about',
    components: {
        heade,
        // swiper,
    },
    setup(){
        const title = '直播详情'
        const taglist = [
            '官方出品',
            '古村落'
            ]
        return{
            title,
            taglist,
        }
    }
}
</script>
