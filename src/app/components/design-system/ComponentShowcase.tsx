import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import { Slider } from "../ui/slider";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Skeleton } from "../ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CircularLoader } from "./CircularLoader";
import { CustomDatePicker } from "./CustomDatePicker";
import { CustomTimePicker } from "./CustomTimePicker";
import { IconButton } from "./IconButton";

export function ComponentShowcase() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="space-y-16">
      {/* Buttons Section */}
      <section>
        <div className="mb-6">
          <h3 className="text-[var(--text-2xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)] mb-2">
            Buttons
          </h3>
          <p className="text-[var(--text-base)] text-[var(--text-secondary)]">
            Five distinct variants with clear visual hierarchy and semantic color usage.
          </p>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-[var(--radius-xl)] p-8 space-y-6">
          <div>
            <p className="text-[var(--text-sm)] font-medium text-[var(--text-secondary)] mb-3">Variants</p>
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          <div>
            <p className="text-[var(--text-sm)] font-medium text-[var(--text-secondary)] mb-3">Sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div>
            <p className="text-[var(--text-sm)] font-medium text-[var(--text-secondary)] mb-3">States & Icons</p>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button>
                <span className="material-symbols-outlined">add</span>
                With Icon
              </Button>
              <Button variant="secondary">
                <span className="material-symbols-outlined">download</span>
                Download
              </Button>
            </div>
          </div>

          <div>
            <p className="text-[var(--text-sm)] font-medium text-[var(--text-secondary)] mb-3">Icon Buttons</p>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <IconButton icon="add" label="Add" />
                <IconButton icon="edit" label="Edit" variant="secondary" />
                <IconButton icon="delete" label="Delete" variant="outline" />
                <IconButton icon="more_vert" label="More" variant="ghost" />
                <IconButton icon="close" label="Close" variant="destructive" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <IconButton icon="settings" label="Settings" size="sm" />
                <IconButton icon="search" label="Search" />
                <IconButton icon="notifications" label="Notifications" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Controls Section */}
      <section>
        <div className="mb-6">
          <h3 className="text-[var(--text-2xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)] mb-2">
            Form Controls
          </h3>
          <p className="text-[var(--text-base)] text-[var(--text-secondary)]">
            Accessible inputs, toggles, and controls with proper focus states.
          </p>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-[var(--radius-xl)] p-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="space-y-6">
              <div>
                <label className="block text-[var(--text-sm)] font-medium text-[var(--text-primary)] mb-2">
                  Text Input
                </label>
                <Input type="text" placeholder="Enter text..." />
              </div>

              <div>
                <label className="block text-[var(--text-sm)] font-medium text-[var(--text-primary)] mb-2">
                  Search Input
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]">
                    search
                  </span>
                  <Input type="text" placeholder="Search..." className="pl-10" />
                </div>
              </div>

              <CustomDatePicker label="Date Picker" />

              <CustomTimePicker label="Time Picker" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Checkbox id="check1" />
                <label htmlFor="check1" className="text-[var(--text-sm)] cursor-pointer text-[var(--text-primary)]">
                  Checkbox option
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-[var(--background-subtle)] rounded-[var(--radius-md)]">
                <div>
                  <p className="text-[var(--text-sm)] font-medium text-[var(--text-primary)]">Switch Control</p>
                  <p className="text-[var(--text-xs)] text-[var(--text-secondary)]">
                    {switchOn ? 'Enabled' : 'Disabled'}
                  </p>
                </div>
                <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-[var(--text-sm)] font-medium text-[var(--text-primary)]">
                    Slider
                  </label>
                  <span className="text-[var(--text-sm)] font-semibold text-[var(--primary-600)] dark:text-[var(--primary-400)]">
                    {sliderValue[0]}%
                  </span>
                </div>
                <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status & Feedback Section */}
      <section>
        <div className="mb-6">
          <h3 className="text-[var(--text-2xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)] mb-2">
            Status & Feedback
          </h3>
          <p className="text-[var(--text-base)] text-[var(--text-secondary)]">
            Badges, progress indicators, and loading states.
          </p>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-[var(--radius-xl)] p-8 space-y-8">
          <div>
            <p className="text-[var(--text-sm)] font-medium text-[var(--text-secondary)] mb-3">Badges</p>
            <div className="flex flex-wrap gap-2">
              <Badge>Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="destructive">Error</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          <div>
            <p className="text-[var(--text-sm)] font-medium text-[var(--text-secondary)] mb-3">Progress Bar</p>
            <div className="space-y-3 max-w-md">
              <div>
                <div className="flex justify-between text-[var(--text-xs)] text-[var(--text-secondary)] mb-2">
                  <span>Upload progress</span>
                  <span>65%</span>
                </div>
                <Progress value={65} />
              </div>
              <div>
                <div className="flex justify-between text-[var(--text-xs)] text-[var(--text-secondary)] mb-2">
                  <span>Processing</span>
                  <span>90%</span>
                </div>
                <Progress value={90} />
              </div>
            </div>
          </div>

          <div>
            <p className="text-[var(--text-sm)] font-medium text-[var(--text-secondary)] mb-3">Loading Indicators</p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <CircularLoader size="sm" />
                <span className="text-[var(--text-xs)] text-[var(--text-tertiary)]">Small</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularLoader size="md" />
                <span className="text-[var(--text-xs)] text-[var(--text-tertiary)]">Medium</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularLoader size="lg" />
                <span className="text-[var(--text-xs)] text-[var(--text-tertiary)]">Large</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularLoader size="md" variant="secondary" />
                <span className="text-[var(--text-xs)] text-[var(--text-tertiary)]">Secondary</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[var(--text-sm)] font-medium text-[var(--text-secondary)] mb-3">Skeleton Loaders</p>
            <div className="space-y-3 max-w-md">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section>
        <div className="mb-6">
          <h3 className="text-[var(--text-2xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)] mb-2">
            Tabs & Navigation
          </h3>
          <p className="text-[var(--text-base)] text-[var(--text-secondary)]">
            Segmented navigation with clear active states and visual hierarchy.
          </p>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-[var(--radius-xl)] p-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">
                <span className="material-symbols-outlined text-[var(--icon-sm)]">home</span>
                Overview
              </TabsTrigger>
              <TabsTrigger value="analytics">
                <span className="material-symbols-outlined text-[var(--icon-sm)]">analytics</span>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports">
                <span className="material-symbols-outlined text-[var(--icon-sm)]">description</span>
                Reports
              </TabsTrigger>
              <TabsTrigger value="settings">
                <span className="material-symbols-outlined text-[var(--icon-sm)]">settings</span>
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <h4 className="text-[var(--text-lg)] font-semibold text-display text-[var(--text-primary)]">Overview</h4>
              <p className="text-[var(--text-secondary)] text-[var(--text-base)] leading-relaxed">
                This is the overview tab showing general information and key metrics. The tab design matches the segmented control style with clear active states.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-[var(--background-subtle)] rounded-[var(--radius-lg)]">
                  <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mb-1">Total Views</p>
                  <p className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)]">24.5K</p>
                </div>
                <div className="p-4 bg-[var(--background-subtle)] rounded-[var(--radius-lg)]">
                  <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mb-1">Engagement</p>
                  <p className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)]">68%</p>
                </div>
                <div className="p-4 bg-[var(--background-subtle)] rounded-[var(--radius-lg)]">
                  <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mb-1">Growth</p>
                  <p className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)]">+12%</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <h4 className="text-[var(--text-lg)] font-semibold text-display text-[var(--text-primary)]">Analytics</h4>
              <p className="text-[var(--text-secondary)] text-[var(--text-base)] leading-relaxed">
                Analytics and data visualization would appear here with charts and detailed metrics.
              </p>
            </TabsContent>

            <TabsContent value="reports" className="space-y-4">
              <h4 className="text-[var(--text-lg)] font-semibold text-display text-[var(--text-primary)]">Reports</h4>
              <p className="text-[var(--text-secondary)] text-[var(--text-base)] leading-relaxed">
                Generated reports and downloadable data exports would be available in this section.
              </p>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <h4 className="text-[var(--text-lg)] font-semibold text-display text-[var(--text-primary)]">Settings</h4>
              <p className="text-[var(--text-secondary)] text-[var(--text-base)] leading-relaxed">
                Configuration options, preferences, and account settings would be shown here.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
