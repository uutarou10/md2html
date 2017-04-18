# md2html
## コレ何
MarkDownで書いた講義メモとかをHTMLに一括で変換するgulpfile。  
画像とかも一応出力フォルダにコピーされるはず。

## 使い方
Node.jsが導入済みの環境で、`$ npm install`を実行すると各種ライブラリが導入されます。

gulpfile.jsの1行目の定数srcに.mdファイルがあるディレクトリのパスを入れれば入力ディレクトリを変更できます。(初期設定は./src)

`$ npm start`で出力されます。

## なにやってんの
1. MarkDownファイルをhtmlに変換
2. templete/templete.jadeのbodyに変換したhtmlを流す
3. minify処理

## 使ったライブラリなど
* gulp
* gulp-layout
* gulp-markdown
* gulp-minify-html
* jade

また、CSSは[GitHubスタイル](https://gist.github.com/andyferra/2554919)を。