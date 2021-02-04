<template>
  <nav class="navbar navbar-dark bg-dark text-white">
    <div>
      <h5>Qontak</h5>
    </div>
    <div>
      <button @click="logout">logout</button>
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
