import React, { Component } from 'react';
import './Scanner.css';

class Quag extends Component {
  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 320,
            height: 640,
            facingMode: 'environment',
          },
        },
        locator: {
          patchSize: 'medium',
          halfSample: true,
        },
        numOfWorkers: 4,
        decoder: {
          readers: ['ean_reader'],
        },
        locate: true,
      },
      function(err) {
        if (err) {
          return console.log(err)
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start()
      },
    )
    Quagga.onDetected(this._onDetected);
    Quagga.stop()
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected)
  }

  _onDetected = result => {
    console.log(result.codeResult.code);
    this.props.onDetected(result.codeResult.code);
  }

  render() {
    return <div id="interactive" className="viewport camera" />
  }
}

export default Quag;
