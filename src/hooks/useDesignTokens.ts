import { colors, typography, spacing, shadows, borderRadius } from '../styles/design-tokens';

/**
 * Custom hook for accessing design tokens in React components
 * Provides a consistent way to use design tokens throughout the app
 */
export const useDesignTokens = () => {
// Helper types
type ColorObject = { [key: string]: string | ColorObject };

return {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  
  // Helper functions
  getColor: (path: string) => {
    const keys = path.split('.');
    let value: ColorObject | string = colors;
      
      for (const key of keys) {
        if (typeof value === 'object' && value !== null && key in value) {
          const nestedValue = value[key];
          if (typeof nestedValue === 'string') {
            value = nestedValue;
            break;
          } else if (typeof nestedValue === 'object') {
            value = nestedValue as ColorObject;
          } else {
            return path;
          }
        } else {
          return path; // Return original path if not found
        }
      }
      
      return typeof value === 'string' ? value : path;
    },
    
    getFontFamily: (family: keyof typeof typography.fontFamily) => {
      return typography.fontFamily[family].join(', ');
    },
    
    // Common component styles
    getButtonStyles: (variant: 'primary' | 'secondary' | 'outline' = 'primary') => {
      const baseStyles = {
        padding: `${spacing[3]} ${spacing[6]}`,
        borderRadius: borderRadius.md,
        fontWeight: typography.fontWeight.medium,
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        border: 'none',
        fontSize: typography.fontSize.base,
        fontFamily: typography.fontFamily.primary.join(', '),
      };
      
      const variantStyles = {
        primary: {
          backgroundColor: colors.primary[500],
          color: colors.text.inverse,
          '&:hover': {
            backgroundColor: colors.primary[600],
            transform: 'translateY(-1px)',
            boxShadow: shadows.md,
          },
        },
        secondary: {
          backgroundColor: colors.secondary[400],
          color: colors.text.primary,
          '&:hover': {
            backgroundColor: colors.secondary[500],
            transform: 'translateY(-1px)',
            boxShadow: shadows.md,
          },
        },
        outline: {
          backgroundColor: 'transparent',
          color: colors.primary[500],
          border: `1px solid ${colors.primary[500]}`,
          '&:hover': {
            backgroundColor: colors.primary[50],
            transform: 'translateY(-1px)',
            boxShadow: shadows.md,
          },
        },
      };
      
      return { ...baseStyles, ...variantStyles[variant] };
    },
    
    getCardStyles: (hoverable = false) => {
      return {
        backgroundColor: colors.background.primary,
        border: `1px solid ${colors.border.primary}`,
        borderRadius: borderRadius.lg,
        boxShadow: shadows.card,
        transition: 'all 0.3s ease',
        ...(hoverable && {
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: shadows.cardHover,
          },
        }),
      };
    },
    
    // Responsive breakpoints
    breakpoints: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1280px)',
      '2xl': '(min-width: 1536px)',
    },
  };
};

/**
 * Hook for accessing CSS custom properties
 */
export const useCSSVariables = () => {
  const getCSSVar = (variableName: string) => {
    if (typeof window !== 'undefined') {
      return getComputedStyle(document.documentElement)
        .getPropertyValue(`--${variableName}`)
        .trim();
    }
    return null;
  };
  
  const setCSSVar = (variableName: string, value: string) => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty(`--${variableName}`, value);
    }
  };
  
  return { getCSSVar, setCSSVar };
};

/**
 * Hook for theme management
 */
export const useTheme = () => {
  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      html.classList.toggle('dark');
    }
  };
  
  const setTheme = (theme: 'light' | 'dark' | 'system') => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      
      if (theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        html.classList.toggle('dark', prefersDark);
      } else {
        html.classList.toggle('dark', theme === 'dark');
      }
      
      localStorage.setItem('theme', theme);
    }
  };
  
  const getTheme = (): 'light' | 'dark' | 'system' => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'system';
    }
    return 'system';
  };
  
  return { toggleDarkMode, setTheme, getTheme };
};
