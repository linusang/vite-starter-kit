<template>
  <div class="h-screen flex items-center justify-center">
    <div class="text-center">
      <img alt="Vue logo" src="@/assets/logo.png" class="mx-auto" />
      <div class="space-y-5">
        <h1 class="text-3xl font-semibold">
          {{ msg }} <span v-if="isMsgNullOrEmpty">msg is null or empty!</span>
        </h1>
        <p>See <code>README.md</code> for more information.</p>
        <p>
          <a
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            class="text-[#42b983]"
          >
            Vite Docs
          </a>
          |
          <a href="https://v3.vuejs.org/" target="_blank" class="text-[#42b983]"
            >Vue 3 Docs</a
          >
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
          <code class="bg-gray-100 rounded text-[#304455] px-2 py-1"
            >components/HelloWorld.vue</code
          >
          to test hot module replacement.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { isNullOrEmpty } from "@/share/stringHelpers";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const count = ref(0);
    const isMsgNullOrEmpty = computed(() => isNullOrEmpty(props.msg));
    return { count, isMsgNullOrEmpty };
  },
});
</script>
