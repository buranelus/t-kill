# tweetを消すためのコマンドラインツール(仮)
```shell
  npm install
```

## 実装ずみ
- tweet削除(dotenvを利用したローカルのみの実装)
  1. `.env` を作成する
  2. `kill.js` 内の `process.env.HOGE` の `HOGE` を `.env` に記述
    example: `HOGE="test1111test"`
  3. `node kill.js` を実行

## 実装予定
- 会話形でtoken,screen_nameを聞いてtweetを削除する
