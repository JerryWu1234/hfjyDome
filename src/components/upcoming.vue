<template>
  <div class="grid-950 clearfix">
    <aside class="right-side">
      登录账户:{{login.user}}
    </aside>
    <article class="container">
      <div class="two-list">
        <ul class="clearfix">
          <upComingTag v-for="(item,index) in upcomBody.subjects" :item="item" :key="index"></upComingTag>
        </ul>
        <div class="load-more">
          <div type="text" @click="moredata()">加载更多</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    computed: mapState({
      login: state => state.moving.login,
      upcomBody: state => state.moving.upcomBody,

    }),
    mounted () {
      this.$store.dispatch('getUpcoming')
    },
    methods: {
      moredata () {
        this.$store.commit('ADD_PAGE')
        this.$store.dispatch('getUpcoming')
      }
    },
    components: {
      'upComingTag': resolve => {
        require(['./upComingTag.vue'], resolve)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style rel="stylesheet/less" lang="less">
  .right-side {
    width: 310px;
    height: 50px;
    line-height: 50px;
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
