let environment = {
  plugins: ['tailwindcss', 'postcss-preset-env']
}

if (process.env.RAILS_ENV === 'production') {
  environment.plugins.push('@fullhuman/postcss-purgecss', {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
  })
}

module.exports = environment