import * as React from 'react'
import { connect } from 'react-redux'
import { searchForShow } from '../../util/search-show'
import { subscribeToShow } from '../../store/shows/show.actions'
import { SearchField } from './search-field'
import { SearchResults } from './search-result'

type SearchState = {
  inputValue: string
  searchResult: object[]
}

type SearchProps = {
  subscribe: (show) => void
}

class SearchComponent extends React.Component<SearchProps, SearchState> {
  state = {
    inputValue: '',
    searchResult: []
  }

  onInputChange = (value: string) => {
    this.setState({
      inputValue: value,
      searchResult: this.state.searchResult
    })
    this.searchForShow(value)
  }

  searchForShow(value: string) {
    searchForShow(value).subscribe(results =>
      this.setState({
        inputValue: value,
        searchResult: results
      })
    )
  }

  render() {
    return (
      <div>
        <SearchField value={this.state.inputValue} onChange={this.onInputChange} />
        <SearchResults onClick={this.props.subscribe} results={this.state.searchResult} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  subscribe: show => dispatch(subscribeToShow(show))
})

export const Search = connect(undefined, mapDispatchToProps)(SearchComponent as any)
