import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Button } from "@/components/ui/button"
import { useTheme } from "./components/theme-provider"
import {NetworthInputs} from "./components/ui/net-worth-inputs"
import { useWorthStore } from "./lib/store"

function App() {
  const { setTheme } = useTheme()
  const checking = useWorthStore((state) => state.checking)
  const savings = useWorthStore((state) => state.savings)

  return (
    <main className="border py-5">
      {/* Header Section */}
      <section className="flex border items-center gap-2 justify-between m-5 p-2 rounded-md">
          <div>
            <h1 className="font-extrabold tracking-wide text-xl">Worthy</h1>
            <p className="text-sm italic">How much are you worth?</p>
          </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>Theme</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </section>

      {/* Graphs */}
      <section className="mx-5 py-2 rounded-md flex items-center justify-center">
      <Carousel className="max-w-full">
      <CarouselContent>
        <CarouselItem>
          <Card>
            <CardHeader>
              <CardTitle>Current Networth</CardTitle>
              <CardDescription>
                This is your current networth. It is calculated by subtracting your liabilities from your assets.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Networth: $0</p>

            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
        <Card>
            <CardHeader>
              <CardTitle>Assets / Liabilities</CardTitle>
              <CardDescription>
                Your liabilities are 10% of your assets.
                <p>Checking : {checking}</p>
                <p>Savings: {savings}</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Networth: $0</p>

            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
        <Card>
            <CardHeader>
              <CardTitle>Distribution of Assets</CardTitle>
              <CardDescription>
                See what makes you rich .
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Networth: $0</p>

            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
        <Card>
            <CardHeader>
              <CardTitle>Distribution of Liabilities</CardTitle>
              <CardDescription>
                See what makes you poor.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Networth: $0</p>

            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

      </section>
      



      {/* Inputs */}
      <NetworthInputs/>
    </main>
  )
}

export default App
