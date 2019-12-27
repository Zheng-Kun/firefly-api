import React from 'react'
import ReactDom from 'react-dom'
import BackApp from './back-app.jsx'
import Config from '../../common/component/fe-config'
if (module.hot) { module.hot.accept() } // 热更新
// 环境变量配置
new Config({
  env: "pro",
  // dev: 'dev'
});

ReactDom.render(
  <BackApp />,
  document.getElementById("body-box")
)
