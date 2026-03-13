import React from 'react'
import RightCard from './RightCard'
const RightContent = (props) => {
    return (
        <div className='h-full p-6 w-2/3 flex flex-nowrap gap-10 overflow-auto rounded-4xl'>
            {props.users.map(function (elem, index) {
                return <RightCard key={index} img={elem.img} id={index + 1} tag={elem.tag} intro={elem.intro} />
            })}

        </div>
    )
}

export default RightContent
