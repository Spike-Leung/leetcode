此仓库用于记录 leetcode 刷题题解。

这么做是因为：

- 可以使用熟悉的编辑器去编写
- 可以用 jest 自己写用例去覆盖，更好地去测试
- 督促自己去记录当时的解题思路

### 做题

  - 进入到 solutions 目录
  - `pnpm p`
  - 根据提示生成模板，在 `solutions/problems/` 目录下，根据序号放到对应目录，包含 `code.js`, `code.test.js`, `README.org`
  - 在 `code.js` 中编码，`code.test.js` 写测试用例， `README.org` 记录解题思路
  - `pnpm test 114-` 测试序号为 114 的题目

### 查看题解

  可以在 [leetcode solution](https://leetcode-spike-leung.vercel.app/)
  这个页面查看当前的题解，把 solutions 里面关于 leetcode 的部分提取出
  来，做了一个简单的页面用于呈现。

### 本地运行 web 页面
  - 安装 [pnpm](https://pnpm.io/)
  - `pnpm i`
  - `pmpm run dev`

### TODO
  - [ ] 适配手机屏幕
  - [ ] 搜索 (fuse)
  - [ ] 优化加载速度
  - [ ] 版本发布 (尝试一下 changset)
