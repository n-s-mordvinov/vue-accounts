<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useForm } from 'vee-validate';
  import Button from 'primevue/button';

  import BaseInput from '@/components/ui/BaseInput.vue';
  import BaseSelect from '@/components/ui/BaseSelect.vue';
  import BaseTextarea from '@/components/ui/BaseTextarea.vue';
  import AccountTemplate from './AccountTemplate.vue';

  import { useAccountStore } from '@/stores/useAccountStore';

  import type { Account, AccountFormData, AccountType } from '@/types/account';
  import { parseLabels, formatLabels } from '@/utils/labels';
  import { createAccountSchema } from '@/schemas/account';
  import { ACCOUNT_TYPES } from '@/constants/account';

  interface Props {
    account: Account;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<{
    remove: [];
  }>();

  const accountStore = useAccountStore();

  const initialValues = computed<AccountFormData>(() => ({
    id: props.account.id,
    labelsInput: formatLabels(props.account.labels),
    type: props.account.type,
    login: props.account.login,
    password: props.account.password,
  }));
  const currentType = ref<AccountType>(props.account.type);

  const validationSchema = computed(() => createAccountSchema());

  const { handleSubmit, values, setFieldValue } = useForm<AccountFormData>({
    validationSchema: validationSchema,
    initialValues: initialValues.value,
  });

  const handleFieldChange = () => {
    if (values.type === 'LDAP') {
      setFieldValue('password', null);
    }
    currentType.value = values.type;
    onSubmit();
  };

  const updateAccount = (formValues?: AccountFormData) => {
    const dataToSave = formValues ?? values;

    accountStore.updateAccount({
      id: dataToSave.id,
      labels: parseLabels(dataToSave.labelsInput || ''),
      type: dataToSave.type,
      login: dataToSave.login,
      password: dataToSave.type === 'LDAP' ? null : dataToSave.password,
    });
  };

  const isLDAP = computed(() => currentType.value === 'LDAP');

  const onSubmit = handleSubmit((formValues) => {
    updateAccount(formValues);
  });
</script>

<template>
  <AccountTemplate>
    <template #label>
      <BaseTextarea
        name="labelsInput"
        :id="values.id + 'labelsInput'"
        label="Метка"
        placeholder="admin; server1; production"
        :maxlength="50"
        auto-resize
        @blur="onSubmit"
      />
    </template>
    <template #type>
      <BaseSelect
        name="type"
        :id="values.id + 'type'"
        label="Тип записи"
        :options="ACCOUNT_TYPES"
        :required="true"
        placeholder="Выберите тип"
        @change="handleFieldChange"
      />
    </template>
    <template #login>
      <BaseInput
        name="login"
        :id="values.id + 'login'"
        label="Логин"
        :required="true"
        :maxlength="100"
        placeholder="Введите логин"
        @blur="onSubmit"
      />
    </template>
    <template #password v-if="!isLDAP">
      <BaseInput
        name="password"
        :id="values.id + 'password'"
        label="Пароль"
        type="password"
        :required="true"
        :maxlength="100"
        placeholder="Введите пароль"
        @blur="onSubmit"
      />
    </template>
    <template #actions>
      <Button
        icon="pi pi-trash"
        severity="danger"
        text
        rounded
        class="remove"
        @click="emit('remove')"
      />
    </template>
  </AccountTemplate>
</template>

<style scoped>
  .remove {
    margin-top: -3px;
  }
</style>
