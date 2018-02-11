import { Observable } from 'rxjs/Observable'
import { ajax } from 'rxjs/observable/dom/ajax'
import { map } from 'rxjs/operators'
import { path } from 'ramda'

export const searchForShow = (seatchTerm: string) =>
  ajax({
    url: `http://api.tvmaze.com/search/shows?q=${seatchTerm}`,
    method: 'GET',
    crossDomain: true
  }).pipe(map(response => response.response), map(mapShows))

function mapShows(tvMazeShows) {
  return tvMazeShows.map(show => mapShow(show.show))
}

function mapShow(tvMazeShow) {
  return {
    id: tvMazeShow.id,
    title: tvMazeShow.name,
    poster: path(['image', 'medium'], tvMazeShow),
    summary: tvMazeShow.summary
  }
}
