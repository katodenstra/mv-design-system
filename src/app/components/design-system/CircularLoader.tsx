interface CircularLoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'white';
}

export function CircularLoader({ size = 'md', variant = 'primary' }: CircularLoaderProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3',
    xl: 'w-16 h-16 border-4',
  };

  const variantClasses = {
    primary: 'border-[var(--primary-600)] border-t-transparent dark:border-[var(--primary-400)] dark:border-t-transparent',
    secondary: 'border-[var(--secondary-a-600)] border-t-transparent dark:border-[var(--secondary-a-400)] dark:border-t-transparent',
    white: 'border-white border-t-transparent',
  };

  return (
    <div
      className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-full animate-spin`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
