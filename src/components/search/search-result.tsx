import * as React from 'react'

export function SearchResults({ results, onClick }) {
  return (
    <div>
      {results.map(result => (
        <figure className="figure" onClick={() => onClick(result)} key={result.id}>
          <img className="figure-img img-fluid img-rounded" src={result.poster} />
          <figcaption className="figure-caption">{result.title}</figcaption>
        </figure>
      ))}
    </div>
  )
}
