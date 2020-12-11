# eslint-config-exem

- eslint-config-exem은 exem 코딩컨벤션 lint 룰 셋입니다.
- eslint-config-exem은 [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) 룰 셋을 기준으로 작성되었습니다

## Install

```
$ npm install eslint eslint-config-exem --save-dev
```

## Usage

`.eslintrc.js` 파일을 루트 디렉토리에 생성해주세요.

```javascript
// .eslintrc.js
module.exports = {
  extends: 'exem',
  rules: {
    // 프로젝트 적용할 룰
  },
};
```

## EXEM JavaScript Style Guide

[JavaScript Style Guide]()

## License

This software is licensed under the [MIT License](https://github.com/ex-em/eslint-config-exem/blob/master/LICENSE).
