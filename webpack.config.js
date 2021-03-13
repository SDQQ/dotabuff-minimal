const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const {
  config
} = require('process')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ]
  }
  return config
}
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = (extra) => {
  const loaders = [{
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      },
    },
    'css-loader',
  ]
  if (extra) {
    loaders.push(extra)
  }
  return loaders
}

module.exports = {
  context: path.resolve(__dirname, 'src'), // от какой папки отталкиваться webpack
  mode: 'development',
  entry: {
    main: './js/index.js', //точка входа
  },
  output: {
    filename: filename('js'), //В name подставится название точки входа и хэш в contenthash 
    path: path.resolve(__dirname, 'dist') //куда сохранять выходные данные 
  },
  resolve: {
    extensions: ['.js', '.json', '.png'], // Говорим с какими форматами работать по умолчанию (В импортах не надо писать расширение)
    alias: {
      '@img': path.resolve(__dirname, 'src/img'),
    }
  },
  optimization: optimization(),
  //  {
  //   splitChunks: {
  //     chunks: 'all' // выносит одинаковые импорты в отдельные файлы
  //   }
  // },
  devtool: isDev ? 'source-map' : '',//карты
  devServer: {
    port: 4200, //создание локального сервера
    hot: isDev
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html', //показываем где лежит html файл
      // minify:{
      //   collapseWhitespace:isProd, 
      // }

    }),
    new CleanWebpackPlugin(), // очищаем папку dist
    new CopyWebpackPlugin({ // копируем файлы откуда => куда
      patterns: [{
          from: path.resolve(__dirname, 'src/img'),
          to: path.resolve(__dirname, 'dist/img'),
        },
        {
          from: path.resolve(__dirname, './src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, 'src/webp-img'),
          to: path.resolve(__dirname, 'dist/webp-img'),
        },
      ]
    }),
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ],
  module: { // Работа с импортируемыми модулями (import './getData')
    rules: [{
        test: /\.css$/,
        //    use: ['style-loader', 'css-loader'] Вставит стили прямо в код хтмл
        use: cssLoaders()

      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
        // options: {
        //   outputPath: 'images', //выходной путь 
        // },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  }
}