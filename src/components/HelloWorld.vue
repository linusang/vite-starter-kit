<script lang="ts" setup>
  import { computed } from "vue";
  import { $ref } from "vue/macros";

  import { isNullOrEmpty } from "@/share/stringHelpers";
  interface Props {
    msg: string;
  }

  interface Events {
    (e: "count-incremented", value: number): void;
  }

  const props = withDefaults(defineProps<Props>(), {
    msg: "this is the default message",
  });
  const emit = defineEmits<Events>();

  let count = $ref(0);
  const isMsgNullOrEmpty = computed(() => isNullOrEmpty(props.msg));

  function countClicked() {
    count++;
    emit("count-incremented", count);
  }
</script>

<template>
  <div class="flex h-screen items-center justify-center">
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
          class="rounded border border-gray-600 bg-gray-300 p-3 shadow-md"
          data-ui="btn-increment"
          @click="countClicked"
        >
          count is: {{ count }}
        </button>
        <p>
          Edit
          <code class="rounded bg-gray-100 px-2 py-1 text-[#304455]"
            >components/HelloWorld.vue</code
          >
          to test hot module replacement.
        </p>
      </div>
    </div>
  </div>
</template>
