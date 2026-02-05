<script setup lang="ts">
  import { computed } from 'vue';
  import Button from 'primevue/button';

  import AccountHeader from './AccountHeader.vue';
  import AccountForm from './AccountForm.vue';
  import AccountEmpty from './AccountEmpty.vue';

  import { useAccountStore } from '@/stores/useAccountStore';

  const accountStore = useAccountStore();

  const accounts = computed(() => accountStore.accounts);
  const hasAccounts = computed(() => accounts.value.length > 0);

  const addAccount = () => {
    accountStore.addAccount();
  };

  const removeAccount = (id: string) => {
    accountStore.removeAccount(id);
  };
</script>

<template>
  <div class="account-list">
    <div class="mb-6">
      <h1 class="text-2xl font-bold m-0">Управление учетными записями</h1>
      <p class="text-color-secondary m-0 mt-1">
        Добавляйте, редактируйте и удаляйте учетные записи
      </p>
    </div>
    <div class="card mb-6">
      <div class="flex align-items-start">
        <i class="pi pi-info-circle text-primary mr-3 mt-1"></i>
        <div>
          <h4 class="font-medium m-0">Поле "Метка"</h4>
          <p class="text-color-secondary m-0 mt-1">
            Для указания нескольких меток для одной пары логин/пароль используйте заделитель ;
          </p>
        </div>
      </div>
    </div>
    <div v-if="hasAccounts" class="accounts-container">
      <AccountHeader />
      <div v-for="account in accounts" :key="account.id" class="mb-3">
        <AccountForm :account="account" @remove="() => removeAccount(account.id)" />
      </div>
      <div class="mt-2">
        <Button icon="pi pi-plus" label="Добавить учетную запись" @click="addAccount" />
      </div>
    </div>
    <AccountEmpty v-else />
  </div>
</template>
