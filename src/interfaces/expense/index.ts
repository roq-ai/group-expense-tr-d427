import { PaymentInterface } from 'interfaces/payment';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ExpenseInterface {
  id?: string;
  amount: number;
  description?: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  payment?: PaymentInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    payment?: number;
  };
}

export interface ExpenseGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  user_id?: string;
  organization_id?: string;
}
