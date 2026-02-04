import type { AccountTypeList } from "@/types/account";

export const ACCOUNT_TYPES: AccountTypeList[] = [
  { label: 'LDAP', value: 'LDAP' },
  { label: 'Локальная', value: 'LOCAL' }
] as const