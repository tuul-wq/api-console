export const USER_FORM_UPDATED = 'USER_FORM_UPDATED';
export function updateUserForm(field, value) {
  return {
    type: USER_FORM_UPDATED,
    payload: { field, value }
  }
};
