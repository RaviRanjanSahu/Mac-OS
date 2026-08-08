import React from 'react'
import GithubData from '../../assets/Github.json'
import MacWindows from './MacWindows'
import "./Github.scss"

const GitCard = ({data = {id:1, image:"", title:"", description:"", tags:[], repolink:"", demolink:""}}) => {
  return <div className="card">
    <img src={data.image} alt="" />
    <h1>{data.title}</h1>
    <p className='description'>{data.description}</p>

    <div className="tags">
      {data.tags.map(tag => <p className='tag'>{tag}</p>)}
    </div>

    <div className="urls">
      <a href={data.repolink}>repository</a>
      {data.demolink && <a href= {data.demolink}>Demo Link</a>}
    </div>
  </div>
}

const github = () => {
  return (
    <MacWindows>
      <div className="cards">
        {GithubData.map(project => {
          return <GitCard data = {project} />
        })}
      </div>
    </MacWindows>
  )
}

export default github
