<script lang="ts" setup>
import { computed, ref } from "vue";

import { isNullOrEmpty } from "@/share/stringHelpers";
import SkillIconsViteLight from "~icons/skill-icons/vite-light";
import SkillIconsVuejsLight from "~icons/skill-icons/vuejs-light";

interface Props {
  msg?: string;
}

interface Slots {
  default: [{ count: number }];
}

const { msg = "this is the default message" } = defineProps<Props>();

const emit = defineEmits<{
  "count-incremented": [number];
}>();
defineSlots<Slots>();

const count = ref(0);
const isMsgNullOrEmpty = computed(() => isNullOrEmpty(msg));

function countClicked() {
  count.value++;
  emit("count-incremented", count.value);
}
</script>

<template>
  <div class="flex h-screen items-center justify-center @container">
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
            Vite Docs <SkillIconsViteLight class="inline-block" />
          </a>
          |
          <a href="https://v3.vuejs.org/" target="_blank" class="text-[#42b983]"
            >Vue 3 Docs <SkillIconsVuejsLight class="inline-block"
          /></a>
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
        <slot :count="count" />

        <div class="bg-green-300 @lg:bg-white">
          Container Query: (reduce viewport width &lt;512px to turn green)
        </div>
      </div>
    </div>
  </div>
</template>
