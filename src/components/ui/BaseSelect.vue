<script setup lang="ts">
import { useField } from 'vee-validate';
import Select, { type SelectChangeEvent } from 'primevue/select';

interface Option {
  label: string;
  value: string;
}

interface Props {
  name: string;
  id?: string;
  label?: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
}

const props = defineProps<Props>();

const { value, errorMessage, handleChange: veeValidateHandleChange } = useField(() => props.name);

const emit = defineEmits<{
  change: []
}>();

const handleChange = (event: SelectChangeEvent) => {
  veeValidateHandleChange(event.value)
  emit('change')
};
</script>

<template>
  <Select
    :id="props.id || props.name"
    v-model="value"
    :options="props.options"
    optionLabel="label"
    optionValue="value"
    :placeholder="props.placeholder"
    :class="{ 'p-invalid': errorMessage }"
    fluid
    @change="handleChange"
  />
</template>