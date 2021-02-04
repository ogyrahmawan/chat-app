<template>
  <nav class="navbar text-white">
    <div>
      <img src="../assets/logo.png">
    </div>
    <div class="logout">
      <i @click="logout" class="fas fa-sign-out-alt"></i>
      <p class="tooltiptext">Logout</p>
    </div>
</nav>
</template>
<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.navbar {
  background-color: #f6f6f6;
}
.navbar img {
  width:80px;
}

.logout i {
  margin-right: 10px;
  color: #0275d8;
  font-size: 1.2rem;
}

.logout .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  position: absolute;
  right: 20px;
  text-align: center;
  border-radius: 6px;
  z-index: 1;
}
.logout:hover .tooltiptext {
  visibility: visible;
}
</style>
