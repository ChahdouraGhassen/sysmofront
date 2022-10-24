import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import AddCommandeOrder from './AddCommandeOrder';
import { selectStatus,selectCommandeorders, fetchCommandeOrdersAsync,Statuses } from './commandeorderSlice';

function AddCommandeOrders() {
    const addcommandeorders =useAppSelector(selectCommandeorders);
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
            {addcommandeorders && addcommandeorders.length > 0 && addcommandeorders.map(addcommandeorder => {
                    return <div key={addcommandeorder.id} >
                       <AddCommandeOrder 
                        dispatch={dispatch}
                        addcommandeorder={addcommandeorder}
                       />
                    </div>
                })}
          </div>
        </div>
      }
  return (
    <div> {contents}</div>
  )
}

export default AddCommandeOrders