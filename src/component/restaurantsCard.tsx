import React from 'react'
import { IMAGE_CARD } from '../utils/Api'
interface Props {
    restaurant: any
}

const restaurantsCard:React.FC<Props> = ({restaurant}) => {
    return (
        <div>
              <div key={restaurant.info.id}
               className="border-1 bg-gray-200  flex flex-col flex-wrap rounded-2xl h-[500px] p-3.5 hover:bg-gray-400 hover:text-white" >
                <img alt='image' height={10} width={300} className='rounded-2xl'
                 src={ IMAGE_CARD + restaurant.info.cloudinaryImageId 
                }/>
              <p className='font-bold'>{restaurant.info.name}</p>
              <p>{restaurant.info.areaName}</p>
              <p>{restaurant.info.avgRating}</p>
              <p>{restaurant.info.costForTwo}</p>  
              </div>
        </div>
    )
}

//  export const withPromoted = (RestaurantsCard)=>{
// return (props) =>{
// return(
//     <div>
//         <label>Promoted</label>
//         <RestaurantsCard {...props} />
//     </div>
// )
// }
// }

export default restaurantsCard;