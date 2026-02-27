import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../..//core/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
   private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly showPassword = signal(false);
  readonly isSubmitting = signal(false);
  readonly rememberMe = signal(true);

  readonly error = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  submit(): void {
    this.error.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    setTimeout(() => {
      const res = this.auth.login(this.form.getRawValue());

      this.isSubmitting.set(false);

      if (!res.ok) {
        this.error.set(res.error);
        return;
      }

      if (res.user.role === 'admin') {
        this.router.navigateByUrl('/dashboard/members');
      } else {
        this.router.navigateByUrl('/dashboard/staff');
      }
    }, 250);
  }

  togglePassword(): void {
    this.showPassword.set(!this.showPassword());
  }
}
