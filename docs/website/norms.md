# 开发规范

## JavaScript
[Airbnb JavaScript](https://github.com/airbnb/javascript) 编码规范


## CSS
[BEM](http://getbem.com/) 规范

## Git
### 分支规范
主仓库遵循使用 Git Flow 规范，新组件分支从 `develop checkout`：[《A successful Git branching model》](https://nvie.com/posts/a-successful-git-branching-model/)

如果是贡献组件，则从 `develop checkout` ， 分支如：`feature/button`

### commit规范
使用的提交规范：[@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)

每次提交会自动触发提交验证

- 使用工具 commitizen 协助规范 git commit 信息
- fix & feat 的提交会被用来生成 changelog
- 提交会触发 git pre-commit 检查，修复提示的 ESLint 错误


## 参考
- https://tdesign.tencent.com/miniprogram/develop
- https://tdesign.tencent.com/starter/docs/react/develop-rules