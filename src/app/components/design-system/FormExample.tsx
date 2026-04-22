import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import { CustomDatePicker } from "./CustomDatePicker";
import { CustomTimePicker } from "./CustomTimePicker";

export function FormExample() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: '',
    startDate: undefined as Date | undefined,
    startTime: '',
    emailNotifications: false,
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const validateEmail = (email: string) => {
    if (!email) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    return '';
  };

  const handleEmailBlur = () => {
    setTouched({ ...touched, email: true });
    setErrors({ ...errors, email: validateEmail(formData.email) });
  };

  const handlePasswordBlur = () => {
    setTouched({ ...touched, password: true });
    setErrors({ ...errors, password: validatePassword(formData.password) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({ email: emailError, password: passwordError });
    setTouched({ email: true, password: true });

    if (!emailError && !passwordError && formData.agreeToTerms) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass rounded-[var(--radius-2xl)] p-8 md:p-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)] mb-2">
            Create Account
          </h2>
          <p className="text-[var(--text-base)] text-[var(--text-secondary)]">
            Fill in your information to get started with Momentum.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-[var(--text-sm)] font-medium text-[var(--text-primary)] mb-2">
              Full Name
            </label>
            <Input
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <p className="mt-1.5 text-[var(--text-xs)] text-[var(--text-tertiary)]">
              This is how your name will appear across the platform.
            </p>
          </div>

          {/* Email with validation */}
          <div>
            <label className="block text-[var(--text-sm)] font-medium text-[var(--text-primary)] mb-2">
              Email Address
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]">
                email
              </span>
              <Input
                type="email"
                placeholder="john@example.com"
                className="pl-10"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onBlur={handleEmailBlur}
                aria-invalid={touched.email && !!errors.email}
              />
            </div>
            {touched.email && errors.email && (
              <div className="flex items-center gap-1.5 mt-1.5 text-[var(--text-xs)] text-[var(--error-600)] dark:text-[var(--error-400)]">
                <span className="material-symbols-outlined text-[var(--icon-xs)]">error</span>
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* Password with validation */}
          <div>
            <label className="block text-[var(--text-sm)] font-medium text-[var(--text-primary)] mb-2">
              Password
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]">
                lock
              </span>
              <Input
                type="password"
                placeholder="••••••••"
                className="pl-10"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                onBlur={handlePasswordBlur}
                aria-invalid={touched.password && !!errors.password}
              />
            </div>
            {touched.password && errors.password && (
              <div className="flex items-center gap-1.5 mt-1.5 text-[var(--text-xs)] text-[var(--error-600)] dark:text-[var(--error-400)]">
                <span className="material-symbols-outlined text-[var(--icon-xs)]">error</span>
                <span>{errors.password}</span>
              </div>
            )}
            {!errors.password && (
              <p className="mt-1.5 text-[var(--text-xs)] text-[var(--text-tertiary)]">
                Must be at least 8 characters long.
              </p>
            )}
          </div>

          {/* Role Select */}
          <div>
            <label className="block text-[var(--text-sm)] font-medium text-[var(--text-primary)] mb-2">
              Role
            </label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-2.5 bg-[var(--surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] text-[var(--text-base)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:border-transparent transition-all"
            >
              <option value="">Select your role</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="product-manager">Product Manager</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date and Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <CustomDatePicker
              label="Start Date"
              value={formData.startDate}
              onChange={(date) => setFormData({ ...formData, startDate: date })}
            />
            <CustomTimePicker
              label="Preferred Time"
              value={formData.startTime}
              onChange={(time) => setFormData({ ...formData, startTime: time })}
            />
          </div>

          {/* Email Notifications Switch */}
          <div className="flex items-center justify-between p-4 bg-[var(--background-subtle)] rounded-[var(--radius-lg)] border border-[var(--border-subtle)]">
            <div className="flex-1">
              <p className="text-[var(--text-sm)] font-medium text-[var(--text-primary)] mb-0.5">
                Email Notifications
              </p>
              <p className="text-[var(--text-xs)] text-[var(--text-secondary)]">
                Receive updates about your account and activity
              </p>
            </div>
            <Switch
              checked={formData.emailNotifications}
              onCheckedChange={(checked) => setFormData({ ...formData, emailNotifications: checked })}
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3 p-4 bg-[var(--background-subtle)] rounded-[var(--radius-lg)] border border-[var(--border-subtle)]">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: !!checked })}
            />
            <label htmlFor="terms" className="flex-1 text-[var(--text-sm)] text-[var(--text-secondary)] cursor-pointer">
              I agree to the{' '}
              <a href="#" className="text-[var(--secondary-a-600)] dark:text-[var(--secondary-a-400)] hover:underline">
                Terms of Service
              </a>
              {' '}and{' '}
              <a href="#" className="text-[var(--secondary-a-600)] dark:text-[var(--secondary-a-400)] hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button type="button" variant="outline" className="flex-1 sm:flex-initial">
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={!formData.agreeToTerms}>
              Create Account
            </Button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] text-center">
          <p className="text-[var(--text-sm)] text-[var(--text-secondary)]">
            Already have an account?{' '}
            <a href="#" className="text-[var(--secondary-a-600)] dark:text-[var(--secondary-a-400)] font-medium hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
