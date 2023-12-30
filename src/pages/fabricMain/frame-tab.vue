<script lang="ts" setup>
// Hooks Imports
import { useStoreFrame } from "@/hooks";

const { state } = useStoreFrame();

const props = withDefaults(defineProps<Props>(), { disabled: false });
void props;

interface Props {
  label: string;
  value: number;
  disabled?: boolean;
}

defineOptions({ inheritAttrs: false });
</script>

<template>
  <li
    :class="[
      state.tab === value ? 'text-black' : 'text-gray-400',
      disabled ? 'opacity-25' : '',
    ]"
  >
    <label
      :class="[
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        'flex',
        'gap-2',
        'text-sm',
        'sm:text-base',
      ]"
    >
      <slot name="icon"></slot>
      <input
        v-model="state.tab"
        :disabled="disabled"
        type="radio"
        :value="value"
        hidden
      />
      <span class="hidden sm:inline">
        {{ label }}
      </span>
    </label>
  </li>
</template>

<style lang="scss" scoped></style>
