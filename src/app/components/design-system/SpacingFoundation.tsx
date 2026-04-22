export function SpacingFoundation() {
  const spacingTokens = [
    { name: 'spacing-1', value: '4px', rem: '0.25rem' },
    { name: 'spacing-2', value: '8px', rem: '0.5rem' },
    { name: 'spacing-3', value: '12px', rem: '0.75rem' },
    { name: 'spacing-4', value: '16px', rem: '1rem' },
    { name: 'spacing-5', value: '20px', rem: '1.25rem' },
    { name: 'spacing-6', value: '24px', rem: '1.5rem' },
    { name: 'spacing-8', value: '32px', rem: '2rem' },
    { name: 'spacing-10', value: '40px', rem: '2.5rem' },
    { name: 'spacing-12', value: '48px', rem: '3rem' },
  ];

  return (
    <div className="space-y-10">
      {/* Spacing Scale */}
      <div className="bg-[var(--surface)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-subtle)]">
        <h3 className="text-[var(--text-xl)] font-semibold text-display mb-6">Spacing Scale</h3>
        <div className="space-y-6">
          {spacingTokens.map((token) => (
            <div key={token.name} className="flex items-center gap-6">
              <div className="w-32 flex-shrink-0">
                <p className="text-[var(--text-sm)] font-medium text-[var(--text-primary)] mb-0.5">
                  {token.name}
                </p>
                <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] font-mono">
                  {token.value} / {token.rem}
                </p>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <div
                  className="h-8 bg-[var(--secondary-a-600)] dark:bg-[var(--secondary-a-400)] rounded-[var(--radius-sm)]"
                  style={{ width: token.value }}
                />
                <span className="text-[var(--text-xs)] text-[var(--text-tertiary)]">
                  {token.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing in Practice: Gaps */}
      <div className="bg-[var(--surface)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-subtle)]">
        <h3 className="text-[var(--text-xl)] font-semibold text-display mb-3">Gap Spacing Examples</h3>
        <p className="text-[var(--text-sm)] text-[var(--text-secondary)] mb-6">
          Common spacing used between elements in layouts
        </p>
        <div className="space-y-6">
          {[
            { gap: '8px', label: 'spacing-2 (8px) - Tight groups' },
            { gap: '16px', label: 'spacing-4 (16px) - Default spacing' },
            { gap: '24px', label: 'spacing-6 (24px) - Section spacing' },
            { gap: '32px', label: 'spacing-8 (32px) - Large spacing' },
          ].map((example, i) => (
            <div key={i}>
              <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mb-2">{example.label}</p>
              <div className="flex" style={{ gap: example.gap }}>
                <div className="h-16 w-24 bg-[var(--primary-200)] dark:bg-[var(--primary-700)] dark:bg-opacity-30 rounded-[var(--radius-md)]" />
                <div className="h-16 w-24 bg-[var(--secondary-a-200)] dark:bg-[var(--secondary-a-700)] dark:bg-opacity-30 rounded-[var(--radius-md)]" />
                <div className="h-16 w-24 bg-[var(--secondary-b-200)] dark:bg-[var(--secondary-b-700)] dark:bg-opacity-30 rounded-[var(--radius-md)]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing in Practice: Padding */}
      <div className="bg-[var(--surface)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-subtle)]">
        <h3 className="text-[var(--text-xl)] font-semibold text-display mb-3">Padding Examples</h3>
        <p className="text-[var(--text-sm)] text-[var(--text-secondary)] mb-6">
          Common padding used inside components and containers
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { padding: '12px', label: 'spacing-3 (12px) - Compact' },
            { padding: '16px', label: 'spacing-4 (16px) - Default' },
            { padding: '24px', label: 'spacing-6 (24px) - Comfortable' },
            { padding: '32px', label: 'spacing-8 (32px) - Spacious' },
          ].map((example, i) => (
            <div key={i}>
              <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mb-2">{example.label}</p>
              <div
                className="bg-[var(--secondary-c-200)] dark:bg-[var(--secondary-c-700)] dark:bg-opacity-20 rounded-[var(--radius-md)] border-2 border-dashed border-[var(--secondary-c-400)] dark:border-[var(--secondary-c-500)]"
                style={{ padding: example.padding }}
              >
                <div className="bg-[var(--surface)] rounded-[var(--radius-sm)] p-3">
                  <p className="text-[var(--text-sm)] text-[var(--text-primary)]">Content</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing in Practice: Stack */}
      <div className="bg-[var(--surface)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-subtle)]">
        <h3 className="text-[var(--text-xl)] font-semibold text-display mb-3">Vertical Rhythm</h3>
        <p className="text-[var(--text-sm)] text-[var(--text-secondary)] mb-6">
          Spacing between stacked elements creates visual rhythm
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mb-3">spacing-3 (12px) rhythm</p>
            <div className="space-y-3">
              <div className="h-12 bg-[var(--primary-200)] dark:bg-[var(--primary-700)] dark:bg-opacity-30 rounded-[var(--radius-md)]" />
              <div className="h-12 bg-[var(--primary-200)] dark:bg-[var(--primary-700)] dark:bg-opacity-30 rounded-[var(--radius-md)]" />
              <div className="h-12 bg-[var(--primary-200)] dark:bg-[var(--primary-700)] dark:bg-opacity-30 rounded-[var(--radius-md)]" />
            </div>
          </div>
          <div>
            <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mb-3">spacing-6 (24px) rhythm</p>
            <div className="space-y-6">
              <div className="h-12 bg-[var(--secondary-a-200)] dark:bg-[var(--secondary-a-700)] dark:bg-opacity-30 rounded-[var(--radius-md)]" />
              <div className="h-12 bg-[var(--secondary-a-200)] dark:bg-[var(--secondary-a-700)] dark:bg-opacity-30 rounded-[var(--radius-md)]" />
              <div className="h-12 bg-[var(--secondary-a-200)] dark:bg-[var(--secondary-a-700)] dark:bg-opacity-30 rounded-[var(--radius-md)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
