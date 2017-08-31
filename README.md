環境構築

* Node.js

Node.js はサーバーサイドの JavaScript 実行環境です。 アプリを作るだけでなく、JavaScript をビルドする際にも必要になります。

Node.js を導入する場合、Ruby で言う rbenv のようなバージョン管理ツールを使うのが便利です。 nvm, nodebrew, nodenv, nodeenv などたくさんありますが、どれも基本的な機能は同じなので、好みで選んで下さい。 ここでは一番普及していると思われる nvm で説明します。

* nvm を使ったインストール

https://github.com/creationix/nvm#installation に従ってインストール後、nvm --version で確認できます。 以下は nvm を使って node 6.9.5 をインストールする例です。

nvm install v6.9.5
nvm use v6.9.5

# 6.9.5 をデフォルトで使うようにする
nvm alias default v6.9.5


* Yarn

通常 Node.js をインストールすると npm というパッケージ管理ツールがついてきます。 npm は便利ですが、インストールが遅い・Ruby で言う Gemfile.lock の概念がない (不十分) と言った欠点があります。 Yarn は、これらの欠点をある程度補ってくれる、npm の代替ツールです。

https://yarnpkg.com/en/docs/install に従ってインストールして下さい。 成功した場合 yarn --version でバージョンが表示されます。

以下は Mac の例です。

brew install yarn

以下の方法でとりあえず動くreactサンプルが作成可能です。
$yarn create react-app react_test
create-react-test というのが↓のようにあれば、↑のようにコマンド実行してできる。
https://www.npmjs.com/package/create-react-app
