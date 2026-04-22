import { Separator } from "../ui/separator";

export function TypographyFoundation() {
  const typeStyles = [
    {
      name: '5XL Display',
      family: 'Oxanium',
      size: '64px',
      weight: '800',
      lineHeight: '1.2',
      usage: 'Hero headlines, major landing page displays',
      className: 'text-[4rem] font-[800] text-display leading-[1.2]'
    },
    {
      name: '4XL Display',
      family: 'Oxanium',
      size: '48px',
      weight: '700',
      lineHeight: '1.2',
      usage: 'Large feature headings, dashboard displays',
      className: 'text-[3rem] font-[700] text-display leading-[1.2]'
    },
    {
      name: '3XL Display',
      family: 'Oxanium',
      size: '40px',
      weight: '700',
      lineHeight: '1.2',
      usage: 'Section hero headings, KPI displays',
      className: 'text-[2.5rem] font-[700] text-display leading-[1.2]'
    },
    {
      name: '2XL Page Title',
      family: 'Oxanium',
      size: '32px',
      weight: '700',
      lineHeight: '1.2',
      usage: 'Page titles, main content headings',
      className: 'text-[2rem] font-[700] text-display leading-[1.2]'
    },
    {
      name: 'XL Heading',
      family: 'Oxanium',
      size: '24px',
      weight: '600',
      lineHeight: '1.375',
      usage: 'Section headings, card titles',
      className: 'text-[1.5rem] font-[600] text-display leading-[1.375]'
    },
    {
      name: 'LG Heading',
      family: 'Oxanium',
      size: '20px',
      weight: '600',
      lineHeight: '1.375',
      usage: 'Subsection headings, component titles',
      className: 'text-[1.25rem] font-[600] text-display leading-[1.375]'
    },
    {
      name: 'MD Body',
      family: 'Roboto',
      size: '18px',
      weight: '400',
      lineHeight: '1.5',
      usage: 'Emphasized body text, large paragraphs',
      className: 'text-[1.125rem] font-[400] leading-[1.5]'
    },
    {
      name: 'Base Body',
      family: 'Roboto',
      size: '16px',
      weight: '400',
      lineHeight: '1.5',
      usage: 'Default body text, buttons, inputs',
      className: 'text-[1rem] font-[400] leading-[1.5]'
    },
    {
      name: 'SM Label',
      family: 'Roboto',
      size: '14px',
      weight: '500',
      lineHeight: '1.5',
      usage: 'Labels, secondary text, helper text',
      className: 'text-[0.875rem] font-[500] leading-[1.5]'
    },
    {
      name: 'XS Caption',
      family: 'Roboto',
      size: '12px',
      weight: '400',
      lineHeight: '1.5',
      usage: 'Captions, tiny labels, meta information',
      className: 'text-[0.75rem] font-[400] leading-[1.5]'
    },
  ];

  return (
    <div className="bg-[var(--surface)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-subtle)]">
      <h3 className="text-[var(--text-xl)] font-semibold text-display mb-6">Type Scale</h3>
      <div className="space-y-8">
        {typeStyles.map((style, index) => (
          <div key={index}>
            <div className="mb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <p className={`${style.className} text-[var(--text-primary)]`}>
                  The quick brown fox
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-[var(--text-xs)] text-[var(--text-tertiary)]">
                <div>
                  <span className="font-semibold text-[var(--text-secondary)]">{style.name}</span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)]">Family:</span> {style.family}
                </div>
                <div>
                  <span className="text-[var(--text-secondary)]">Size:</span> {style.size}
                </div>
                <div>
                  <span className="text-[var(--text-secondary)]">Weight:</span> {style.weight}
                </div>
                <div>
                  <span className="text-[var(--text-secondary)]">LH:</span> {style.lineHeight}
                </div>
              </div>
              <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mt-2">
                <span className="text-[var(--text-secondary)]">Usage:</span> {style.usage}
              </p>
            </div>
            {index < typeStyles.length - 1 && <Separator className="mt-8" />}
          </div>
        ))}
      </div>
    </div>
  );
}
