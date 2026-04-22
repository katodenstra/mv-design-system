export function GlassFoundation() {
  return (
    <div className="space-y-10">
      {/* Glass Overview */}
      <div className="bg-[var(--surface)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-subtle)]">
        <h3 className="text-[var(--text-xl)] font-semibold text-display mb-3">Glass Surface Language</h3>
        <p className="text-[var(--text-base)] text-[var(--text-secondary)] mb-6">
          Premium translucent surfaces with backdrop blur, edge refraction, and layered depth. Glass surfaces create visual hierarchy while maintaining readability and accessibility.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-[var(--text-sm)]">
          <div className="space-y-2">
            <h4 className="font-semibold text-[var(--text-primary)]">Visual Properties</h4>
            <ul className="space-y-1 text-[var(--text-secondary)]">
              <li>• Translucent background (70-75% opacity)</li>
              <li>• Backdrop blur with saturation boost</li>
              <li>• Gradient edge borders for refraction</li>
              <li>• Inner shadow highlights for depth</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-[var(--text-primary)]">Common Use Cases</h4>
            <ul className="space-y-1 text-[var(--text-secondary)]">
              <li>• Navigation bars and headers</li>
              <li>• Floating panels and cards</li>
              <li>• Modals and bottom sheets</li>
              <li>• Popovers and dropdowns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Container */}
      <div>
        <h3 className="text-[var(--text-lg)] font-semibold text-display mb-4 text-[var(--text-primary)]">
          Navigation Container Glass
        </h3>
        <div className="relative h-[200px] rounded-[var(--radius-2xl)] overflow-hidden bg-gradient-to-br from-[var(--primary-600)] via-[var(--secondary-a-600)] to-[var(--secondary-b-600)]">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-3 gap-4 p-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-16 bg-white/20 rounded-[var(--radius-md)]" />
              ))}
            </div>
          </div>
          <div className="relative p-6">
            <div className="glass rounded-[var(--radius-xl)] p-4">
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-base)] font-bold text-display text-[var(--text-primary)]">
                  Navigation Bar
                </span>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-[var(--primary-200)] dark:bg-[var(--primary-700)] dark:bg-opacity-40" />
                  <div className="w-8 h-8 rounded-full bg-[var(--secondary-a-200)] dark:bg-[var(--secondary-a-700)] dark:bg-opacity-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elevated Panel */}
      <div>
        <h3 className="text-[var(--text-lg)] font-semibold text-display mb-4 text-[var(--text-primary)]">
          Elevated Panel Glass
        </h3>
        <div className="relative h-[280px] rounded-[var(--radius-2xl)] overflow-hidden bg-gradient-to-br from-[var(--secondary-b-600)] via-[var(--secondary-c-600)] to-[var(--primary-500)]">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-4 gap-3 p-8">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-20 bg-white/30 rounded-[var(--radius-md)]" />
              ))}
            </div>
          </div>
          <div className="relative p-8">
            <div className="glass rounded-[var(--radius-2xl)] p-6 max-w-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[var(--text-sm)] font-medium text-[var(--text-secondary)]">Total Revenue</span>
                <span className="material-symbols-outlined text-[var(--icon-md)] text-[var(--secondary-a-600)] dark:text-[var(--secondary-a-400)]">
                  payments
                </span>
              </div>
              <p className="text-[var(--text-4xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)] leading-none mb-3">
                $48.2K
              </p>
              <div className="flex items-center gap-1 text-[var(--text-sm)] text-[var(--success-600)] dark:text-[var(--success-400)]">
                <span className="material-symbols-outlined text-[var(--icon-xs)]">trending_up</span>
                <span className="font-medium">+12.5%</span>
                <span className="text-[var(--text-tertiary)] ml-1">vs last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Surface */}
      <div>
        <h3 className="text-[var(--text-lg)] font-semibold text-display mb-4 text-[var(--text-primary)]">
          Modal / Dialog Glass
        </h3>
        <div className="relative h-[320px] rounded-[var(--radius-2xl)] overflow-hidden bg-gradient-to-br from-[var(--secondary-a-500)] via-[var(--primary-500)] to-[var(--secondary-c-500)]">
          <div className="absolute inset-0 opacity-15">
            <div className="grid grid-cols-3 gap-4 p-6">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="h-24 bg-white/25 rounded-[var(--radius-lg)]" />
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center h-full p-8">
            <div className="glass rounded-[var(--radius-2xl)] p-8 max-w-md w-full">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-[var(--text-xl)] font-bold text-display text-[var(--text-primary)] mb-2">
                    Confirm Action
                  </h3>
                  <p className="text-[var(--text-sm)] text-[var(--text-secondary)]">
                    This action cannot be undone.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[var(--background-subtle)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--icon-sm)] text-[var(--text-primary)]">close</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 h-10 bg-[var(--action-secondary-bg)] border border-[var(--action-secondary-border)] rounded-[var(--radius-md)]" />
                <div className="flex-1 h-10 bg-[var(--action-primary-bg)] border border-[var(--action-primary-border)] rounded-[var(--radius-md)] shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selector Container */}
      <div>
        <h3 className="text-[var(--text-lg)] font-semibold text-display mb-4 text-[var(--text-primary)]">
          Selector Container Glass
        </h3>
        <div className="relative h-[180px] rounded-[var(--radius-2xl)] overflow-hidden bg-gradient-to-br from-[var(--primary-600)] to-[var(--secondary-b-600)]">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-2 gap-4 p-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-20 bg-white/20 rounded-[var(--radius-lg)]" />
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center h-full p-8">
            <div className="glass rounded-[var(--radius-lg)] p-1.5 inline-flex gap-1">
              <div className="px-5 py-2.5 bg-[var(--surface)] shadow-sm rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-sm)] font-medium text-[var(--text-primary)]">Dashboard</span>
              </div>
              <div className="px-5 py-2.5">
                <span className="text-[var(--text-sm)] font-medium text-[var(--text-secondary)]">Analytics</span>
              </div>
              <div className="px-5 py-2.5">
                <span className="text-[var(--text-sm)] font-medium text-[var(--text-secondary)]">Settings</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-[var(--surface)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-subtle)]">
        <h3 className="text-[var(--text-xl)] font-semibold text-display mb-6">CSS Properties</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-[var(--text-sm)] font-semibold text-[var(--text-primary)] mb-3">Light Mode</h4>
            <pre className="bg-[var(--background-subtle)] p-4 rounded-[var(--radius-md)] text-[var(--text-xs)] font-mono text-[var(--text-secondary)] overflow-x-auto">
{`background: rgba(255, 255, 255, 0.75);
backdrop-filter: blur(16px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.3);
border-top: 1px solid rgba(255, 255, 255, 0.5);
box-shadow:
  0 8px 32px 0 rgba(0, 0, 0, 0.08),
  inset 0 1px 0 0 rgba(255, 255, 255, 0.5);`}
            </pre>
          </div>
          <div>
            <h4 className="text-[var(--text-sm)] font-semibold text-[var(--text-primary)] mb-3">Dark Mode</h4>
            <pre className="bg-[var(--background-subtle)] p-4 rounded-[var(--radius-md)] text-[var(--text-xs)] font-mono text-[var(--text-secondary)] overflow-x-auto">
{`background: rgba(19, 24, 37, 0.6);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.12);
border-top: 1px solid rgba(255, 255, 255, 0.18);
box-shadow:
  0 8px 32px 0 rgba(0, 0, 0, 0.4),
  inset 0 1px 0 0 rgba(255, 255, 255, 0.1);`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
