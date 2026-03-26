# Implementation Plan: Fixing Color Contrast & Brand Identity

## Goal Description
Resolve the "white on white" visibility issues and restore the deep blue brand identity by fixing the Tailwind v4 theme configuration and ensuring all components use high-contrast color pairings.

## Proposed Changes

### Global Styles
- [MODIFY] [globals.css](file:///c:/Users/KRRISH/Design%20Thinking/Finestro/Finestro%20Website%20Prototype/src/styles/globals.css)
    - Rewrite the `@theme` block to ensuring all brand colors (`brand-dark`, `brand-accent`, etc.) are correctly defined.
    - Add explicit `bg-brand-dark` and `text-brand-dark` utility mappings if needed.
    - Ensure base body background is correctly set.

### Navigation Component
- [MODIFY] [Navigation.tsx](file:///c:/Users/KRRISH/Design%20Thinking/Finestro/Finestro%20Website%20Prototype/src/components/Navigation.tsx)
    - Ensure the navbar has a clear background and dark text in light mode.

### Home Page Component
- [MODIFY] [HomePage.tsx](file:///c:/Users/KRRISH/Design%20Thinking/Finestro/Finestro%20Website%20Prototype/src/components/HomePage.tsx)
    - Explicitly set the hero section background to `#070B14` to ensure it works even if theme mapping fails.
    - Check all sections for text color contrast.

### Footer Component
- [MODIFY] [Footer.tsx](file:///c:/Users/KRRISH/Design%20Thinking/Finestro/Finestro%20Website%20Prototype/src/components/Footer.tsx)
    - Explicitly set background and text colors to ensure visibility.

## Verification Plan
### Automated Tests
- `npm run build`
### Manual Verification
- Verify visibility and colors on all sections of the landing page and dashboard.
