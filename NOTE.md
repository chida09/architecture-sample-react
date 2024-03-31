## Install
* `create-react-app`は非推奨となった

## package.json
* `create-react-app`を実行した時に、なぜ`DevDependencies`が存在しないのか
  * https://github.com/facebook/create-react-app/issues/10395
  * https://stackoverflow.com/questions/44868453/create-react-app-install-devdepencies-in-dependencies-section/44872787#44872787

## Testing
* Install Libraries
  * jest-environment-jsdom
    * JSDOMは、Node.js環境でHTMLとDOMをエミュレートするためのJavaScriptの実装であり、ブラウザ環境を模倣する
    * これにより、ブラウザがない環境でも、DOMを使った操作やブラウザ特有のAPIを利用したテストが可能になる
  * @testing-library
    * https://reffect.co.jp/react/react-test
    * デバッグ: `screen.debug(element)`
  * @testing-library/react
    * コンポーネントの描写と要素を見つけるためのQueryが含まれている
  * @testing-library/user-event
    * Clickなどのユーザイベントに利用される
  * @testing-library/jest-dom
    * Jestの追加のmatchers関数が含まれている
  * References
    * [ReactでTesting Library/Jestを使ってテストを学ぼう](https://reffect.co.jp/react/react-test)
    * https://nextjs.org/docs/pages/building-your-application/testing/jest
* Snapshot Testing
  * `npm run test:fix`で実行
  * __snapshots__ディレクトリが作成され、スナップショットが保存される
  * https://jestjs.io/ja/docs/snapshot-testing
  * https://nextjs.org/docs/app/building-your-application/testing/jest#creating-your-first-test

## Other
* [📚React Libraries You Should Use In 2024](https://reedbarger.medium.com/react-libraries-you-should-use-in-2024-4a9fd422a1bd)
  * client-rendered -> Vite
  * server-rendered -> Next.js
  * static sites -> Remix
