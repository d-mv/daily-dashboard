export interface TaskItem {
  id: string;
  status: 'completed' | 'in-progress' | 'pending';
  title: string;
  note?: string;
  link?: string;
  dueDate?: Date;
  priority: 'high' | 'medium' | 'low';
}
