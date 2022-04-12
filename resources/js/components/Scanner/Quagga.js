import React, { Component } from 'react';

class Quag extends Component {
  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 640,
            height: 480,
            facingMode: 'environment', // or user
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
    Quagga.onDetected(this._onDetected)
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected)
  }

  _onDetected = result => {
    console.log(result.codeResult.code);
    this.props.onDetected(result.codeResult.code);
  }

  render() {
    return <div id="interactive" className="viewport" />
  }
}

export default Quag;
