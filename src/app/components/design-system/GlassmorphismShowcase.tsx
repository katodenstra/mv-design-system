import { useState } from "react";
import { motion } from "motion/react";
import { KPICard } from "./KPICard";
import { Button } from "../ui/button";
import { CustomDatePicker } from "./CustomDatePicker";
import { SegmentedControl } from "./SegmentedControl";

export function GlassmorphismShowcase() {
  const [selectedView, setSelectedView] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-12">
      {/* Hero Section with Glass Navigation */}
      <section>
        <div className="mb-6">
          <h3 className="text-[var(--text-2xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)] mb-2">
            Glass Navigation Bar
          </h3>
          <p className="text-[var(--text-base)] text-[var(--text-secondary)]">
            Demonstrates translucency, edge refraction, and layered depth.
          </p>
        </div>

        <div className="relative h-[400px] rounded-[var(--radius-2xl)] overflow-hidden bg-gradient-to-br from-[var(--primary-600)] via-[var(--secondary-a-600)] to-[var(--secondary-b-600)] p-8">
          {/* Background content */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-3 gap-4 p-8">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="h-20 bg-white/20 rounded-[var(--radius-lg)]" />
              ))}
            </div>
          </div>

          {/* Glass navigation bar */}
          <div className="relative glass rounded-[var(--radius-xl)] p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[var(--text-xl)] font-bold text-display text-[var(--text-primary)]">
                Momentum
              </h2>
              <div className="flex items-center gap-2">
                <SegmentedControl
                  options={[
                    { label: 'Dashboard', value: 'dashboard', icon: 'dashboard' },
                    { label: 'Analytics', value: 'analytics', icon: 'analytics' },
                    { label: 'Settings', value: 'settings', icon: 'settings' },
                  ]}
                  value={selectedView}
                  onChange={setSelectedView}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Glass KPI Cards */}
      <section>
        <div className="mb-6">
          <h3 className="text-[var(--text-2xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)] mb-2">
            Floating Glass Cards
          </h3>
          <p className="text-[var(--text-base)] text-[var(--text-secondary)]">
            Glass surfaces with premium depth and edge lighting.
          </p>
        </div>

        <div className="relative h-[400px] rounded-[var(--radius-2xl)] overflow-hidden bg-gradient-to-br from-[var(--secondary-b-600)] via-[var(--secondary-c-600)] to-[var(--primary-600)] p-8">
          {/* Background pattern */}
          <div className="absolute inset-0">
            <div className="grid grid-cols-4 gap-4 p-8 opacity-10">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="h-24 bg-white/30 rounded-[var(--radius-md)]" />
              ))}
            </div>
          </div>

          {/* Floating glass cards */}
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-[var(--radius-xl)] p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-[var(--text-sm)] font-medium text-[var(--text-primary)]">Active Users</p>
                <span className="material-symbols-outlined text-[var(--icon-md)] text-[var(--primary-600)] dark:text-[var(--primary-400)]">
                  group
                </span>
              </div>
              <p className="text-[var(--text-4xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)] leading-none mb-2">
                2,847
              </p>
              <div className="flex items-center gap-1 text-[var(--text-sm)] text-[var(--success-600)]">
                <span className="material-symbols-outlined text-[var(--icon-xs)]">trending_up</span>
                <span className="font-medium">+12.5%</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-[var(--radius-xl)] p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-[var(--text-sm)] font-medium text-[var(--text-primary)]">Revenue</p>
                <span className="material-symbols-outlined text-[var(--icon-md)] text-[var(--secondary-a-600)] dark:text-[var(--secondary-a-400)]">
                  payments
                </span>
              </div>
              <p className="text-[var(--text-4xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)] leading-none mb-2">
                $48.2K
              </p>
              <div className="flex items-center gap-1 text-[var(--text-sm)] text-[var(--success-600)]">
                <span className="material-symbols-outlined text-[var(--icon-xs)]">trending_up</span>
                <span className="font-medium">+8.3%</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-[var(--radius-xl)] p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-[var(--text-sm)] font-medium text-[var(--text-primary)]">Completion</p>
                <span className="material-symbols-outlined text-[var(--icon-md)] text-[var(--secondary-b-600)] dark:text-[var(--secondary-b-400)]">
                  task_alt
                </span>
              </div>
              <p className="text-[var(--text-4xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)] leading-none mb-2">
                94%
              </p>
              <div className="flex items-center gap-1 text-[var(--text-sm)] text-[var(--success-600)]">
                <span className="material-symbols-outlined text-[var(--icon-xs)]">trending_up</span>
                <span className="font-medium">+2.1%</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-[var(--radius-xl)] p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-[var(--text-sm)] font-medium text-[var(--text-primary)]">Response</p>
                <span className="material-symbols-outlined text-[var(--icon-md)] text-[var(--secondary-c-600)] dark:text-[var(--secondary-c-400)]">
                  speed
                </span>
              </div>
              <p className="text-[var(--text-4xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)] leading-none mb-2">
                1.2s
              </p>
              <div className="flex items-center gap-1 text-[var(--text-sm)] text-[var(--text-secondary)]">
                <span className="material-symbols-outlined text-[var(--icon-xs)]">remove</span>
                <span className="font-medium">0%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Glass Modal Example */}
      <section>
        <div className="mb-6">
          <h3 className="text-[var(--text-2xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)] mb-2">
            Glass Modal / Dialog
          </h3>
          <p className="text-[var(--text-base)] text-[var(--text-secondary)]">
            Layered glass with backdrop blur and edge distortion.
          </p>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-[var(--radius-xl)] p-8">
          <Button onClick={() => setShowModal(true)}>
            Show Glass Modal
          </Button>
        </div>

        {showModal && (
          <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Glass modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative glass rounded-[var(--radius-2xl)] p-8 max-w-md w-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-[var(--text-xl)] font-bold text-display text-[var(--text-primary)] mb-2">
                    Schedule Meeting
                  </h3>
                  <p className="text-[var(--text-sm)] text-[var(--text-secondary)]">
                    Choose a date and time for your meeting.
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-[var(--action-ghost-hover)] rounded-[var(--radius-md)] transition-colors"
                >
                  <span className="material-symbols-outlined text-[var(--icon-md)]">close</span>
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <CustomDatePicker label="Date" />
                <CustomTimePicker label="Time" />
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setShowModal(false)} className="flex-1">
                  Cancel
                </Button>
                <Button onClick={() => setShowModal(false)} className="flex-1">
                  Confirm
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
}
