import React, { Component } from "react";
import ColorSquare from '../ColorSquare';
import "./BodyContent.scss";

class BodyContent extends Component {
  render() {
    return (
      <div className={this.props.splitView ? "outer-container split" : "outer-container"}>
        <div className="input-container">
          <div className="color-input">
            <input
              name={"inputValue" + this.props.number}
              type="search"
              placeholder="Color Code (Hex, RGB, or Name)"
              onChange={this.props.handleInputChange}
              value={this.props.inputValue}
              style={{ borderColor: this.props.colorData.contrast }}
            />
            <button
              onClick={this.props.handleSubmit}
              name={"inputValue" + this.props.number}
              data-number={this.props.number}
              style={{
                borderColor: this.props.colorData.contrast,
                backgroundColor: this.props.colorData.contrast,
                color: this.props.colorData.oppositeContrast
              }}
            >
              GO
            </button>
          </div>
          <div
            className="color-name"
            style={{ color: this.props.colorData.contrast }}
          >
            {this.props.colorData.name}
          </div>
        </div>
        <div className="container">
          {this.props.colorData.shades.map((color, index) => {
            return <ColorSquare color={color} key={color + index} />;
          })}
        </div>
      </div>
    );
  }
}

export default BodyContent;