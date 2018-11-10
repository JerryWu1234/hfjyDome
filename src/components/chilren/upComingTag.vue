<template>
  <li class="item upComing" @click="showDetail(item.id)">
    <span class="thumb">
      <img class="movieImg" :src="item.images.large">
    </span>
    <div class="intro">
      <h3>
        <span class="">{{item.title}}</span>
        <span class="icon"></span>
      </h3>
      <ul>
        <li class="dt">03月17日</li>
        <li class="dt"><em v-for="it in item.genres">{{it}}/</em></li>
        <li class="dt">美国</li>
        <li class="dt last"><span class="">{{item.collect_count}}人想看</span></li>
        <span class="trailer_icon">预告片</span>
        <li>
          <span class="ticket_btn">
            6家影院有影讯 »
          </span>
        </li>
      </ul>
    </div>
  </li>
</template>
<script>
  export default{
    data () {
      return {

      }
    },
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    methods: {
      showDetail (id) {
        this.$router.push({path: '/moviesDetail', query: {id: id}})
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .item.upComing {
    position: relative;
    float: left;
    padding: 20px 0 20px 120px;
    width: 173px;
    height: 140px;
    border-bottom: 1px dashed #ccc;
    .thumb {
      position: absolute;
      left: 0;
      width: 100px;
      height: 140px;
      overflow: hidden;
      img {
        width: 100%;
        height: 140px;
      }
    }
  }
</style>
