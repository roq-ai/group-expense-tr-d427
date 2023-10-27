import { MembershipInterface } from 'interfaces/membership';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface GroupInterface {
  id?: string;
  name: string;
  description?: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  membership?: MembershipInterface[];
  organization?: OrganizationInterface;
  _count?: {
    membership?: number;
  };
}

export interface GroupGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
}
