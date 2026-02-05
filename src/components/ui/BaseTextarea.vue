<script setup lang="ts">
  import { useField } from 'vee-validate';
  import Textarea from 'primevue/textarea';

  interface Props {
    name: string;
    id?: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    maxlength?: number;
    rows?: number;
    autoResize?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    rows: 1,
    autoResize: true,
    required: false,
    id: '',
    label: '',
    placeholder: '',
    maxlength: undefined,
  });

  const { value, errorMessage, handleBlur } = useField<string>(() => props.name);

  const emit = defineEmits<{
    blur: [];
  }>();

  const onBlur = () => {
    handleBlur();
    emit('blur');
  };
</script>

<template>
  <Textarea
    :id="props.id || props.name"
    v-model="value"
    :placeholder="props.placeholder"
    :rows="props.rows"
    :maxlength="props.maxlength"
    :invalid="!!errorMessage"
    fluid
    :auto-resize="props.autoResize"
    @blur="onBlur"
  />
</template>
