export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  description: string;
  category: ECategoryType;
  suburb: string;
  price: number;
  dataCriacao: string;
}

export enum ECategoryType {
  Waiting = 1,
  Accepted = 2,
  Rejected = 3
}

export interface UpdateLeadCommand {
  category: ECategoryType;
} 