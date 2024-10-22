import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			secondary_v_shadow: '#FBE1B0',
  			error: '#ef4444 ',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		margin: {
  			m_small: '4px',
  			m_base: '12px',
  			m_primary: '16px',
  			m_secondary: '24px',
  			m_lg: '32px',
  			m_xl: '60px'
  		},
  		gap: {
  			gap_base: '16px',
  			gap_primary: '20px'
  		},
  		fontSize: {
  			text_small: '13px',
  			text_base: '18px',
  			text_primary: '30px',
  			text_secondary: '36px',
  			text_lg: '16px',
  			text_xl: '20px'
  		},
  		padding: {
  			input_padding: '8px',
  			button_padding: '12px',
  			padding_base: '32px',
  			padding_small: '8px',
  			padding_medium: '12px',
  			padding_md: '20px',
  			padding_lg: '60px',
  			padding_xl: '120px'
  		},
  		borderRadius: {
  			rounded_primary: '8px',
  			rounded_secondary: '16px',
  			rounded_4px: '4px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		height: {
  			h_base: '20px',
  			h_medium: '48px',
  			h_110vh: '110vh'
  		},
  		width: {
  			w_base: '20px',
  			w_medium: '48px',
  			w_drawer: '300px',
  			w_logo: '144px',
  			w_445px: '445px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
