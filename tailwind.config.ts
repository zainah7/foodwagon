import type { Config } from 'tailwindcss'
import { colors, typography, spacing, shadows, borderRadius, breakpoints } from './src/styles/design-tokens'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        success: colors.success,
        error: colors.error,
        neutral: colors.neutral,
        background: colors.background,
        text: colors.text,
        border: colors.border,
        categories: colors.categories,
        
        // Alias for common usage
        orange: colors.primary,
        yellow: colors.secondary,
      },
      fontFamily: {
        sans: typography.fontFamily.primary,
        display: typography.fontFamily.display,
        mono: typography.fontFamily.mono,
      },
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      letterSpacing: typography.letterSpacing,
      spacing: spacing,
      boxShadow: shadows,
      borderRadius: borderRadius,
      screens: breakpoints,
      
      // Custom utilities
      backdropBlur: {
        xs: '2px',
      },
      
      // Animation customizations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      
      // Custom gradients
      backgroundImage: {
        'gradient-hero': `linear-gradient(135deg, ${colors.secondary[400]} 0%, ${colors.primary[500]} 100%)`,
        'gradient-card': `linear-gradient(145deg, ${colors.background.primary} 0%, ${colors.neutral[50]} 100%)`,
      },
    },
  },
  plugins: [
    // Custom utilities plugin
    function({ addUtilities }: any) {
      const newUtilities = {
        '.text-gradient': {
          'background': `linear-gradient(135deg, ${colors.primary[500]} 0%, ${colors.secondary[400]} 100%)`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.card-hover': {
          'transition': 'all 0.3s ease',
          '&:hover': {
            'transform': 'translateY(-4px)',
            'box-shadow': shadows.cardHover,
          },
        },
        '.btn-primary': {
          'background-color': colors.primary[500],
          'color': colors.text.inverse,
          'padding': `${spacing[3]} ${spacing[6]}`,
          'border-radius': borderRadius.md,
          'font-weight': typography.fontWeight.medium,
          'transition': 'all 0.2s ease',
          '&:hover': {
            'background-color': colors.primary[600],
            'transform': 'translateY(-1px)',
            'box-shadow': shadows.md,
          },
          '&:active': {
            'transform': 'translateY(0)',
            'box-shadow': shadows.sm,
          },
        },
        '.btn-secondary': {
          'background-color': colors.secondary[400],
          'color': colors.text.primary,
          'padding': `${spacing[3]} ${spacing[6]}`,
          'border-radius': borderRadius.md,
          'font-weight': typography.fontWeight.medium,
          'transition': 'all 0.2s ease',
          '&:hover': {
            'background-color': colors.secondary[500],
            'transform': 'translateY(-1px)',
            'box-shadow': shadows.md,
          },
          '&:active': {
            'transform': 'translateY(0)',
            'box-shadow': shadows.sm,
          },
        },
        '.btn-outline': {
          'background-color': 'transparent',
          'color': colors.primary[500],
          'border': `1px solid ${colors.primary[500]}`,
          'padding': `${spacing[3]} ${spacing[6]}`,
          'border-radius': borderRadius.md,
          'font-weight': typography.fontWeight.medium,
          'transition': 'all 0.2s ease',
          '&:hover': {
            'background-color': colors.primary[50],
            'transform': 'translateY(-1px)',
            'box-shadow': shadows.md,
          },
          '&:active': {
            'transform': 'translateY(0)',
            'box-shadow': shadows.sm,
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

export default config
