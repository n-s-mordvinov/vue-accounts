import * as yup from 'yup';

export const createAccountSchema = () => {
  return yup.object({
    labelsInput: yup.string().max(50, 'Максимум 50 символов').optional(),

    type: yup
      .string()
      .oneOf(['LDAP', 'LOCAL'], 'Неверный тип записи')
      .required('Тип записи обязателен'),

    login: yup.string().required('Логин обязателен').max(100, 'Максимум 100 символов').trim(),

    password: yup.string().when('type', {
      is: 'LDAP',
      then: (schema) => schema.nullable().notRequired(),
      otherwise: (schema) =>
        schema.required('Пароль обязателен').max(100, 'Максимум 100 символов').trim(),
    }),
  });
};

export const accountSchema = createAccountSchema();
