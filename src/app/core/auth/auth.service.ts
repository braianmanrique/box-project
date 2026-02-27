import { Injectable, computed, signal } from '@angular/core';
import { AuthUser, UserRole } from './auth.models';

interface LoginCredentials {
  username: string;
  password: string;
}

const USERS: Array<AuthUser & { password: string }> = [
  {
    id: 'u-admin',
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    fullName: 'Administrador Gym',
  },
  {
    id: 'u-user',
    username: 'user',
    password: 'user123',
    role: 'user',
    fullName: 'Usuario Gym',
  },
];

const STORAGE_KEY = 'gym.auth.user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _user = signal<AuthUser | null>(this.loadFromStorage());

  readonly user = computed(() => this._user());
  readonly isLoggedIn = computed(() => this._user() !== null);
  readonly role = computed<UserRole | null>(() => this._user()?.role ?? null);

  login(creds: LoginCredentials): { ok: true; user: AuthUser } | { ok: false; error: string } {
    const found = USERS.find(
      u => u.username === creds.username.trim() && u.password === creds.password
    );

    if (!found) return { ok: false, error: 'Credenciales inválidas' };

    const { password: _, ...safeUser } = found;
    this._user.set(safeUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(safeUser));
    return { ok: true, user: safeUser };
  }

  logout(): void {
    this._user.set(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  private loadFromStorage(): AuthUser | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw) as AuthUser;
    } catch {
      return null;
    }
  }
}
