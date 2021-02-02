import React from 'react'
import './Comment.css'

export default function Comment(props){
    const formatDate = (timestamp) =>{
        //split timestamp between date and time
        timestamp = timestamp.split('T')
        const date = timestamp[0]
        //split time apart
        let time = timestamp[1].split(':')
        
        let TOD = 'am'
        //check if hour is less or greater than 12
        if(parseInt(time[0]) > 12){
            //subtract by 12 and conver back to string
            time[0] = (parseInt(time[0]) - 12)
            TOD = 'pm'
        }
        //join time minus miliseconds
        time[2] = time[2].split('.')
        time[2] = time[2][0] + TOD
        time = time.join(':')

        //join date and time together again separated by space
        const newTimestamp = [date, time].join(' ')
        return newTimestamp
    }
    const date = formatDate(props.date)
    return(
        <li>
            <h4>{props.name}</h4>
            <p>{props.comment}</p>
            <p>{date}</p>
        </li>
    )
}