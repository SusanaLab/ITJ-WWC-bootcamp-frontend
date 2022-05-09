import React from 'react'
import FeaturedPost from '../Componets/FeaturedPost'
import '../Componets/coment/comment.css'
import fly from '../pages/fly.jpg'
export const JoinOurTeam = () => {
  return (
    <div className='container-info'>
  <h1 className='titulo-text'>What Is Climate Change?</h1>
<p className='container-p'>Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, such as through variations in the solar cycle. But since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil and gas.

Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun’s heat and raising temperatures.

Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane. These come from using gasoline for driving a car or coal for heating a building, for example. Clearing land and forests can also release carbon dioxide. Landfills for garbage are a major source of methane emissions. Energy, industry, transport, buildings, agriculture and land use are among the main emitters.

 </p>
 <img className='inicio' src={fly} alt="pic"   />
    </div>
  )
}
