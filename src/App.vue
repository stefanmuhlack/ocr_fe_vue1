<template>
  <div id="app" :class="{ 'dark-theme': isDarkTheme }">
    <header>
      <h1>OCR Application</h1>
      <button @click="toggleTheme">Toggle Theme</button>
    </header>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/upload" class="nav-link">Upload PDF</router-link>
      <router-link to="/templates" class="nav-link">Manage Templates</router-link>
    </nav>
    <router-view/>
    <footer>
      <p>© 2024 OCR App, Inc.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isDarkTheme: false
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
    }
  }
};
</script>

<style scoped>
.dark-theme {
  background-color: #333;
  color: #fff;
}

header, footer {
  background-color: #f2f2f2;
  padding: 10px 20px;
  text-align: center;
}

nav a.nav-link {
  margin: 0 10px;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: background-color 0.3s, border-color 0.3s;
}

nav a.nav-link:hover {
  background-color: #e1e1e1;
  border-color: #ccc;
}
</style>

