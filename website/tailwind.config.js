module.exports = {
  mode: "jit", // Enable Just-In-Time mode for faster builds
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src directory
    "./src/app/**/*.{js,jsx,ts,tsx}", // Include files in the app directory
    "./src/components/**/*.{js,jsx,ts,tsx}", // Include files in the components directory
  ],
  theme: {
    extend: {}, // Extend the default theme if needed
  },
  plugins: [], // Add plugins here if required
};
