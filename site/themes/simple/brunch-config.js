var theme = 'simple';

exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: `js/${theme}.js`
    },
    stylesheets: {
      joinTo: `css/${theme}.css`
    }
  },

  // Path configuration
  paths: {
    // Dependencies and current project directories to watch
    watched: ["src"],
    // Where to compile files to
    public: "./"
  },

  // Configure your plugins
  plugins: {
    postcss: {
      processors: [
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss')('./tailwind.js'),
        require('autoprefixer')(),
        require('csswring')()
      ]
    }
  },

  npm: {
    enabled: true
  },

  modules: {
    wrapper: false
  }
};
