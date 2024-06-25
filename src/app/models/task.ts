export interface Task {
  date: string;
  entityName: string;
  taskType: string;
  time: Time;
  phone: number;
  contactPerson: string;
  notes: string;
  status: string;
}

export interface Time {
  hour: number;
  minute: number;
  isAM: boolean;
}
