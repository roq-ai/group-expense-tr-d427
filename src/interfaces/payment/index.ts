import { UserInterface } from 'interfaces/user';
import { ExpenseInterface } from 'interfaces/expense';
import { GetQueryInterface } from 'interfaces';

export interface PaymentInterface {
  id?: string;
  amount: number;
  user_id: string;
  expense_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  expense?: ExpenseInterface;
  _count?: {};
}

export interface PaymentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  expense_id?: string;
}
