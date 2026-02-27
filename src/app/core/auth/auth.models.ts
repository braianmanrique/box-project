export type UserRole = 'admin' | 'user';

export interface AuthUser {
  id: string;
  username: string;
  role: UserRole;
  fullName: string;
}
