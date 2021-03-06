## 记录

### 一、初始化

1、`npx create-react-app my-react-app`

使用npx命令，快速创建react项目，my-react-app为创建的项目名称

2、在`//github.com`初始化远端工程，将本地新创建的工程与远端工程关联起

`cd my-react-app`

`git remote add origin https://github.com/7986LiChang/my-react-app.git`

如果pull/push不到代码，在gitKraken中强制更新。

### 二、功能描述

> 基础功能

1. tic-tac-toe(三连棋)落子逻辑。

2. 2个玩家交替落子，并判断胜负。

3. 记录玩家历史操作步骤。

4. 允许玩家回退到任意一个历史记录。

> 扩展功能

1. 在游戏历史记录列表显示每一步棋的坐标，格式为 (列号, 行号)。

2. 在历史记录列表中加粗显示当前选择的项目。

3. 使用两个循环来渲染出棋盘的格子，而不是在代码里写死（hardcode）。

4. 添加一个可以升序或降序显示历史记录的按钮。

5. 每当有人获胜时，高亮显示连成一线的 3 颗棋子。

6. 当无人获胜时，显示一个平局的消息。




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

