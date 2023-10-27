import * as yup from 'yup';

export const membershipValidationSchema = yup.object().shape({
  joined_at: yup.date().required(),
  left_at: yup.date().nullable(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  group_id: yup.string().nullable().required(),
});
