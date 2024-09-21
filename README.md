# redux-practice

Redux による状態管理を試してみる

## Context API と比べてみて

- 実装の容易さはあまり変わらなかった
  - Redux の Slice を使用すれば、Action と Reducer の作成が簡単
- 使用感は Context よりも使いやすさを感じた
  - Context は Context 同士の依存関係を考えることがあるが、Redux は store を一箇所で作成してしまえば気にしなくて良い点は嬉しかった

が、そもそもグローバルステートを単一のサービスで数多く使用することはそれほどなさそう(規模が大きくなってくると、状況は変わってくるかもだが)

ライブラリを使用しなくても良いのであれば、標準の機能を使いたいので初期段階では Context で良さそう

## 参考

- Redux Toolkit により Redux 管理をしやすくする

  - https://qiita.com/__sakito__/items/e446d0f0974f2e12a5f5

- re-ducks パターンによるディレクトリ設計
  - https://blog.wh-plus.co.jp/entry/2021/12/9/000000
  - https://tech.playground.style/javascript/re-ducks/#google_vignette
