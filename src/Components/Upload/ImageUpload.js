import React, { useRef, useState, useEffect } from 'react';

import Button from '../UiElements/Button';
import './ImageUpload.css';

const ImageUpload = (props) => {
  const [previewUrl, setPreviewUrl] = useState();

  const filePickerRef = useRef();

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  return (
    <div className="container col-lg-2 my-4">
      <div className="form ">
        <input
          id={props.id}
          ref={filePickerRef}
          style={{ display: 'none' }}
          type="file"
          accept=".jpg,.png,.jpeg"
          onChange={pickedHandler}
        />
        <div className={`image-upload ${props.center && 'center'}`}>
          <div className="image-upload__preview m-auto  ">
            {previewUrl && <img src={previewUrl} alt="Preview" />}
            {!previewUrl && <p>please pick an image</p>}
          </div>
          <Button className="btn" type="button" onClick={pickImageHandler}>
            PICK IMAGE
          </Button>
        </div>
        {!isValid && <p>{props.errorText}</p>}
      </div>
    </div>
  );
};

export default ImageUpload;
