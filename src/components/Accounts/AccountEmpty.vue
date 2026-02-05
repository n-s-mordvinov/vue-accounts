<script setup lang="ts">
  import Button from 'primevue/button';

  import { useAccountStore } from '@/stores/useAccountStore';

  const accountStore = useAccountStore();

  const addAccount = () => {
    accountStore.addAccount();
  };
</script>

<template>
  <div class="empty-state card p-8 text-center">
    <i class="pi pi-user text-6xl text-color-secondary mb-4"></i>
    <h3 class="text-xl font-medium mb-2">Нет учетных записей</h3>
    <p class="text-color-secondary mb-4">
      Нажмите кнопку "Добавить учетную запись", чтобы создать первую запись
    </p>
    <Button icon="pi pi-plus" label="Добавить первую учетную запись" @click="addAccount" />
  </div>
</template>

<style scoped>
  .empty-state {
    border: 2px dashed #e5e7eb;
    background: #f9fafb;
  }
</style>
