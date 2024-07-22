<!-- src/components/Layout.vue -->

<template>
  <div class="layout">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/upload">Upload PDF</router-link>
        <router-link to="/templates">Templates</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2024 OCR System</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Layout'
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header, footer {
  background-color: #f4f4f4;
  padding: 10px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
}

main {
  flex: 1;
}
</style>

