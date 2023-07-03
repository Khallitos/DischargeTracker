import React, { useContext, createContext, useState, useReducer } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface Parcel {
  parcelType: string;
}

interface CargoData {
  [key: string]: any;
}

interface FinalData {
  [key: string]: any;
}

interface AppState {
  showAlert: boolean;
  alertText: string;
  alertType: string;
  isVerified: boolean;
  isUserToken: boolean;
  page: number;
  totalSongs: number;
  numOfPages: number;
  isLoading: boolean;
  isReloaded: boolean;
  isAdminLogon: boolean;
  PendingSongs: string;
  ApprovedSongs: string;
  totalDownloads: string;
  isSideBarReduce: boolean;
}

interface AppContextType {
  currentStep: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  cargoData: CargoData;
  cargoData2: CargoData;
  parcel: Parcel;
  setParcel: React.Dispatch<React.SetStateAction<Parcel>>;
  setCargoData2: React.Dispatch<React.SetStateAction<CargoData>>;
  setCargoData: React.Dispatch<React.SetStateAction<CargoData>>;
  finalData: FinalData;
  setFinalData: React.Dispatch<React.SetStateAction<FinalData>>;
  addSingleCargoDetails: (payload: { vesselData: any; finalData: any }) => Promise<void>;
  vesselData: any[];
  setVesselData: React.Dispatch<React.SetStateAction<any[]>>;
  setLocalStorage: () => void;
  reverseLoading: () => void;
  setDoubleParcelType: () => void;
  setSingleParcelType: () => void;
  setMultiParcelType: () => void;
} 

type AppAction =
  | { type: "SET_LOADER" }
  | { type: "UNSET_USERNAME" }
  | { type: "SET_INITIALSTATE" }
  | { type: "TOGGLE_SIDEBAR" }
  | { type: "REVERSE_LOADING" }
  | { type: "SET_DOUBLE_PARCEL" }
  | { type: "SET_SINGLE_PARCEL" }
  | { type: "SET_MULTI_PARCEL" };

const initialState: AppState = {
  showAlert: false,
  alertText: "",
  alertType: "",
  isVerified: false,
  isUserToken: false,
  page: 1,
  totalSongs: 0,
  numOfPages: 1,
  isLoading: true,
  isReloaded: false,
  isAdminLogon: false,
  PendingSongs: "",
  ApprovedSongs: "",
  totalDownloads: "",
  isSideBarReduce: false,
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC = ({ children }) => {
  const [parcel, setParcel] = useState<Parcel>({ parcelType: "" });
  const [state, dispatch] = useReducer<AppReducerType>(AppReducer, initialState);
  const [currentStep, setStep] = useState<number>(1);
  const [vesselData, setVesselData] = useState<any[]>([]);
  const [cargoData, setCargoData] = useState<CargoData>({});
  const [cargoData2, setCargoData2] = useState<CargoData>({});
  const [finalData, setFinalData] = useState<FinalData>({});
  const router = useRouter();

  // add single cargo detail
  const addSingleCargoDetails = async ({ vesselData, finalData }: { vessel
