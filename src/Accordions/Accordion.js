import React, { useState } from 'react'

export default function Accordion({accordionData}) {
  const [accordionIds,setAccordionIds]=useState([])
  const handlerAccordion=(id)=>
  {
    setAccordionIds((prev)=>
    {
     return accordionIds.includes(id)?
      accordionIds.filter((accid)=>accid!==id):[...prev,id];
    })
  }
  return (
    <>
    { accordionData && accordionData.map(({id,title,description})=>
   (
    <>
    <div className='accordion' key={id}>
    <div className='accordion-title' onClick={()=>handlerAccordion(id)}>
      <h3>
{title}
      </h3>
    </div>

{
  accordionIds?.map((acc_id)=>
  (
    acc_id ===id &&
 ( <div className='accordion-description'>
  <h3>
  {description}
  </h3>
</div>)
)
  )
}
    
  </div>
  </>
   )
    )}
    </>
  )
}
