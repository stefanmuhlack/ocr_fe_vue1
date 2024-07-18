<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/upload">Upload</router-link></li>
        <li><router-link to="/templates">Templates</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav ul {
  list-style-type: none;
  padding: 0;
}
nav li {
  display: inline;
  margin-right: 10px;
}
nav a {
  text-decoration: none;
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <header>
      <h1>OCR Application</h1>
<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <app-footer/>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  .v-app {
    background: #f5f5f5;
    color: #333;
    font-family: 'Roboto', sans-serif;
  }
</style>
import Modal from './components/Modal.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    }
  }
};
</script>

<style scoped>
#app {
  text-align: center;
  padding: 50px 0;
}
header {
  margin-bottom: 20px;
}
</style>
      isDarkTheme: false,
      showModal: true
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

