import React from 'react';
import Loader from 'components/Loader/Loader';
import getImages from '../../Api/api'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import Button from 'components/Button/Button';

class ImageGallery extends React.Component {
  state = {
    img: [],
    status:'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.inputValue !== this.props.inputValue) {
        this.fetchLoad();
    }
     if (prevProps.page !== this.props.page && this.props.page > 1) {
      this.fetchLoadMore();
    }
  }
  fetchLoad = () => {
    const { inputValue, page } = this.props;

    getImages(inputValue, page)
      .then(response => {
        this.setState({
          images: response.hits,
          status: 'resolve',
        });
      })
      .catch(error => this.setState({ status: 'rejected' }));
  };

  fetchLoadMore = () => {
    const { inputValue, page } = this.props;

    getImages(inputValue, page)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          status: 'resolve',
        }));
      })
      .catch(error => this.setState({ status: 'rejected' }));
  };
  render() {
    const { img, status } = this.state;
    // img && console.log(img.hits)
    // const { name } = this.props;
    //     img && img.hits.map(({ previewURL, id }) => (
    // console.log(previewURL)
    // )
    // )

    // if (status === 'idle') {
    //   return <div>Введіть назву картинки</div>
    // }

    if (status === 'pending') {
      return <Loader />
    }

    // if (status === 'rejected') {
    //   return <h2>{error.message}</h2>
    // }

    // if (img.hits.length=== 0) {
    //   return <h1>Вибачте, картинка {this.props.name}відсутня в нашому сервісі</h1>
    // }

    if (status === 'resolved') {
      return (   <>
        <ul className={css.gallery}>
     
         {img.map(({ id, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                url={largeImageURL}
                tags={tags}
                onClick={this.props.onClick}
              />
            ))}  
      </ul>
             {this.state.images.length !== 0 ? (
            <Button onClick={this.props.loadMoreBtn} />
          ) : (
            alert('No results')
      )
      }
      </>
      );
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
