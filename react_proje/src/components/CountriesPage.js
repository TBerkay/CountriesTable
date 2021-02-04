import React, { Component } from 'react'
import axios from "axios"
import TableContent from "./TableContent"
import "../styles/CountriesPage.css"

const URL = "https://restcountries.eu/rest/v2/all";

export default class CountriesPage extends Component {
  
  state = {
    countries: [],
    searchCountry: ""
  }

  handleChange = (event) => {
    this.setState({ searchCountry: event.target.value.toLowerCase() })
  }

  changeCountry = () => {
    return this.state.countries.filter(country => country.capital.toLowerCase().includes(this.state.searchCountry.toLowerCase()))
  }

  async componentDidMount() {
    try {
      const response = await axios.get(URL)
      const data = await response.data
      this.setState({ countries: data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>Countries Table</h1>
          </div>
        </div>
        <div className="row searchBox">
          <div className="col-lg-6">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search Capital" onChange={this.handleChange}/>
            </div>
          </div>
        </div>
        <div className="row tableContent">
          <TableContent countries={this.changeCountry()} />
        </div>
      </div>

    )
  }
}
