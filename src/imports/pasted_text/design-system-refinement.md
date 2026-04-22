Refine the current design system so all components feel natively designed for the same product language. Eliminate generic default patterns and align every component to the same premium, futuristic productivity design system.

DO NOT use generic browser-like, Material-default, or stock picker patterns. Every component must feel custom-designed and visually consistent with the design system.

GLOBAL FIXES
- Improve consistency across all components so they feel part of one cohesive premium system
- Maintain the Apple-inspired, friendly, futuristic productivity style
- Keep the system fully production-ready, accessible, and mobile-first
- Apply subtle premium glassmorphism intentionally across relevant components and examples
- Add realistic examples showing how glass surfaces behave in context, not only isolated component cards

DATE PICKER AND TIME PICKER
- The current date picker and time picker look generic and not aligned to the design system
- Redesign both as custom components that match the system’s visual language
- Use the same typography, corner radius, shadows, border treatments, icon style, spacing, and glass surface logic as the rest of the DS
- Make them feel premium, modern, and integrated with the dashboard/productivity aesthetic
- Improve layout, alignment, spacing, interaction hierarchy, and visual polish
- Use custom popup panels/sheets that feel like part of the DS, not like default OS or generic web pickers
- Support light and dark modes with accessible contrast
- Preserve usability and readability for dates, times, navigation controls, selected state, hover, focus, disabled, and today/current-time indicators

TABS
- The current tabs component does not work visually and does not match the intended system behavior
- Redesign tabs so they visually align with the top section selector/navigation style already used elsewhere in the DS
- Tabs should feel like a true segmented navigation or section selector, with clear active, inactive, hover, focus, and pressed states
- Make the active tab obvious using the design system color hierarchy, surface treatment, and elevation
- Ensure tabs work in both light and dark mode and feel premium, polished, and production-ready
- Create both compact tabs and container-based tab groups
- Improve spacing, selected-state clarity, and panel relationship

BUTTON CONTRAST
- Fix button contrast across all variants
- Ensure text/icon contrast on primary, secondary, outline, ghost, and destructive buttons is accessible and visually balanced
- Do not allow low-contrast text on colored surfaces
- Adjust button fills, text colors, border colors, and disabled states to preserve hierarchy and accessibility
- Ensure buttons remain distinct from each other in both light and dark themes
- Review contrast for icon buttons as well

BADGES IN DARK THEME
- Improve dark theme badge contrast for accessibility
- Badges must remain readable and clearly differentiated in status and hierarchy
- Refine text, border, and fill combinations for primary, secondary, success, warning, error, and outline badges
- Avoid washed-out or low-contrast combinations
- Preserve a premium look without sacrificing readability

GLASSMORPHISM
- The current system does not show enough glassmorphism
- Implement subtle premium glassmorphism across relevant surfaces and examples
- Glassmorphism should not be limited to blur only
- Include edge distortion / optical refraction behavior inspired by Apple OS surfaces
- Add soft translucent layers, controlled blur, subtle inner highlights, thin borders, edge light behavior, and refracted edge treatment
- Keep the effect premium and restrained, never noisy or gimmicky
- Ensure glass surfaces remain readable and accessible in both light and dark modes
- Use glassmorphism intentionally on navigation containers, elevated cards, modal/drawer surfaces, floating selectors, overlays, and selected segmented/tab containers where appropriate

GLASSMORPHISM EXAMPLES
Add visible design system examples where the glass treatment is clearly demonstrated:
- top navigation / section selector
- floating card or KPI panel
- modal or bottom sheet
- date picker / time picker popups
- filter / segmented control container
- selected tab group container
These examples should clearly show translucency, layering, blur, edge distortion, and premium depth

CONSISTENCY RULES
- Keep one unified radius system
- Keep one unified shadow/elevation logic
- Keep one unified border system
- Keep one unified icon sizing and alignment system
- Keep one unified spacing rhythm
- Ensure all new components match existing design tokens and typography rules

ACCESSIBILITY
- Maintain accessible contrast in both light and dark mode
- Ensure selected states, focus states, and interactive feedback are clearly visible
- Do not rely on color alone for status communication
- Preserve readability inside glass surfaces
- Keep touch targets mobile-friendly

OUTPUT EXPECTATION
The result should feel like a coherent, premium, accessible, Apple-inspired futuristic productivity design system with custom date/time pickers, functional tabs, corrected button contrast, more accessible dark badges, and visibly intentional glassmorphism with edge distortion and layered depth.