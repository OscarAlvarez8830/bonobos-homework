import React from 'react';
import ReactDOM from 'react-dom';
import ZoomIn from './buttons/zoom_in';
import ZoomOut from './buttons/zoom_out';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zoomed: false };
    this.zoomOnClick = this.zoomOnClick.bind(this);
  }

  componentDidUpdate() {
    window.scrollTo(this.app.width, this.app.height);
  }

  styles() {
    if (this.state.zoomed) {
      return { transform: 'scale(3)', left: this.app.width, top: this.app.height };
    } else {
      return {};
    }
  }

  zoom(level) {
    return () => this.setState({ zoomed: level });
  }

  zoomOnClick() {
    this.state.zoomed ? this.zoom(false)() : this.zoom(true)();
  }

  render() {
    return (
      <div className="app" ref={app => this.app = app}>
        <img
          style={this.styles()}
          className="hero-image"
          onClick={this.zoomOnClick}
          src="https://bonobos-prod-s3.imgix.net/products/18158/original/SHIRT_ShortSleeve_ZebraRun_JetBlack_hero1.jpg?h=7000&w=7000"
          alt="short sleeve shirt jet black running zebras" />
        <ul className="button-list">
          <ZoomIn zoom={this.zoom(true)}/>
          <ZoomOut zoom={this.zoom(false)}/>
        </ul>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
