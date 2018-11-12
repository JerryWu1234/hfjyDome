<template>
  <div class="grid-950 clearfix">
    <nav-top :login="login" @eixtLogin="eixtLogin"></nav-top>
    <article class="container">
      <div class="two-list">
        <ul class="clearfix">
          <upComingTag v-for="(item,index) in upcomBody.subjects" :item="item" :key="index"></upComingTag>
        </ul>
        <div class="load-more" v-if="upcomBody.subjects.length">
          <div type="text" @click="moredata()">加载更多</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  import navTop from './navTop.vue'
  import upComingTag from './chilren/upComingTag.vue'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    computed: mapState({
      login: state => state.moving.login,
      upcomBody: state => state.moving.upcomBody
    }),
    mounted () {
      this.$store.dispatch('getUpcoming')
    },
    methods: {
      moredata () {
        this.$store.commit('ADD_PAGE')
        this.$store.dispatch('getUpcoming')
      },
      eixtLogin () {
        this.$store.commit('EXIT_LOGIN')
        this.$router.push(
          {
            name:'login',
            params:{status: true}
          }
        )
      }
    },
    components: {
      upComingTag,
      navTop
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style rel="stylesheet/less" lang="less">
  .right-side {
    width: 100%;
    height: 50px;
    line-height: 50px;
    .right-side-left{
      float: left;
    }
    .right-side-right{
      float: right;
      cursor: pointer;
      &:hover{
        color: #000;
      }
    }
  }
  .two-list {
    min-height: 500px;
  }
  .tit {
    margin-top: 20px;
    h1 {
      display: inline-block;
      font-size: 20px;
      color: #000;
    }
    .locat {
      position: relative;
      display: inline-block;

    }
  }

  .locat {
    .cities-list {
      position: absolute;
      left: 0;
      top: 18px;
      padding: 10px;
      background: #fff;
      z-index: 999;
      border: 1px solid #ccc;
      span {
        display: block;
      }
    }
  }

  .tab-hd {
    vertical-align: bottom;
    li {
      margin: 0 5px;
      float: left;
    }
    .on {
      background-color: #69c;
      color: #fff;
      padding: 0 10px;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
    }
  }

  .load-more{
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
</style>
