import { Button } from '@mui/material';
import React from 'react'
import { useAppContext } from "../context/AppContext";
const ReceivingForm = () => {
  const { setStep,userData,setUserData,isSideBarReduce, toggleSideBar, showAlert } = useAppContext();

  return (
    <div>ReceivingForm
      <Button onClick={()=>setStep(3)}>Next</Button>
    </div>
  )
}

export default ReceivingForm