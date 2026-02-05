<script setup lang="ts">
  import { useField } from 'vee-validate';
  import InputText from 'primevue/inputtext';
  import Password from 'primevue/password';

  interface Props {
    name: string;
    label?: string;
    type?: 'text' | 'password';
    placeholder?: string;
    required?: boolean;
    maxlength?: number;
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    required: false,
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
  <Password
    v-if="props.type === 'password'"
    :id="props.name"
    v-model="value"
    :type="props.type"
    :placeholder="props.placeholder"
    :maxlength="props.maxlength"
    :invalid="!!errorMessage"
    fluid
    :feedback="false"
    toggle-mask
    @blur="onBlur"
  />
  <InputText
    v-else
    :id="props.name"
    v-model="value"
    :type="props.type"
    :placeholder="props.placeholder"
    :maxlength="props.maxlength"
    :invalid="!!errorMessage"
    :class="{ 'p-invalid': errorMessage }"
    fluid
    @blur="onBlur"
  />
</template>
