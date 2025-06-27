import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#F0D4B0',
					foreground: '#000000'
				},
				secondary: {
					DEFAULT: '#1A1A1A',
					foreground: '#ffffff'
				},
				accent: {
					DEFAULT: '#F5F5DC',
					foreground: '#1a1a1a'
				},
				success: {
					DEFAULT: '#FDF6E3',
					foreground: '#1a1a1a'
				},
				anthracite: {
					DEFAULT: '#2a2a2a',
					foreground: '#ffffff'
				},
				luxury: {
					gold: '#F0D4B0',
					darkGold: '#E8C4A0',
					lightGold: '#F8E8D8',
					black: '#0A0A0A',
					charcoal: '#1C1C1C',
					cream: '#FFFEF7',
					pearl: '#F8F6F0',
					platinum: '#E8E6E0'
				},
				artdeco: {
					gold: '#F0D4B0',
					darkGold: '#E8C4A0',
					bronze: '#F0D4B0',
					black: '#0A0A0A',
					charcoal: '#1C1C1C',
					ivory: '#FFFFF0',
					cream: '#F5F5DC'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				'source-sans': ['Source Sans Pro', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
				'cinzel': ['Cinzel', 'serif'],
				'cormorant': ['Cormorant Garamond', 'serif'],
				'poiret': ['Poiret One', 'cursive']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'glow': {
					'0%, 100%': {
						textShadow: '0 0 5px #F0D4B0, 0 0 10px #F0D4B0, 0 0 15px #F0D4B0'
					},
					'50%': {
						textShadow: '0 0 10px #F0D4B0, 0 0 20px #F0D4B0, 0 0 30px #F0D4B0'
					}
				},
				'scroll-slow': {
					'0%': {
						transform: 'translateY(0)'
					},
					'100%': {
						transform: 'translateY(-50%)'
					}
				},
				'scroll-slow-reverse': {
					'0%': {
						transform: 'translateY(-50%)'
					},
					'100%': {
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'shimmer': 'shimmer 2s linear infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'scroll-slow': 'scroll-slow 60s linear infinite',
				'scroll-slow-reverse': 'scroll-slow-reverse 60s linear infinite'
			},
			backgroundImage: {
				'artdeco-pattern': `
					radial-gradient(circle at 25% 25%, #F0D4B0 2px, transparent 2px),
					radial-gradient(circle at 75% 75%, #F0D4B0 2px, transparent 2px),
					linear-gradient(45deg, transparent 49%, #F0D4B0 49%, #F0D4B0 51%, transparent 51%)
				`,
				'artdeco-lines': `
					repeating-linear-gradient(
						90deg,
						transparent,
						transparent 10px,
						#F0D4B0 10px,
						#F0D4B0 11px
					)
				`
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
