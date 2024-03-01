
import { useWorthStore } from "@/lib/store"
import { Separator } from "@/components/ui/separator"
import { UserInput } from "./userInput"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export function NetworthInputs() {
    const updateChecking = useWorthStore((state) => state.updateChecking)
    const updateSavings = useWorthStore((state) => state.updateSavings)
    const updateInvestments = useWorthStore((state) => state.updateInvestments)
    const updateVehicles = useWorthStore((state) => state.updateVehicles)
    const updateRealEstate = useWorthStore((state) => state.updateRealEstate)
    const updatePersonalProperty = useWorthStore((state) => state.updatePersonalProperty)
    const updateOtherAssets = useWorthStore((state) => state.updateOtherAssets)
    const updateCreditCard = useWorthStore((state) => state.updateCreditCard)
    const updateAutoLoans = useWorthStore((state) => state.updateAutoLoans)
    const updateStudentLoans = useWorthStore((state) => state.updateStudentLoans)
    const updatePersonalLoans = useWorthStore((state) => state.updatePersonalLoans)
    const updateMortgage = useWorthStore((state) => state.updateMortgage)
    const updateOtherLiabilities = useWorthStore((state) => state.updateOtherLiabilities)

   

    return (
        <section className="border mx-5 mt-5 px-4 py-2 rounded-md">
            <div>
                <h3 className="font-extrabold tracking-wide mb-2 text-lg">Assets</h3>
                <div className="flex gap-2 flex-col pb-2">
                <div className="flex items-center gap-8">
                    <Label htmlFor="checking" className="w-full ml-5">Checking</Label>
                    <Input id="checking" type="number" placeholder="$0.00"/>
                </div>
                <div className="flex items-center gap-8">
                    <Label htmlFor="savings" className="w-full ml-5">Savings</Label>
                    <Input id="savings" type="number" placeholder="$0.00"/>
                </div>
                <div className="flex items-center gap-8">
                    <Label htmlFor="investments" className="w-full ml-5">Investments</Label>
                    <Input id="investments" type="number" placeholder="$0.00"/>
                </div>
                <div className="flex items-center gap-8">
                    <Label htmlFor="vehicles" className="w-full ml-5">Vehicles</Label>
                    <Input id="vehicles" type="number" placeholder="$0.00"/>
                </div>
                <div className="flex items-center gap-8">
                    <Label htmlFor="realEstate" className="w-full ml-5">Real Estate</Label>
                    <Input id="realEstate" type="number" placeholder="$0.00"/>
                </div>
                <div className="flex items-center gap-8">
                    <Label htmlFor="personalProperty" className="w-full ml-5">Personal Property</Label>
                    <Input id="personalProperty" type="number" placeholder="$0.00"/>
                </div>
                <div className="flex items-center gap-8">
                    <Label htmlFor="otherAssets" className="w-full ml-5">Other Assets</Label>
                    <Input id="otherAssets" type="number" placeholder="$0.00"/>
                </div>











                </div>
            </div>
            <Separator/>
            <div>
                <h3 className="font-extrabold tracking-wide mb-2 text-lg pt-2">Liabilities</h3>
                <div className="flex gap-2 flex-col pb-2">
                <div className="flex items-center gap-8">
                    <Label htmlFor="creditCard" className="w-full ml-5">Credit Card</Label>
                    <Input 
                    id="creditCard" 
                    type="number" 
                    placeholder="$0.00" 
                />
                    </div>
                <div className="flex items-center gap-8">
                    <Label htmlFor="autoLoans" className="w-full ml-5">Auto Loans</Label>
                    <Input id="autoLoans" type="number" placeholder="$0.00"/>
                    </div>
                <div className="flex items-center gap-8">
                    <Label htmlFor="studentLoans" className="w-full ml-5">Student Loans</Label>
                    <Input id="studentLoans" type="number" placeholder="$0.00"/>
                    </div>
                <div className="flex items-center gap-8">
                    <Label htmlFor="personalLoans" className="w-full ml-5">Personal Loans</Label>
                    <Input id="personalLoans" type="number" placeholder="$0.00"/>
                    </div>
                <div className="flex items-center gap-8">
                    <Label htmlFor="mortgage" className="w-full ml-5">Mortgage</Label>
                    <Input id="mortgage" type="number" placeholder="$0.00"/>
                    </div>
                <div className="flex items-center gap-8">
                    <Label htmlFor="otherLiabilities" className="w-full ml-5">Other Liabilities</Label>
                    <Input id="otherLiabilities" type="number" placeholder="$0.00"/>
                    </div>
                    

                </div>
            </div>
           
      </section>
    )
}