import styled from "styled-components";
import logoGoIT from "../../assets/logoGoIT.png";
import backgroundImagex1 from "../../assets/background-image-x1.png";
import backgroundImagex2 from "../../assets/background-image-x2.png";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  max-width: 380px;
  height: 460px;
  padding-top: 178px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #5736a3;
  background-image: url(${logoGoIT}), url(${backgroundImagex1}),
    linear-gradient(to bottom, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  background-repeat: no-repeat;
  background-position: 20px 20px, 36px 28px, 100%;
  background-size: 76px 22px, 308px 168px, 100%;
  box-shadow: -2.58px 6.87px 20.62px rgba(0, 0, 0, 0.23);

  @media screen and (max-width: 379px) {
    min-width: 300px;
  }

  @media screen and (min-width: 380px) {
    width: 380px;
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 30px * 2) / 3);
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${logoGoIT}), url(${backgroundImagex2}),
      linear-gradient(to bottom, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  }

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 8px;
    left: 0px;
    top: 214px;
    background: #ebd8ff;
    box-shadow: inset 0 3.44px 2.58px #fbf8ff,
      0 3.44px 3.44px rgba(0, 0, 0, 0.06), inset 0 -1.72px 3.44px #ae7be3;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  display: block;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgb(235, 216, 255);

  @media (min-width: 768px) {
    width: 62px;
    height: 62px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background-color: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4.39163px 4.39163px,
    rgb(174, 123, 227) 0px -2.19582px 4.39163px inset,
    rgb(251, 248, 255) 0px 4.39163px 3.29372px inset;
  border-radius: 85.9232px;
  z-index: 1;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: 26px auto 36px;
`;

export const StyledText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24.38px;
  color: rgba(235, 216, 255, 1);
  text-transform: uppercase;
  margin: 0;
`;
