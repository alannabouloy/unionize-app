import React from 'react'
import UnionTab from '../UnionTab/UnionTab'
import Pagination from '../Pagination/Pagination'
import './UnionList.css'

export default function UnionList(props){
    const unions = props.unions.map((union, i) => <li key={i}><UnionTab union={union}/></li>)
    return(
        <div className='union-list'>
            {unions}
            <Pagination/>
        </div>
    )
}