import * as React from 'react'

export function SearchResults({ results, onClick }) {
  if (!(Array.isArray(results) && results.length > 0)) {
    return <h3>No Result</h3>
  }

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
