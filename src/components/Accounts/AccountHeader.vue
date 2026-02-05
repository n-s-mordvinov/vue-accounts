<script setup lang="ts">
  import AccountTemplate from './AccountTemplate.vue';
</script>

<template>
  <div class="mb-2">
    <AccountTemplate>
      <template #label>
        <div class="text-sm font-medium">Метка</div>
      </template>
      <template #type>
        <div class="text-sm font-medium">Тип записи</div>
      </template>
      <template #login>
        <div class="text-sm font-medium">Логин</div>
      </template>
      <template #password>
        <div class="text-sm font-medium">Пароль</div>
      </template>
    </AccountTemplate>
  </div>
</template>
