import React, { Component } from "react";
// import "./styles.css";

export class Upload extends Component {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };



  render() {
    const { profileImg } = this.state;
    return (
      <div className="my-16">
        <h1 className="align-center content-center items-center justify-center place-content-center mx-20">
          Add your Image
        </h1>
        <div>
          <img
            className="w-28 h-28 content-center items-center justify-center place-content-center mx-20 my-2"
            src={profileImg}
            alt="img"
            id="img"
          />
        </div>
        <input
          type="file"
          accept="image/*"
          name="image-upload"
          id="input"
          onChange={this.imageHandler}
          className="content-center items-center justify-center place-content-center bg-gray-100 border-2 border-gray-500"
        />
        <div>
          <label
            htmlFor="input"
            className="content-center items-center justify-center place-content-center mx-16 font-semibold underline"
          >
            Choose your Photo
          </label>
        </div>
      </div>
    );
  }
}

export default Upload;
