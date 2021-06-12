<template>
  <div class="h-screen flex items-center justify-center">
    <div class="text-center">
      <img alt="Vue logo" src="../assets/logo.png" class="mx-auto" />
      <div class="space-y-5">
        <h1 class="text-3xl font-semibold">{{ msg }}</h1>
        <p>See <code>README.md</code> for more information.</p>
        <p>
          <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
          </a>
          |
          <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
        </p>
        <button
          type="button"
          @click="count++"
          class="border p-3 rounded shadow-md bg-gray-300 border-gray-600"
        >
          count is: {{ count }}
        </button>
        <p>
          Edit
          <code>components/HelloWorld.vue</code> to test hot module replacement.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
