import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  type: 'line' | 'bar' | 'area' | 'pie';
  data: any[];
  dataKey: string;
  xAxisKey?: string;
  height?: number;
}

export function ChartCard({
  title,
  subtitle,
  type,
  data,
  dataKey,
  xAxisKey = 'name',
  height = 300
}: ChartCardProps) {
  const chartColors = [
    'var(--primary-600)',
    'var(--secondary-a-600)',
    'var(--secondary-b-600)',
    'var(--secondary-c-600)',
    'var(--info-600)',
  ];

  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 10, right: 10, left: 0, bottom: 0 }
    };

    switch (type) {
      case 'line':
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
            <XAxis dataKey={xAxisKey} stroke="var(--text-tertiary)" style={{ fontSize: '12px' }} />
            <YAxis stroke="var(--text-tertiary)" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                fontSize: '12px'
              }}
            />
            <Line type="monotone" dataKey={dataKey} stroke={chartColors[0]} strokeWidth={2} dot={{ fill: chartColors[0], r: 4 }} />
          </LineChart>
        );
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
            <XAxis dataKey={xAxisKey} stroke="var(--text-tertiary)" style={{ fontSize: '12px' }} />
            <YAxis stroke="var(--text-tertiary)" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                fontSize: '12px'
              }}
            />
            <Bar dataKey={dataKey} fill={chartColors[0]} radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      case 'area':
        return (
          <AreaChart {...commonProps}>
            <defs>
              <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColors[0]} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={chartColors[0]} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
            <XAxis dataKey={xAxisKey} stroke="var(--text-tertiary)" style={{ fontSize: '12px' }} />
            <YAxis stroke="var(--text-tertiary)" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                fontSize: '12px'
              }}
            />
            <Area type="monotone" dataKey={dataKey} stroke={chartColors[0]} fillOpacity={1} fill="url(#colorArea)" />
          </AreaChart>
        );
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey={dataKey}
            >
              {data.map((entry, index) => (
                <Cell key={`pie-cell-${entry[xAxisKey]}-${index}`} fill={chartColors[index % chartColors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                fontSize: '12px'
              }}
            />
          </PieChart>
        );
    }
  };

  return (
    <div className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-sm)]">
      <div className="mb-4">
        <h3 className="text-[var(--text-lg)] font-[var(--font-weight-semibold)] text-display text-[var(--text-primary)]">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[var(--text-sm)] text-[var(--text-secondary)] mt-1">{subtitle}</p>
        )}
      </div>
      <ResponsiveContainer width="100%" height={height}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
}
