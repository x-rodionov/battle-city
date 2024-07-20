# 坦克大战复刻版（Battle City Remake）

Game address: https://shinima.github.io/battle-city

Game detailed introduction to Zhihu column article: [https://zhuanlan.zhihu.com/p/35551654](https://zhuanlan.zhihu.com/p/35551654)

The version of the GitHub warehouse is the re -engraved version of the classic tank war. Based on the original material, all kinds of materials are encapsulated into corresponding components with React.The material uses SVG for rendering to show the pixels of the game. You can first adjust the browser to zoom in and then perform the game. Using 200% reduction under 1080p screen is the best.This game uses the front-end technology of the webpage for development. It mainly uses React to display the page. It uses Immutable.js as a data structure tool library, using Redux to manage the game status, and using Redux-Saga/Little-Saga to process complex game logic.

If any bug is found during the game, welcome to mention [issue](https://github.com/shinima/battle-city/issues/new)。

### Development progress:

<details>
  <summary><b>Milestone 0.2 (Have completed 2018-04-16)</b></summary>

- [x] Basic framework of the game
- [x] Single mode
- [x] Exhibition page
- [x] Level editor and custom level management

</details><br>

<details>
  <summary><b>Milestone 0.3 (Have completed 2018-11-03)</b></summary>

- [x] Performance optimization
- [x] Complete game sound effects (there are some small flaws)
- [x] Double mode (completed)

</details><br>

**Milestone 1.0 (look far away /(ㄒ o ㄒ)/~~)**

- [ ] More reasonable computer player
- [ ] Complete design and development documentation
- [ ] Based on WebSocket's multiplayer mode

### Local development

1.  Klong project to the local area
2.  Run `yarn instant` to install dependencies (or use` npm install`)
3.  Run the `yarn start` to open the webpack-dev-server, and open the` localhost: 8080` in the browser
4.  Run `yarn build` to pack the production version, package output under the` distal/`folder

`devConfig.js` It contains some configuration items for development, pay attention to modifying the configuration in the file, you need to restart the Webpack-DEV-Server
