import React from 'react'
import '../Componets/coment/comment.css'
import act from '../pages/act.jpg'
import act2 from '../pages/act2.jpg'
export const ContactUs = () => {
  return (
    <div className='efecto'>
      <div className='container-info'>   
      <h1 className='titulo-text'>Direct consequences of man-​made climate change include</h1>
      <img className='inicio' width={550} src={act} alt="pic"   />
      <li className='lista'>rising maximum temperatures </li>
      <li className='lista'>rising minimum temperatures  </li>
      <li className='lista'>rising sea levels  </li>
      <li className='lista'>higher ocean temperatures  </li>
      <li className='lista'> an increase in heavy precipitation (heavy rain and hail) </li>
      <li className='lista'>increase in the proportion of violent tropical cyclones </li>
      <li className='lista'>increase in aridity and drought</li>
      <li className='lista'>decline in Arctic sea ice and snow cover  </li>

     </div>
     <div className='container-info'>   
      <h1 className='titulo-text'>Indirect consequences of climate change</h1>
      <img className='inicio' width={550} src={act2} alt="pic"   />
     <li className='lista'> an increase in hunger and water crises, especially in developing countries  </li>
     <li className='lista'>threat to livelihoods from floods and forest fires  </li>
     <li className='lista'>health risks due to increase in frequency and intensity of heat extremes    </li>
     <li className='lista'>economic implications of dealing with secondary damage related to climate change   </li>
     <li className='lista'>increasing spread of pests and pathogens  </li>
     <li className='lista'>loss of biodiversity due to limited adaptability and adaptability speed of flora and fauna</li>   
     <li className='lista'>ocean acidification due to increased HCO3 concentrations in the water as a consequence of increased CO2 concentrations </li>
     <li className='lista'>the need for adaptation in all areas (e.g. agriculture, forestry, energy, infrastructure, tourism, etc.) </li>

     </div>
    </div>
  )
}
