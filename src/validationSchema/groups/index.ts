import * as yup from 'yup';

export const groupValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  organization_id: yup.string().nullable().required(),
});
