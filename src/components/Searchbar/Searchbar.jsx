import React from "react";
import css from './Searchbar.module.css'
// import { toast } from "react-toastify";


class Searchbar extends React.Component{
  state = {
  name: ''
  }
  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase()})
  }
  
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() === '') {
      alert('Введіть назву картинки')
      return;
    }
    this.props.onSubmit(this.state.name)
    this.setState({name:''})
  }

    render() {
        return (
            <header className={css.searchbar}>
            <form onSubmit={this.handleSubmit} className={css.form}>
              <button type="submit" className={css.button}>
                <span className={css.buttonLabel}>Search</span>
    </button>

    <input
                className={css.input}
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
      // autocomplete="off"
      // autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}



export default Searchbar