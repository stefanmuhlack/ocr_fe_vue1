<template>
  <div id="app">
    <header>
      <h1>OCR Application</h1>
    </header>
    <router-view />
    <modal v-if="isModalVisible" @close="isModalVisible = false" />
  </div>
</template>

<script>
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

