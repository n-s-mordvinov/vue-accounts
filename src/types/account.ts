export type AccountType = 'LDAP' | 'LOCAL';

export interface LabelItem {
  text: string;
}

export interface Account {
  id: string;
  labels: LabelItem[];
  type: AccountType;
  login: string;
  password: string | null;
}

export interface AccountFormData extends Omit<Account, 'labels'> {
  labelsInput: string;
}

export interface AccountTypeList {
  label: string;
  value: AccountType;
}