import React from "react";
import css from './Searchbar.module.css'
// import { toast } from "react-toastify";


class Searchbar extends React.Component{
  state = {
  input: ''
  }
  handleInputChange = event => {
    this.setState({ input: event.target.value.toLowerCase()})
  }
  
  handleSubmit = event => {
     event.preventDefault();
    this.props.getInputValue(this.state.input);
    this.setState({ input: '' });
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
                value={this.state.input}
                onChange={this.handleInputChange}
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