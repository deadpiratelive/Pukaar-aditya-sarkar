---
name: Pukaar
colors:
  surface: '#111319'
  surface-dim: '#111319'
  surface-bright: '#37393f'
  surface-container-lowest: '#0c0e14'
  surface-container-low: '#191b21'
  surface-container: '#1d1f25'
  surface-container-high: '#282a30'
  surface-container-highest: '#33353b'
  on-surface: '#e2e2ea'
  on-surface-variant: '#c7c6cb'
  inverse-surface: '#e2e2ea'
  inverse-on-surface: '#2e3037'
  outline: '#909095'
  outline-variant: '#46464b'
  surface-tint: '#c7c6ca'
  primary: '#c7c6ca'
  on-primary: '#303034'
  primary-container: '#0d0e11'
  on-primary-container: '#7b7b7f'
  inverse-primary: '#5e5e62'
  secondary: '#bcc6e3'
  on-secondary: '#263047'
  secondary-container: '#3f4961'
  on-secondary-container: '#aeb8d4'
  tertiary: '#ffb4a5'
  on-tertiary: '#650b00'
  tertiary-container: '#260200'
  on-tertiary-container: '#d74c33'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e3e2e6'
  primary-fixed-dim: '#c7c6ca'
  on-primary-fixed: '#1b1b1f'
  on-primary-fixed-variant: '#46464a'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#bcc6e3'
  on-secondary-fixed: '#111b31'
  on-secondary-fixed-variant: '#3d465e'
  tertiary-fixed: '#ffdad3'
  tertiary-fixed-dim: '#ffb4a5'
  on-tertiary-fixed: '#3e0400'
  on-tertiary-fixed-variant: '#8d1703'
  background: '#111319'
  on-background: '#e2e2ea'
  surface-variant: '#33353b'
typography:
  headline-xl:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.03em
  headline-md:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system for this indie-underground music platform is built on the concept of "Emotional Realism." It captures the raw, internal monologue of the artist and the listener, oscillating between the heavy silence of depression and the sudden, burning friction of creative struggle.

The style is defined by **High-Contrast Glassmorphism**. We utilize deep, atmospheric layers to simulate depth, where content feels like it is floating in a void, illuminated by distant, hazy light sources. The UI should evoke a sense of late-night introspection—moody, cinematic, and profoundly personal. Visual interest is driven by the tension between cold, isolated backgrounds and the visceral heat of "the call" (Pukaar).

## Colors

The palette is mapped to emotional states rather than functional utility:
- **Base Layers:** Charcoal Black (#0D0E11) and Coal Gray (#1C1E24) form the "ash landscape" of the UI. These are matte and deep, providing the void for other elements to exist within.
- **Isolation:** Cold Indigo (#182238) is used for secondary surfaces and background glows, representing the quietude of depression.
- **Friction:** Burnt Crimson (#D94E34) and Deep Amber (#5C1D18) are used for interactive states and progress indicators, signifying the pain and energy of the inner struggle.
- **The Call:** Sunset Gold (#F2B035) is the rarest color, reserved for the "Pukaar"—the primary call-to-action, highlights, and moments of resolution/hope.

## Typography

Typography acts as the voice of the platform.
- **Headlines:** Uses 'Syne' in bold weights. The letter-spacing is intentionally stretched to create an "echo" effect, making the text feel as though it is ringing out in a large, empty space.
- **Body:** Uses 'Inter' for maximum legibility. A slightly wider tracking (letter-spacing) is applied to body copy to provide "breathing room" amidst the heavy, dark visual style.
- **Contrast:** Large scale differences should be used between headlines and body text to emphasize the emotional weight of the content.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous, cinematic margins. 
- **Desktop:** A 12-column grid with 64px outer margins and 24px gutters. Use asymmetrical layouts to create a sense of indie-underground "imperfection."
- **Mobile:** A 4-column grid with 20px margins. 
- **Philosophy:** Content should feel isolated. Use extreme vertical spacing (section-gaps) to allow the "atmospheric gradients" to bleed through and set the mood before the next piece of content appears.

## Elevation & Depth

Depth is not created with shadows, but through **Tonal Layering and Translucency**:
- **The Void:** The base layer is Charcoal Black (#0D0E11).
- **Glass Layers:** Surfaces use a 30% background blur (backdrop-filter) with a very low-opacity Cold Indigo tint.
- **Edge Definition:** Instead of drop shadows, use a 1px inner stroke (border) of white at 10-15% opacity to catch the "light" on the top and left edges.
- **Atmospheric Depth:** Large, blurred radial gradients in Burnt Crimson and Cold Indigo should be placed behind glass elements to create a sense of glowing embers or cold fog.

## Shapes

The shape language is **Soft** but structured. 
- A base radius of 0.25rem (4px) is used for small elements like tags and inputs.
- Larger containers like cards use 0.75rem (12px) to feel modern yet grounded.
- Do not use fully rounded "pill" shapes for buttons; keep them slightly squared to maintain the "realism" and avoid appearing too "bubbly" or playful.

## Components

### Buttons
- **Primary:** Glass surface with a Sunset Gold border and high-intensity glow on hover. Text in Syne Bold.
- **Secondary:** Ghost style with 1px Coal Gray border. Text turns Burnt Crimson on hover, simulating a "burning" effect.

### Music Player / Cards
- Use high-blur glassmorphism for the player tray. 
- Album art should have a slight "film grain" overlay.
- Progress bars use Burnt Crimson for the active state, with a Sunset Gold "spark" at the current playhead.

### Input Fields
- Underlined-only style (1px border-bottom) to minimize visual clutter.
- Active state triggers a subtle Cold Indigo glow beneath the field.

### Interactive Elements
- **Glows:** Use `box-shadow` with high blur and 0px spread to create "light leaks" around active elements.
- **Grain:** Apply a subtle SVG noise filter to the main background layers to give the UI a tactile, analog feel.
