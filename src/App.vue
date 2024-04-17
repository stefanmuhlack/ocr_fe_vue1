<template>
  <div id="app">
    <header>
      <h1>OCR Application</h1>
    </header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/upload">Upload PDF</router-link>
      <router-link to="/templates">Manage Templates</router-link>
    </nav>
    <router-view/>
    <footer>
      <p>© 2024 OCR App, Inc.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header, footer {
  background-color: #f2f2f2;
  padding: 10px 20px;
  text-align: center;
}

nav a {
  margin: 0 10px;
}
</style>

  },
};
</script>
