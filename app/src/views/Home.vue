<template>
<div>
  <Navbar />
  <div class="container-fluid h-100">
      <div class="row justify-content-center h-100">
        <div class="col-md-10 col-xl-6 chat">
          <div class="card">
            <div class="card-header msg_head">
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="" class="rounded-circle user_img">
                </div>
                <div class="user_info">
                  <span>Qontak Group</span>
                </div>
              </div>
            </div>
            <div class="card-body msg_card_body">
              <Message v-for="(message, index) in getMessages" :key="index" :message="message" />
            </div>
            <div class="card-footer">
              <div class="input-group">
              <input @keyup.enter="saveMessage" v-model="message" class="form-control type_msg" placeholder="Type your message...">
              <div class="input-group-append">
                <button >send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Message from '../components/Message'

export default {
  name: 'Home',
  components: {
    Message,
    Navbar
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    saveMessage () {
      this.$store.dispatch('saveMessage', this.message)
      this.message = ''
      // this.fetchMessage()
    },
    fetchMessage () {
      this.$store.dispatch('fetchMessage')
    }
  },
  created () {
    this.fetchMessage()
  },
  computed: {
    getMessages () {
      return this.$store.state.messages
    }
  }
}
</script>

<style scoped>
body,html{
  height: 100%;
  margin: 0;
  background: #7F7FD5;
  background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);
  background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);
}

.chat{
  margin-top: auto;
  margin-bottom: auto;
}
.card{
  height: 500px;
  border-radius: 15px !important;
  background-color: rgba(0,0,0,0.4) !important;
}

.msg_card_body{
  overflow-y: auto;
}
.card-header{
  border-radius: 15px 15px 0 0 !important;
  border-bottom: 0 !important;
}
.card-footer{
  border-radius: 0 0 15px 15px !important;
  border-top: 0 !important;
}
.container{
  align-content: center;
}

.type_msg{
  background-color: rgba(0,0,0,0.3) !important;
  border:0 !important;
  color:white !important;
  height: 60px !important;
  overflow-y: auto;
}
.type_msg:focus{
  box-shadow:none !important;
  outline:0px !important;
}

.user_img{
  height: 70px;
  width: 70px;
  border:1.5px solid #f5f6fa;

}
.user_img_msg{
  height: 40px;
  width: 40px;
  border:1.5px solid #f5f6fa;

}
.img_cont{
  position: relative;
  height: 70px;
  width: 70px;
}
.img_cont_msg{
  height: 40px;
  width: 40px;
}

.msg_cotainer{
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 25px;
  background-color: #82ccdd;
  padding: 10px;
  position: relative;
}
.msg_cotainer_send{
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  border-radius: 25px;
  background-color: #78e08f;
  padding: 10px;
  position: relative;
}
.msg_time{
  position: absolute;
  left: 0;
  bottom: -15px;
  color: rgba(255,255,255,0.5);
  font-size: 10px;
}
.msg_time_send{
  position: absolute;
  right:0;
  bottom: -15px;
  color: rgba(255,255,255,0.5);
  font-size: 10px;
}
.msg_head{
  position: relative;
}
#action_menu_btn{
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  cursor: pointer;
  font-size: 20px;
}

@media(max-width: 576px){
.contacts_card{
  margin-bottom: 15px !important;
}
}
</style>
