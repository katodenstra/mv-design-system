import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AppBar } from "./components/design-system/AppBar";
import { SegmentedControl } from "./components/design-system/SegmentedControl";
import { ColorPalette } from "./components/design-system/ColorPalette";
import { ComponentShowcase } from "./components/design-system/ComponentShowcase";
import { KPICard } from "./components/design-system/KPICard";
import { TaskCard } from "./components/design-system/TaskCard";
import { StatBlock } from "./components/design-system/StatBlock";
import { ChartCard } from "./components/design-system/ChartCard";
import { FilterBar } from "./components/design-system/FilterBar";
import { EmptyState } from "./components/design-system/EmptyState";
import { ProgressSummary } from "./components/design-system/ProgressSummary";
import { StickyActionBar } from "./components/design-system/StickyActionBar";
import { InlineAlert } from "./components/design-system/InlineAlert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Separator } from "./components/ui/separator";
import { SpacingFoundation } from "./components/design-system/SpacingFoundation";
import { TypographyFoundation } from "./components/design-system/TypographyFoundation";
import { GlassFoundation } from "./components/design-system/GlassFoundation";
import { FormExample } from "./components/design-system/FormExample";

type Section = 'overview' | 'foundations' | 'components' | 'patterns' | 'examples';
type ThemeMode = 'light' | 'dark';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('overview');
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
  };

  const sampleChartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
  ];

  const sampleTasks = [
    {
      title: 'Design mobile dashboard',
      description: 'Create wireframes and high-fidelity mockups for the mobile dashboard experience',
      priority: 'high' as const,
      status: 'in-progress' as const,
      dueDate: 'Apr 25',
      tags: ['Design', 'Mobile'],
      assignee: { name: 'Alex Chen' }
    },
    {
      title: 'Implement authentication flow',
      description: 'Build secure login, signup, and password reset functionality',
      priority: 'urgent' as const,
      status: 'review' as const,
      dueDate: 'Apr 22',
      tags: ['Frontend', 'Security'],
      assignee: { name: 'Jordan Smith' }
    },
    {
      title: 'Write API documentation',
      priority: 'medium' as const,
      status: 'todo' as const,
      dueDate: 'Apr 30',
      tags: ['Documentation'],
      assignee: { name: 'Taylor Lee' }
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <AppBar
        title="Momentum Design System"
        rightActions={[
          {
            icon: theme === 'light' ? 'dark_mode' : 'light_mode',
            onClick: toggleTheme,
            label: 'Toggle theme'
          },
          {
            icon: 'settings',
            onClick: () => alert('Settings'),
            label: 'Settings'
          }
        ]}
        variant="glass"
      />

      <main className="max-w-[1440px] mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-[var(--text-4xl)] md:text-[var(--text-5xl)] font-[var(--font-weight-extrabold)] text-display text-[var(--text-primary)] mb-4">
              Momentum Design System
            </h1>
            <p className="text-[var(--text-lg)] text-[var(--text-secondary)] max-w-2xl mx-auto">
              A modern, mobile-first design system for futuristic productivity applications.
              Built with precision, accessibility, and premium user experience in mind.
            </p>
          </div>

          <div className="flex justify-center mb-8 overflow-x-auto">
            <SegmentedControl
              options={[
                { label: 'Overview', value: 'overview', icon: 'home' },
                { label: 'Foundations', value: 'foundations', icon: 'palette' },
                { label: 'Components', value: 'components', icon: 'widgets' },
                { label: 'Patterns', value: 'patterns', icon: 'dashboard' },
                { label: 'Examples', value: 'examples', icon: 'phone_iphone' },
              ]}
              value={activeSection}
              onChange={(value) => setActiveSection(value as Section)}
            />
          </div>
        </motion.div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeSection === 'overview' && (
              <div className="space-y-8">
                <InlineAlert
                  type="info"
                  title="Production Ready"
                  message="This design system is built for real-world deployment with accessibility, responsive design, and theme support."
                  show={showAlert}
                  onDismiss={() => setShowAlert(false)}
                />

                <section className="bg-[var(--surface)] rounded-[var(--radius-2xl)] p-8 border border-[var(--border-subtle)] shadow-[var(--shadow-md)]">
                  <h2 className="text-[var(--text-2xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)] mb-6">
                    Design Principles
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--primary-600)] flex items-center justify-center mb-3">
                        <span className="material-symbols-outlined text-white text-[var(--icon-lg)]">
                          speed
                        </span>
                      </div>
                      <h3 className="font-semibold text-[var(--text-primary)]">Mobile-First</h3>
                      <p className="text-[var(--text-sm)] text-[var(--text-secondary)]">
                        Designed from 375px up, ensuring perfect experiences on all devices.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--secondary-a-600)] flex items-center justify-center mb-3">
                        <span className="material-symbols-outlined text-white text-[var(--icon-lg)]">
                          accessibility
                        </span>
                      </div>
                      <h3 className="font-semibold text-[var(--text-primary)]">Accessible</h3>
                      <p className="text-[var(--text-sm)] text-[var(--text-secondary)]">
                        WCAG 2.1 AA compliant with proper contrast, focus states, and ARIA support.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--secondary-b-600)] flex items-center justify-center mb-3">
                        <span className="material-symbols-outlined text-white text-[var(--icon-lg)]">
                          auto_awesome
                        </span>
                      </div>
                      <h3 className="font-semibold text-[var(--text-primary)]">Premium UX</h3>
                      <p className="text-[var(--text-sm)] text-[var(--text-secondary)]">
                        Subtle animations, glassmorphism, and Apple-inspired polish throughout.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="grid md:grid-cols-2 gap-6">
                  <section className="bg-[var(--surface)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-subtle)]">
                    <h3 className="text-[var(--text-xl)] font-semibold text-display text-[var(--text-primary)] mb-4">
                      Typography
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mb-1">Display & Headings</p>
                        <p className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)]">
                          Oxanium
                        </p>
                      </div>
                      <div>
                        <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mb-1">Body & UI</p>
                        <p className="text-[var(--text-lg)] text-[var(--text-primary)]">
                          Roboto Regular
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="bg-[var(--surface)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-subtle)]">
                    <h3 className="text-[var(--text-xl)] font-semibold text-display text-[var(--text-primary)] mb-4">
                      Color System
                    </h3>
                    <div className="space-y-2 text-[var(--text-sm)] text-[var(--text-secondary)]">
                      <p>• Primary: Brand actions and key emphasis</p>
                      <p>• Secondary: Supporting accents and highlights</p>
                      <p>• Semantic: Status, validation, and alerts</p>
                      <p>• Neutrals: Backgrounds, text, and borders</p>
                    </div>
                  </section>
                </div>
              </div>
            )}

            {activeSection === 'foundations' && (
              <div className="space-y-8">
                <Tabs defaultValue="colors" className="w-full">
                  <TabsList className="mb-8">
                    <TabsTrigger value="colors">Colors</TabsTrigger>
                    <TabsTrigger value="spacing">Spacing</TabsTrigger>
                    <TabsTrigger value="typography">Typography</TabsTrigger>
                    <TabsTrigger value="glass">Glass</TabsTrigger>
                    <TabsTrigger value="elevation">Elevation</TabsTrigger>
                  </TabsList>

                  <TabsContent value="colors">
                    <ColorPalette />
                  </TabsContent>

                  <TabsContent value="spacing">
                    <SpacingFoundation />
                  </TabsContent>

                  <TabsContent value="typography">
                    <TypographyFoundation />
                  </TabsContent>

                  <TabsContent value="glass">
                    <GlassFoundation />
                  </TabsContent>

                  <TabsContent value="elevation">
                    <div className="bg-[var(--surface)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-subtle)]">
                      <h3 className="text-[var(--text-xl)] font-semibold text-display mb-6">Shadow & Elevation</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                          { name: 'SM', var: 'shadow-sm' },
                          { name: 'MD', var: 'shadow-md' },
                          { name: 'LG', var: 'shadow-lg' },
                          { name: 'XL', var: 'shadow-xl' },
                          { name: '2XL', var: 'shadow-2xl' },
                          { name: 'Inner', var: 'shadow-inner' },
                        ].map((shadow) => (
                          <div key={shadow.name} className="space-y-2">
                            <p className="text-[var(--text-sm)] text-[var(--text-secondary)]">{shadow.name}</p>
                            <div className={`h-24 bg-[var(--surface)] rounded-[var(--radius-lg)] border border-[var(--border-subtle)]`} style={{ boxShadow: `var(--${shadow.var})` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {activeSection === 'components' && (
              <div className="space-y-8">
                <ComponentShowcase />
              </div>
            )}

            {activeSection === 'patterns' && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)] mb-6">
                    KPI & Data Cards
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <KPICard label="Total Revenue" value="$48.2K" change={12.5} trend="up" icon="payments" variant="primary" />
                    <KPICard label="Active Users" value="2,847" change={-3.2} trend="down" icon="group" variant="default" />
                    <KPICard label="Completion Rate" value="94%" change={5.8} trend="up" icon="task_alt" variant="success" />
                    <KPICard label="Avg Response" value="1.2s" change={0} trend="neutral" icon="speed" variant="default" />
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatBlock label="Projects" value="24" icon="folder" color="primary" />
                    <StatBlock label="Tasks Done" value="156" icon="check_circle" color="success" />
                    <StatBlock label="Pending" value="12" icon="pending" color="warning" />
                    <StatBlock label="Team Size" value="8" icon="group" color="secondary-a" />
                  </div>
                </section>

                <section>
                  <h2 className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)] mb-6">
                    Task Cards
                  </h2>
                  <div className="space-y-4 max-w-2xl">
                    {sampleTasks.map((task, i) => (
                      <TaskCard key={i} {...task} />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)] mb-6">
                    Filter Bar
                  </h2>
                  <FilterBar
                    searchPlaceholder="Search tasks..."
                    filters={[
                      {
                        label: 'Status',
                        options: [
                          { label: 'All', value: 'all' },
                          { label: 'Active', value: 'active' },
                          { label: 'Done', value: 'done' },
                        ]
                      },
                      {
                        label: 'Priority',
                        options: [
                          { label: 'All', value: 'all' },
                          { label: 'High', value: 'high' },
                          { label: 'Medium', value: 'medium' },
                        ]
                      }
                    ]}
                  />
                </section>

                <section>
                  <h2 className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)] mb-6">
                    Progress Summary
                  </h2>
                  <div className="max-w-md">
                    <ProgressSummary total={50} completed={32} inProgress={8} label="Sprint Tasks" />
                  </div>
                </section>

                <section>
                  <h2 className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)] mb-6">
                    Empty State
                  </h2>
                  <div className="bg-[var(--surface)] rounded-[var(--radius-xl)] border border-[var(--border-subtle)]">
                    <EmptyState
                      icon="inbox"
                      title="No tasks yet"
                      description="Get started by creating your first task. Click the button below to begin."
                      action={{ label: 'Create Task', onClick: () => alert('Create task') }}
                    />
                  </div>
                </section>

                <section>
                  <h2 className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)] mb-6">
                    Sticky Action Bar
                  </h2>
                  <div className="bg-[var(--surface)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-subtle)]">
                    <button
                      onClick={() => setShowStickyBar(!showStickyBar)}
                      className="px-4 py-2 bg-[var(--action-primary-bg)] text-[var(--action-primary-text)] rounded-[var(--radius-md)] font-medium"
                    >
                      {showStickyBar ? 'Hide' : 'Show'} Sticky Action Bar
                    </button>
                  </div>
                </section>
              </div>
            )}

            {activeSection === 'examples' && (
              <div className="space-y-12">
                <section>
                  <div className="mb-6">
                    <h2 className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)] mb-2">
                      Registration Form
                    </h2>
                    <p className="text-[var(--text-base)] text-[var(--text-secondary)]">
                      A realistic account creation form with validation, custom pickers, and glass treatment.
                    </p>
                  </div>
                  <div className="relative min-h-[600px] rounded-[var(--radius-2xl)] overflow-hidden bg-gradient-to-br from-[var(--primary-600)] via-[var(--secondary-a-600)] to-[var(--secondary-b-600)] p-6 md:p-12">
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-3 gap-4 p-8">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className="h-24 bg-white/20 rounded-[var(--radius-lg)]" />
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <FormExample />
                    </div>
                  </div>
                </section>

                <section>
                  <div className="mb-6">
                    <h2 className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)] mb-2">
                      Dashboard Layout
                    </h2>
                    <p className="text-[var(--text-base)] text-[var(--text-secondary)]">
                      Mobile-first dashboard with KPI cards, charts, and data visualization.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <KPICard label="Total Tasks" value="156" change={8.3} trend="up" icon="task" />
                      <KPICard label="Completed" value="94%" change={2.1} trend="up" icon="check_circle" variant="success" />
                      <KPICard label="In Progress" value="28" icon="pending" />
                      <KPICard label="Overdue" value="4" change={-50} trend="down" icon="warning" variant="warning" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                      <ChartCard
                        title="Task Completion"
                        subtitle="Last 6 months"
                        type="area"
                        data={sampleChartData}
                        dataKey="value"
                        height={250}
                      />
                      <ChartCard
                        title="Monthly Activity"
                        subtitle="Tasks created per month"
                        type="bar"
                        data={sampleChartData}
                        dataKey="value"
                        height={250}
                      />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="bg-[var(--surface)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-subtle)]">
                          <h3 className="text-[var(--text-lg)] font-semibold text-display mb-4">Recent Tasks</h3>
                          <div className="space-y-3">
                            {sampleTasks.slice(0, 2).map((task, i) => (
                              <TaskCard key={i} {...task} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <ProgressSummary total={50} completed={32} inProgress={8} label="Sprint Progress" />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <StickyActionBar
        show={showStickyBar}
        primaryAction={{ label: 'Save Changes', onClick: () => alert('Saved!') }}
        secondaryAction={{ label: 'Cancel', onClick: () => setShowStickyBar(false) }}
        status="unsaved"
      />

      <footer className="mt-20 py-12 border-t border-[var(--border-subtle)] bg-[var(--surface)]">
        <div className="max-w-[1440px] mx-auto px-4 text-center space-y-3">
          <p className="text-[var(--text-base)] font-medium text-[var(--text-primary)] text-display">
            Momentum Design System
          </p>
          <p className="text-[var(--text-sm)] text-[var(--text-secondary)]">
            Built with React • Tailwind CSS v4 • Motion • Recharts
          </p>
          <p className="text-[var(--text-sm)] text-[var(--text-secondary)]">
            <span className="inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[var(--icon-xs)]">check_circle</span>
              Mobile-first
            </span>
            <span className="mx-2">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[var(--icon-xs)]">accessibility</span>
              WCAG 2.1 AA
            </span>
            <span className="mx-2">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[var(--icon-xs)]">code</span>
              Production-ready
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
