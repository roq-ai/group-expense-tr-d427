interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Administrator', 'Member'],
  tenantName: 'Organization',
  applicationName: 'Group Expense Tracker Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View personal user information',
    'View own expenses',
    'Make payments',
    'View own group memberships',
  ],
  ownerAbilities: ['Manage users', 'Manage organizations', 'Manage expenses', 'Manage payments'],
  getQuoteUrl: 'https://app.roq.ai/proposal/49685214-663a-4e59-b5c6-4d277b8fc7f4',
};
