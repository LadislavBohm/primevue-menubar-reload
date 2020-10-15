<template>
  <div id="app">
    <div class="app-container">
      <Menubar :model="menuItems" />
    </div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Menubar from "primevue/menubar";

export default defineComponent({
  name: "App",
  components: {
    Menubar,
  },
  setup() {
    return {
      menuItems: [
        {
          to: "/hello",
          label: "hello",
        },
        {
          to: "/another",
          label: "another",
        },
      ],
    };
  },
});
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.app-container {
  text-align: center;
}

body #app .p-button {
  margin-left: 0.2em;
}

form {
  margin-top: 2em;
}
</style>
