<template>
<div>
<div v-if="message.username !== username" class="d-flex justify-content-start mb-4">
  <div class="user_img_msg">
    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg">
  </div>
  <div class="msg_cotainer">
  <div class="msg_identity d-flex justify-content-end">
    <h5>{{message.username}}</h5>
    <p>{{new Date(message.createdAt.seconds * 1000).toString().split(' ').slice(1,5).join(' ')}}</p>
  </div>
    <div class="msg">
      {{message.message}}
  </div>
  </div>
</div>
<div v-if="message.username === username" class="d-flex justify-content-end mb-4">
  <div class="msg_cotainer_me">
  <div class="msg_identity d-flex justify-content-end">
    <p>{{new Date(message.createdAt.seconds * 1000).toString().split(' ').slice(1,5).join(' ')}}</p>
  </div>
  <div class="msg">
    {{message.message}}
  </div>
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
  }
}
</script>

<style scoped>

.msg_cotainer{
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 25px;
  background-color: #98ded9;
  padding: 10px;
  position: relative;
  width: max-content;
  max-width: 70%;
  min-height: 25%;
  min-width: 20%;
}
.msg_cotainer h5 {
  color: #f6f6f6;
  font-size: 0.9rem;
  font-weight: bolder;
  margin-right: 10px;
  margin-top: 1px;
}

.msg_cotainer p {
  color: grey;
  font-size: 0.8rem;
}

.msg_cotainer_me{
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 25px;
  background-color: #c7ffd8;
  padding: 10px;
  position: relative;
  width: max-content;
  max-width: 70%;
  min-height: 25%;
  min-width: 20%;
}
.msg_cotainer_me h5 {
  color: rgb(162, 160, 160);
  font-size: 0.9rem;
  font-weight: bolder;
  margin-right: 10px;
  margin-top: 1px;
}

.msg_cotainer_me p {
  color: grey;
  font-size: 0.8rem;
}
.user_img_msg img{
  height: 60px;
  width: 60px;
  border:1.5px solid #f5f6fa;
  border-radius: 100%;

}

</style>
