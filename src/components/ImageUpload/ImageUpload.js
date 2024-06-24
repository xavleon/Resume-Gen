import React from "react";
import Files from "react-files";

import { useDispatch } from "react-redux";

import "./ImageUpload.css";
import { changeAbout } from "../../store/aboutSlice";

const ImageUpload = ({ setImage }) => {
  const dispatch = useDispatch();

  const handleChange = (files) => {
    // LOGIC TO HANDLE FILE CHANGE
    setImage(files[0].preview.url);

    dispatch(
      changeAbout({
        name: "picture",
        value: files[0].preview.url,
      })
    );
  };

  const handleError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  return (
    <div className="files">
      <Files
        className="files-dropzone"
        onChange={handleChange}
        onError={handleError}
        accepts={["image/png", "image/jpeg"]}
        maxFileSize={10000000}
        minFileSize={0}
        clickable
      >
        Upload Image
      </Files>
    </div>
  );
};

export default ImageUpload;
