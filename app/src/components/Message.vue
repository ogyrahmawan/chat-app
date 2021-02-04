<template>
<div>
<div v-if="message.username !== username" class="d-flex justify-content-start mb-4">
  <div class="msg_cotainer">
    <p>{{message.username}}</p>
    {{message.message }}
    <p>{{new Date(message.createdAt.seconds * 1000).toString().split(' ').slice(1,5).join(' ')}}</p>
  </div>
</div>
<div v-if="message.username === username" class="d-flex justify-content-end mb-4">
  <div class="msg_cotainer bg-warning">
    <p>{{message.username}}</p>
    {{message.message }}
    <p>{{new Date(message.createdAt.seconds * 1000).toString().split(' ').slice(1,5).join(' ')}}</p>
  </div>
</div>
</div>
</template>
<script>

export default {
  name: 'Message',
  props: ['message'],
  data () {
    return {
      username: localStorage.username
    }
  },
  methods: {
  },
  created () {
    console.log(this.message)
  }
}
</script>

<style scoped>
.img_cont{
  position: relative;
  height: 70px;
  width: 70px;
}
.img_cont_msg{
  height: 10px;
  width: 10px;
}
.online_icon{
  position: absolute;
  height: 15px;
  width:15px;
  background-color: #4cd137;
  border-radius: 50%;
  bottom: 0.2em;
  right: 0.4em;
  border:1.5px solid white;
}
.offline{
  background-color: #c23616 !important;
}
.user_info{
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15px;
}
.user_info span{
  font-size: 20px;
  color: white;
}
.user_info p{
  font-size: 10px;
  color: rgba(255,255,255,0.6);
}
.video_cam{
  margin-left: 50px;
  margin-top: 5px;
}
.video_cam span{
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
}
.msg_cotainer{
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 25px;
  background-color: #82ccdd;
  padding: 10px;
  position: relative;
  max-width: 50%;
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

@media(max-width: 576px){
.contacts_card{
  margin-bottom: 15px !important;
}
}
</style>
