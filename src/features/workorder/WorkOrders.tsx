import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks'
import { fetchWorkordersAsync ,selectStatus,selectWorkorders, Statuses} from './workorderSlice'
import WorkOrder from './WorkOrder'
function Workorders() {
  const workorders =useAppSelector(selectWorkorders);
  const status= useAppSelector(selectStatus)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchWorkordersAsync());
  },[dispatch])
  let contents;
  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>
  }
  else{
    contents = <div className='card'>
      
         {workorders && workorders.length > 0 && workorders.map(workorder => {
                return <div key={workorder.id} style={{margin:"5em"}}>
                    <WorkOrder 
                      dispatch={dispatch}
                      workorder={workorder}
                    />
                </div>
            })}
    </div>
  }
  return (
    <div style={
      {
        width:'100%',
        height:'100%'
      }
    }>
      {contents}
    </div>
  )
}
export default  Workorders;
