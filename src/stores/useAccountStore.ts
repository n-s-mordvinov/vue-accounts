import { ref } from 'vue';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

import type { Account } from '@/types/account';

export const useAccountStore = defineStore('accounts', () => {
  const accounts = ref<Account[]>([]);

  const createEmptyAccount = (): Account => ({
    id: uuidv4(),
    labels: [],
    type: 'LOCAL',
    login: '',
    password: '',
  });

  const addAccount = () => {
    accounts.value.push(createEmptyAccount())
  };

  const removeAccount = (id: Account['id']) => {
    accounts.value = accounts.value.filter(account => account.id !== id)
  };

  const updateAccount = (updateAccount: Account) => {
    accounts.value = accounts.value.map(account => account.id === updateAccount.id ? { ...account, ...updateAccount } : account)
  };

  return {
    accounts,
    addAccount,
    removeAccount,
    updateAccount,
  }
}, {
  persist: true
});