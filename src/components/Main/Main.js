import React from 'react'
import Album from '../Album/Album'

function Main() {
  return (
    <main role='main'>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Photos and Videos</h1>
          <p className="lead text-muted">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod laudantium ab quas fugiat eum error at, officia rem tempora est.
          </p>
          <p>
            <button className='btn btn-primary my-2' onClick="authenticate().then(loadClient)">authorize and load</button>
            <button className='btn btn-secondary ml-2 my-2' onClick="execute()">execute</button>
          </p>
        </div>
      </section>
      <Album />
    </main>
  )
}

export default Main