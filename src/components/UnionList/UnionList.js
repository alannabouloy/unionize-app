import React from 'react'
import UnionTab from '../UnionTab/UnionTab'
import './UnionList.css'
import UserContext from '../../contexts/UserContext'

export default function UnionList(props){
    const context = React.useContext(UserContext)
    const unions = context.results.unions.map((union, i) => <li key={i}><UnionTab union={union}/></li>)
    return(
        <div className='union-list'>
            <ul className='unions'>
                 {unions}
            </ul>  
        </div>
    )
}