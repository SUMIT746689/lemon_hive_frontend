import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#FFC93E',
      secondary: '#111D5E',
      accent: '#2563EB',
      gray: '#617187',
      gray2: '#F9FAFB',
      background: '#CDCDCD'
    },
    fontSize: {
      heading_1: '140px',
      heading_2: '48px',
      heading_3: '24px',
      heading_4: '20px',
      heading_5: '18px',
      heading_6: '16px',
      heading_7: '14px',
      heading_8: '12px'
    },
    extend: {
      maxWidth: {
        '8xl': '1320px'

      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
export default config
