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
    window.scrollTo(this.image.width * 0.75, this.image.height);
  }

  styles() {
    if (this.state.zoomed) {
      return { left: this.image.width * 0.75, top: this.image.height };
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
    const klass = this.state.zoomed ? ' zoomed' : '';
    return (
      <div className="app">
        <img
          ref={image => this.image = image}
          style={this.styles()}
          className={`hero-image${klass}`}
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
