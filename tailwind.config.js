/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      screens: {
  
        'sm': '300px',
        // => @media (min-width: 640px) { ... }
  
        'md': '648px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '768px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1024px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1280px',
        
        '3xl': '1500px',
        // => @media (min-width: 1536px) { ... }


      },
 
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
