interface ColorSwatchProps {
  name: string;
  hex: string;
  textColor?: string;
}

function ColorSwatch({ name, hex, textColor = '#000' }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-20 rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] border border-[var(--border-subtle)]"
        style={{ backgroundColor: hex }}
      />
      <div>
        <p className="text-[var(--text-xs)] font-medium text-[var(--text-primary)]">{name}</p>
        <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] font-mono">{hex}</p>
      </div>
    </div>
  );
}

export function ColorPalette() {
  const colorGroups = [
    {
      name: 'Primary',
      colors: [
        { name: 'Primary 700', hex: '#15244C' },
        { name: 'Primary 600', hex: '#2D3E73' },
        { name: 'Primary 500', hex: '#57658F' },
        { name: 'Primary 400', hex: '#818BAB' },
        { name: 'Primary 300', hex: '#ABB2C7' },
        { name: 'Primary 200', hex: '#D5D8E3' },
        { name: 'Primary 100', hex: '#F4F5F8' },
      ]
    },
    {
      name: 'Secondary A',
      colors: [
        { name: 'Sec A 700', hex: '#225982' },
        { name: 'Sec A 600', hex: '#3F76A6' },
        { name: 'Sec A 500', hex: '#6591B8' },
        { name: 'Sec A 400', hex: '#8CADCA' },
        { name: 'Sec A 300', hex: '#B2C8DB' },
        { name: 'Sec A 200', hex: '#D9E4ED' },
        { name: 'Sec A 100', hex: '#F5F8FB' },
      ]
    },
    {
      name: 'Secondary B',
      colors: [
        { name: 'Sec B 700', hex: '#258E8B' },
        { name: 'Sec B 600', hex: '#50BFBF' },
        { name: 'Sec B 500', hex: '#73CCCC' },
        { name: 'Sec B 400', hex: '#96D9D9' },
        { name: 'Sec B 300', hex: '#B9E5E5' },
        { name: 'Sec B 200', hex: '#DCF2F2' },
        { name: 'Sec B 100', hex: '#F6FCFC' },
      ]
    },
    {
      name: 'Secondary C',
      colors: [
        { name: 'Sec C 700', hex: '#0C665B' },
        { name: 'Sec C 600', hex: '#148C80' },
        { name: 'Sec C 500', hex: '#43A399' },
        { name: 'Sec C 400', hex: '#72BAB3' },
        { name: 'Sec C 300', hex: '#A1D1CC' },
        { name: 'Sec C 200', hex: '#D0E8E6' },
        { name: 'Sec C 100', hex: '#F3F9F9' },
      ]
    },
    {
      name: 'Semantic Colors',
      colors: [
        { name: 'Error', hex: '#EC2D30' },
        { name: 'Warning', hex: '#FE9B0E' },
        { name: 'Success', hex: '#0C9D61' },
        { name: 'Info', hex: '#3A70E2' },
      ]
    },
    {
      name: 'Neutrals',
      colors: [
        { name: 'Near Black', hex: '#0D0D0D' },
        { name: 'Neutral 700', hex: '#141414' },
        { name: 'Neutral 600', hex: '#1F1F1F' },
        { name: 'Neutral 500', hex: '#4C4C4C' },
        { name: 'Neutral 400', hex: '#797979' },
        { name: 'Neutral 300', hex: '#A5A5A5' },
        { name: 'Neutral 200', hex: '#D2D2D2' },
        { name: 'Neutral 100', hex: '#F4F4F4' },
        { name: 'White Smoke', hex: '#F9F9F9' },
      ]
    }
  ];

  return (
    <div className="space-y-10">
      {colorGroups.map((group, i) => (
        <div key={i} className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-[var(--radius-xl)] p-8">
          <h3 className="text-[var(--text-xl)] font-[var(--font-weight-semibold)] text-display text-[var(--text-primary)] mb-6">
            {group.name}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {group.colors.map((color, j) => (
              <ColorSwatch key={j} {...color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
