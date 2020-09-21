import React from "react";
// import "./styles.css";label
import {
  DivFormContainer,
  FormSendPhoto,
  HeaderInput,
  InputText,
  DivSelectImage,
  InputButtonSend,
  InputSelectImage,
  LabelInputSelectImage
} from "./style";

const UploadImage = () => {
  let [inputValue, setInputValue] = React.useState(null);

  const handleChangeInputFile = (event) => {
    setInputValue(event.target.files[0].name);
    console.log(event.target.files[0].name);
  };

  return (
    <DivFormContainer>
      <FormSendPhoto
        method="POST"
        enctype="multipart/form-data"
        action="http://localhost:5000/user/upload-photo"
      >
        <p>
          <HeaderInput>USUÁRIO</HeaderInput>
          <br />
          <InputText type="text" name="username" />
        </p>
        <p>
          <HeaderInput>SENHA</HeaderInput>
          <br />
          <InputText type="password" name="password" />
          <br />
          <DivSelectImage>
            <LabelInputSelectImage for="input-select-image">Selecione a foto</LabelInputSelectImage>
            <InputSelectImage
              type="file"
              accept="image/*"
              id="input-select-image"
              onChange={handleChangeInputFile}
              className="input-select-image"
              name="photo"
            />
            <span>{inputValue}</span>
          </DivSelectImage>
        </p>
        <InputButtonSend type="submit" className="input-button-send" />
      </FormSendPhoto>
    </DivFormContainer>
  );
};

export default UploadImage;
