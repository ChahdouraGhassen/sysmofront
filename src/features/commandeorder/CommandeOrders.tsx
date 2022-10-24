import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import CommandeOrder from './CommandeOrder';
import { selectStatus,selectCommandeorders, fetchCommandeOrdersAsync,Statuses } from './commandeorderSlice';

function CommandeOrders() {
  const commandeorders =useAppSelector(selectCommandeorders);
  const status= useAppSelector(selectStatus)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCommandeOrdersAsync());
  },[dispatch])
  let contents;
  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>
  }
  else{
    contents = <div >
      <div >
        {commandeorders && commandeorders.length > 0 && commandeorders.map(commandeorder => {
                return <div key={commandeorder.id} >
                   <CommandeOrder 
                    dispatch={dispatch}
                    commandeorder={commandeorder}
                   />
                </div>
            })}
      </div>
    </div>
  }
  return (
    <div>
        {contents}
    </div>
  )
}

export default CommandeOrders