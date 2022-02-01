import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CloudUploadOutlined } from "@ant-design/icons";
import { Area, Point } from "react-easy-crop/types";
import Cropper from "react-easy-crop";

const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [showAdditionalButton, setShowAdditionalButton] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      console.log(croppedArea, croppedAreaPixels);
    },
    []
  );

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
      !showAdditionalButton && setShowAdditionalButton(true);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <ImageUploadContainer>
      <ImageUploadArea>
        {preview ? (
          <Cropper
            image={preview}
            crop={crop}
            zoom={zoom}
            aspect={3 / 4}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
          // <PreviewImage
          //   src={preview}
          //   onClick={() => {
          //     setImage(null);
          //   }}
          //   alt="You"
          // />
        ) : (
          <UploadButton
            onClick={(event) => {
              event.preventDefault();
              fileInputRef?.current?.click();
            }}
          >
            <CloudUploadIcon />
            <span>Click or drag file to this area to upload</span>
          </UploadButton>
        )}
        <HiddenFileInput
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
      </ImageUploadArea>
      {showAdditionalButton && 
        <UploadAnotherButton
          onClick={() => { setImage(null); fileInputRef?.current?.click(); }}
        >
          Upload another photo
        </UploadAnotherButton>
      }
    </ImageUploadContainer>
  );
};

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const UploadAnotherButton = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  color: #404E60;
  background-color: #FAFBFC;
  border: 2px solid #E2E5E8;
  cursor: pointer;
`

const ImageUploadArea = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  background-color: #FAFBFC;
  border: 2px dashed #E2E5E8;
  border-radius: 10px;
`

const HiddenFileInput = styled.input`
  display: none;
`

const UploadButton = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: #404E60;
  inset: 0;
  padding: 0;
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const PreviewImageContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  object-fit: cover;
`

const CloudUploadIcon = styled(CloudUploadOutlined)`
  font-size: 400%;
  color: #448EF7;
`

export default ImageUploader;

