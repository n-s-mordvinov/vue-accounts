import * as yup from 'yup';
import type { AccountType } from '@/types/account';

export const createAccountSchema = (type: AccountType) => {
  return yup.object({
    labelsInput: yup
      .string()
      .max(50, 'Максимум 50 символов')
      .optional(),
    
    type: yup
      .string()
      .oneOf(['LDAP', 'LOCAL'], 'Неверный тип записи')
      .required('Тип записи обязателен'),
    
    login: yup
      .string()
      .required('Логин обязателен')
      .max(100, 'Максимум 100 символов')
      .trim(),
    
    password: yup
      .string()
      .when('type', {
        is: 'LOCAL',
        then: (schema) => schema
          .required('Пароль обязателен для локальной записи')
          .max(100, 'Максимум 100 символов')
          .trim(),
        otherwise: (schema) => schema.nullable().notRequired()
      })
  })
}

export const accountSchema = createAccountSchema('LOCAL')