import classNames from 'classnames'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const AboutGallery = () => (
  <div>
    <p>Please use the mouse to operate this page.</p>
  </div>
)

const AboutList = () => (
  <div>
    <p>Please use the mouse to operate this page. There will be a stutter when switching the paging, please wait patiently.</p>
    <p>Custom level data is stored in the browser cache.</p>
  </div>
)

const AboutEditor = () => (
  <div>
    <p>Please use the mouse to operate this page.</p>
    <p>Configure the name and enemy of the level in Config Tab. Note that the name of the level cannot be the same as the name of the game comes with the customs.</p>
    <p>
      exist map tab
      Configure the level map. After selecting a brush, press the mouse and drag in the map to complete the map configuration.
      Brick-Wall and The shape of Steel-Wall can be adjusted.
    </p>
  </div>
)

const AboutGame = () => (
  <div>
    <p>
      <b>ESC</b>
      ：Pause the game
      <br />
      <b>Back (in browser history)</b>
      ：Back to the level selection page
	  <br />
      <b>F</b>
      ：Fullscreen mode
    </p>
    <p>
      Player 1
      <br />
      <b>WASD</b>
      ：move
      <br />
      <b>E</b>
      ：fire
    </p>
    <p>
      Player 2
      <br />
      <b>Arrow key</b>
      ：move
      <br />
      <b>/</b>
      ：fire
    </p>
  </div>
)

const AboutChoose = () => (
  <div>
    <p className="bold">A Previous level</p>
    <p className="bold">D Next level</p>
    <p className="bold">E Start game</p>
    <p>This page also supports mouse control</p>
  </div>
)

const AboutTitle = () => (
  <div>
    <p>
      Please use the latest Chrome browser and adjust the zoom ratio of the browser appropriately
      (set to 200% at 1080p Substant) to get the best game experience.
    </p>
    <p className="bold">W Previous option</p>
    <p className="bold">S Next option</p>
    <p className="bold">E Confirm option</p>
    <p>This page also supports mouse control</p>
  </div>
)

export default class About extends React.Component {
  state = { hide: false }

  onHide = () => {
    this.setState({ hide: true })
  }

  render() {
    const { hide } = this.state
    return (
      <div className={classNames('about', { hide })}>
        <button className="close" onClick={this.onHide}>
          hide
        </button>
        <p>
          Current version <br />
          {COMPILE_VERSION}
        </p>
        <p>
          Compile time <br />
          {COMPILE_DATE}
        </p>
        <Switch>
          <Route path="/list" render={AboutList} />
          <Route path="/editor" render={AboutEditor} />
          <Route path="/gallery" render={AboutGallery} />
          <Route exact path="/gameover" render={AboutGame} />
          <Route path="/choose" render={AboutChoose} />
          <Route path="/stage" render={AboutGame} />
          <Route render={AboutTitle} />
        </Switch>
      </div>
    )
  }
}
