// Image.js
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Comment } from '../icons/comment.svg';
import { ReactComponent as Play } from '../icons/play.svg';
import { ReactComponent as Heart } from '../icons/heart.svg';

// eslint-disable-next-line no-lone-blocks
{/* <div class="imageContainer">
  <img class="imageSource" />
  <div class="imgageOverlay"></div>
</div>

.imageContainer {
    position: relative;
  }
   
  .imageSource {
    width: 400px;
    height: 400px;
  }
   
  .imageContainer:hover { --> This means that after the Container is hovered, then, the Overlay div is displayed as block.

    .imgageOverlay {
      display: block;
    }
  }
   
  .imageOverlay {
    display: none;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
} */}
 
const ImgContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  cursor: pointer;
  transition: 0.5s all ease-in;
`;
 
const ImgIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 20px;
 
  svg {
    margin-right: 10px;
  }
`;
 
//The ImgContainer has to be declared before ImgMeta

const ImgMeta = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
 
  ${ImgContainer}:hover & {
    display: flex !important;
  }
`;
 
const Img = styled.img`
  cursor: pointer;
  width: 100%;
`;
 
// The Image function component accepts a prop. That prop is then used in the component itself. 
// The Img component which is an HTML img element styled variable accepts a src attribute 
// which is set to the source value.

function Image({ image }) {
  return (
    <ImgContainer>
      <Img src={image.source} />
      <ImgMeta>
        <ImgIcons>
            {/* If you hover on an Instagram image, you get to see the number of likes, 
            number of comments if it's an image, and number of plays if it's a video. 
            We'll also be replicating that on our version of the Instagram app. */}
          {image.isVideo ? <Play /> : <Heart />} {image.likes}
        </ImgIcons>
        <ImgIcons>
          <Comment /> {image.comments}
        </ImgIcons>
      </ImgMeta>
    </ImgContainer>
  );
}
 
export default Image;