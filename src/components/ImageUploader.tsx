import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <form>
      {preview ? (
        <img
          src={preview}
          style={{ objectFit: "cover" }}
          onClick={() => {
            setImage(null);
          }}
          alt="You"
        />
      ) : (
        <button
          onClick={(event) => {
            event.preventDefault();
            fileInputRef?.current?.click();
          }}
        >
          Add Image
        </button>
      )}
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        accept="image/*"
        onChange={(event) => {
          if (!event.target.files?.length) return;
          const file = event.target.files[0];
          if (file && file.type.substring(0, 5) === "image") {
            setImage(file);
          } else {
            setImage(null);
          }
        }}
      />
    </form>
  );
};

const ImageUploadForm = styled.form`
  width: 100%;
  height: 100%;
  max-height: 400px;
`


export default ImageUploader;

