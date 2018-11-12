<template>
  <div class="login">
    <div class="box">
      <p>手机号:</p>
      <input type="tel" placeholder="请输入手机号" v-model="login.user" name="user">
      <div class="password">
        <p>密码:</p>

      </div>
      <input type="password" placeholder="Password" v-model="login.pass" name="pass">
      <button type="submit" @click="checkLogin">登录</button>
      <p v-show="status">{{text}}</p>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import { mapState } from 'vuex'
  import {checkMethod} from './chilren/commonJs.js'
  export default {
    mixins:[checkMethod],
    name: "Login",
    data() {
      return {
        status: false,
        text: ''
      }
    },
    computed: mapState({
      login: state => state.moving.login
    }),
    methods: {
      checkLogin () {
        this.status = false
        let data = {
          user:this.login.user,
          pass:this.login.pass,
          status:this.status,
          text:this.text
        }
        if(this.verification(data)){
          this.$router.push('/upcoming')
        }
      }

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  h3 {
    margin-top: 100px;
  }
  .box {
    background-color: #ffffff;
    width: 300px;
    height: 250px;
    padding-left: 15px;
    border-radius: 10px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .login {
    justify-content: center;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -125px;
  }
  input {
    width: 260px;
    border-radius: 4px;
    height: 20px;
    padding: 5px;
  }
  .password {
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
  }
  button {
    background-image: linear-gradient(forestgreen, lightgreen);
    width: 275px;
    border-radius: 4px;
    height: 30px;
    margin-top: 20px;
    cursor: pointer;
    border: none;
    &:hover{
      background: linear-gradient(lightgreen ,forestgreen);
    }

  }
</style>
