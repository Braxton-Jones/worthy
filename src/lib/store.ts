import { type } from "os";
import { create } from "zustand";


type State = {
    checking: number;
    savings: number;
    investments: number;
    vehicles: number;
    realEstate: number;
    personalProperty: number;
    otherAssets: number;
    creditCard: number;
    autoLoans: number;
    studentLoans: number;
    personalLoans: number;
    mortgage: number;
    otherLiabilities: number;
}

type Actions = {
    updateChecking: (checking: number) => void;
    updateSavings: (savings: number) => void;
    updateInvestments: (investments: number) => void;
    updateVehicles: (vehicles: number) => void;
    updateRealEstate: (realEstate: number) => void;
    updatePersonalProperty: (personalProperty: number) => void;
    updateOtherAssets: (otherAssets: number) => void;
    updateCreditCard: (creditCard: number) => void;
    updateAutoLoans: (autoLoans: number) => void;
    updateStudentLoans: (studentLoans: number) => void;
    updatePersonalLoans: (personalLoans: number) => void;
    updateMortgage: (mortgage: number) => void;
    updateOtherLiabilities: (otherLiabilities: number) => void;
}

export const useWorthStore = create<State & Actions>()((set) => ({
    checking: 0,
    savings: 0,
    investments: 0,
    vehicles: 0,
    realEstate: 0,
    personalProperty: 0,
    otherAssets: 0,
    creditCard: 0,
    autoLoans: 0,
    studentLoans: 0,
    personalLoans: 0,
    mortgage: 0,
    otherLiabilities: 0,
    updateChecking: (checking) => set(() => ({ checking: checking })),
    updateSavings: (savings) => set(() => ({ savings: savings })),
    updateInvestments: (investments) => set(() => ({ investments: investments })),
    updateVehicles: (vehicles) => set(() => ({ vehicles: vehicles })),
    updateRealEstate: (realEstate) => set(() => ({ realEstate: realEstate })),
    updatePersonalProperty: (personalProperty) => set(() => ({ personalProperty: personalProperty })),
    updateOtherAssets: (otherAssets) => set(() => ({ otherAssets: otherAssets })),
    updateCreditCard: (creditCard) => set(() => ({ creditCard: creditCard })),
    updateAutoLoans: (autoLoans) => set(() => ({ autoLoans: autoLoans })),
    updateStudentLoans: (studentLoans) => set(() => ({ studentLoans: studentLoans })),
    updatePersonalLoans: (personalLoans) => set(() => ({ personalLoans: personalLoans })),
    updateMortgage: (mortgage) => set(() => ({ mortgage: mortgage })),
    updateOtherLiabilities: (otherLiabilities) => set(() => ({ otherLiabilities: otherLiabilities })),


    
}));
