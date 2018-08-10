import React from 'react';
import ReactDOM from 'react-dom';
import ZoomIn from './buttons/zoom_in';
import ZoomOut from './buttons/zoom_out';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zoomed: false };
    
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.zoomOnClick = this.zoomOnClick.bind(this);

    this.dragImage = new Image(0, 0);
    this.dragImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  }

  componentDidUpdate() {
    this.app.scrollTop = this.image.height;
    this.app.scrollLeft = this.image.width;
  }

  styles() {
    if (this.state.zoomed) {
      return { left: this.image.width, top: this.image.height };
    } else {
      return {};
    }
  }

  handleDrag(e) {
    const { clientX, clientY } = e;
    if (clientX > this.image.width || clientX <= 0) return;
    if (clientY > this.image.height || clientY <= 0) return;

    const diffX = clientX - this.coords.clientX;
    const diffY = clientY - this.coords.clientY;

    this.app.scrollLeft = this.app.scrollLeft - diffX;
    this.app.scrollTop = this.app.scrollTop - diffY;
    this.coords = { clientX, clientY };
  }

  handleDragStart(e) {
    if (!this.state.zoomed) return;
    e.dataTransfer.setDragImage(this.dragImage, 0, 0);
    const { clientX, clientY } = e;
    this.coords = { clientX, clientY };
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
      <main className="container">
        <div className="app" ref={app => this.app = app}>
          <img
            ref={image => this.image = image}
            style={this.styles()}
            className={`hero-image${klass}`}
            onClick={this.zoomOnClick}
            draggable
            onDrag={this.handleDrag}
            onDragStart={this.handleDragStart}
            src="https://bonobos-prod-s3.imgix.net/products/18158/original/SHIRT_ShortSleeve_ZebraRun_JetBlack_hero1.jpg?h=7000&w=7000"
            alt="short sleeve shirt jet black running zebras" />
          <ul className="button-list">
            <ZoomIn zoom={this.zoom(true)}/>
            <ZoomOut zoom={this.zoom(false)}/>
          </ul>
        </div>
      </main>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
