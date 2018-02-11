import * as React from 'react'
import { connect } from 'react-redux'
import { unsubscribeToShow } from '../../store/shows/show.actions'
import { Show } from './show'

function ShowsView({ shows, unsubscribe }) {
  return shows.map(show => (
    <Show show={show} onClick={unsubscribe(show.id)} key={show.id} />
  ))
}

const mapDispatchToProps = dispatch => ({
  unsubscribe: id => event => dispatch(unsubscribeToShow(id))
})

const mapStateToProps = state => ({ shows: state.shows.shows })

export const Shows = connect(mapStateToProps, mapDispatchToProps)(ShowsView)
