import React, {
  useContext,
  createContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { AppReducer } from "./AppReducer";
import {
  SET_LOADER,
  SET_INITIALSTATE,
  TOGGLE_SIDEBAR,
  REVERSE_LOADING,
  ADD_CARGO_DETAILS_ERROR,
  ADD_CARGO_DETAILS_SUCCESS
  
} from "./actions";



const initialState = {
  showAlert: false,
  alertText: "",
  alertType: "",
  isVerified: false,
  isUserToken: false,
  page: 1,
  totalSongs: 0,
  numOfPages: 1,
  isloading: true,
  isreloaded: false,
  isAdminLogon: false,
  PendingSongs: "",
  ApprovedSongs: "",
  totalDownloads: "",
  isSideBarReduce: false,
};

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [parcel, setParcel] = useState({ parcelType: "" });
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [currentStep, setStep] = useState(1);
  const [vesselData, setVesselData] = useState([]);
  const [cargoData, setCargoData] = useState({});
  const [cargoData2, setCargoData2] = useState({});
  const [finalData, setFinalData] = useState({});
  const [isCompleted, setIsCompleted]= useState(false)
  const router = useRouter();

  // add single cargo detail

  const addSingleParcelDetails = async ({vesselData }) => {
    try {
    const { data } = await axios.post(
      `http://localhost:3001/api/v1/upload/singleParcelDetails`,
      { vesselData }
    );
    if(data){
        dispatch({type: ADD_CARGO_DETAILS_SUCCESS})
    }
    
  }
  catch(error){
    dispatch({type: ADD_CARGO_DETAILS_ERROR,payload: { msg: error.response.data.msg }})

  }


  };

// add doubleParcelDetails

  const addDoubleParcelDetails = async ({vesselData  }) => {
    try {
    const { data } = await axios.post(
      `http://localhost:3001/api/v1/upload/doubleParcelDetails`,
      { vesselData  }
    );
 if(data){
  dispatch({type: ADD_CARGO_DETAILS_SUCCESS})
 }
  }
  catch(error){
    dispatch({type: ADD_CARGO_DETAILS_ERROR,payload: { msg: error.response.data.msg }})
  }
  };

  // reverse loading

  const reverseLoading = () => {
    dispatch({ type: REVERSE_LOADING });
  };

  //toggle sidebar 

  const toggleSideBar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const setLocalStorage = () => {
    dispatch({ type: SET_INITIALSTATE });
  };

  const Spinner = () => {
    dispatch({ type: SET_LOADER });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        currentStep,
        setStep,
        cargoData,
        cargoData2,
        parcel,
        isCompleted,
        setIsCompleted,
        setParcel,
        setCargoData2,
        setCargoData,
        finalData,
        setFinalData,
        addSingleParcelDetails,
        addDoubleParcelDetails,
        vesselData,
        setVesselData,
        setLocalStorage,
        reverseLoading,
        toggleSideBar
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
