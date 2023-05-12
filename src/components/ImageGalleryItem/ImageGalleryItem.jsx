import React from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component {
  render() {
    return (this.props.picture.map(({ id, tag, previewURL }) => (
      <li key={id} id={id} className={css.galleryItem}>
        <img src={previewURL}  width="300" height="300" alt={tag} />
      </li>
    )
       
    )
      
     
    );
  }
}
ImageGalleryItem.defaultProps = {
  picture: [],
};

export default ImageGalleryItem;
