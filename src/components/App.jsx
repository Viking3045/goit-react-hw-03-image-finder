import React from 'react';
// import { ToastContainer} from 'react-toastify';
// import css from './Searchbar/Searchbar.module.css'
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

export class App extends React.Component {
state={name:''}


  handleFormSubmit = name => {
    this.setState({ name })
  }
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery name={this.state.name} />
        {/* <ToastContainer autoClose={5000}/> */}
     </div>
   )
 }
};



//  state = {
//     img: null,
//     loading:false,
//   }
//   componentDidMount() {
//   //   this.setState({ loading: true })
//   //   fetch(
//   //     'https://pixabay.com/api/?q=cat&page=1&key=34850803-a728da3cec220ddd15679bd1c&image_type=photo&orientation=horizontal&per_page=12'
//   //   )
//   //     .then(res => res.json())
//   //     .then(img => this.setState({ img })).finally(()=>{this.setState(({loading:false}))});
//   //   //  console.log(this.state.img.hits)
//   // }
//   render() {
//     // console.log(this.state.img.hits)
//     return (
//       <div>
//         {/* <header className={css.searchbar}>
//             <form className={css.form}>
//               <button type="submit" className={css.button}>
//                 <span className={css.buttonLabel}>Search</span>
//     </button>

//     <input
//                 className={css.input}
//       type="text"
//       // autocomplete="off"
//       // autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
//         </header>
//         {this.state.loading && <h1>Завантажуємо</h1>}
//         {this.state.img && (
//           <ul className={css.gallery}>
//             <li>likes:{this.state.img.total}</li>
//       </ul>
//         )}
//         */}
//          <Searchbar/>
//         {/* <ImageGallery/>  */}
//       </div>
//     );
//   }