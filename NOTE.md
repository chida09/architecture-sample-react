## Install
* `create-react-app`は非推奨となった

## package.json
* `create-react-app`を実行した時に、なぜ`DevDependencies`が存在しないのか
  * https://github.com/facebook/create-react-app/issues/10395
  * https://stackoverflow.com/questions/44868453/create-react-app-install-devdepencies-in-dependencies-section/44872787#44872787

## Testing
* Install
  * https://nextjs.org/docs/pages/building-your-application/testing/jest
  * jest-environment-jsdom
    * JSDOMは、Node.js環境でHTMLとDOMをエミュレートするためのJavaScriptの実装であり、ブラウザ環境を模倣する
    * これにより、ブラウザがない環境でも、DOMを使った操作やブラウザ特有のAPIを利用したテストが可能になる
  * @testing-library
    * https://reffect.co.jp/react/react-test
