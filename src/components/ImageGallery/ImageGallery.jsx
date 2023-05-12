import React from 'react';
import Loader from 'components/Loader/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

class ImageGallery extends React.Component {
  state = {
    img: null,
    error: null,
    status:'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      //   console.log('1prevProps:', prevProps.name);
      //   console.log('2pokemonInfo:', this.props.name);
      //   console.log('щось змінилось');
      this.setState({ status:'pending'});
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${this.props.name}&page=1&key=34850803-a728da3cec220ddd15679bd1c&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(responce => {
            if (responce.ok) {
              return responce.json()
            }
            return Promise.reject(new Error('Всепропало2222'))
          })
          .then(img => this.setState({ img, status:'resolved' }))
          .catch(error => this.setState({ error, status:'rejected' }))
          // .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }
  render() {
    const { img, error, status } = this.state;
    // img && console.log(img.hits)
    // const { name } = this.props;
    //     img && img.hits.map(({ previewURL, id }) => (
    // console.log(previewURL)
    // )
    // )

    if (status === 'idle') {
      return <div>Введіть назву картинки</div>
    }

    if (status === 'pending') {
      return <Loader />
    }

    if (status === 'rejected') {
      return <h2>{error.message}</h2>
    }

    if (img.hits.length=== 0) {
      return <h1>Вибачте, картинка {this.props.name}відсутня в нашому сервісі</h1>
    }

    if (status === 'resolved') {
      return <ul className={css.gallery}>
          <ImageGalleryItem  picture={img.hits}  />
        </ul>
    }
    // return (
    //   <div>
    //     {/* {error && <h2>{error.message}</h2>} */}

    //     {/* {loading && <Loader />} */}
    //     {/* {!name && <div>Введіть назву картинки</div>} */}
    //     <ul className={css.gallery}>
    //       {/* {img && <li>
    //         <img src={img.hits.imageURL} width='300' alt="" />
    //               </li>
    //       } */}

    //       {img &&
    //         img.hits.map(({ previewURL, id, tag }) => (
    //           <li key={id}>
    //             <img src={previewURL} width="300" height="300" alt={tag} />
    //           </li>
    //         ))}
    //     </ul>
    //   </div>
    // );
  }
}

export default ImageGallery;
