import React, { Component } from 'react'
import "../styles/TableContent.css"

export default class TableContent extends Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">Capital</th>
            <th className="text-center">Region</th>
            <th className="text-center">Flag</th>
          </tr>
        </thead>
        <tbody>
          {this.props.countries.map(country => (
            <tr key={country.name}>
              <td className="text-center">{country.name}</td>
              <td className="text-center">{country.capital}</td>
              <td className="text-center">{country.region}</td>
              <td className="text-center">
                <img style={{ width: 50 }} src={country.flag} alt={country.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}
