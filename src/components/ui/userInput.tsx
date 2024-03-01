import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useWorthStore } from "@/lib/store"

export function UserInput({ title }: { title: string }) {
    function capatilizeFirstLetter() {
        return title.charAt(0).toUpperCase() + title.slice(1)
    
    }
    function toCamelCase(str: string) {
        let words = str.split(/\s+/);

        // Capitalize the first letter of each word except the first one
        for (let i = 1; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }

        // Join the words together and return
        return words.join('');
    }

    const update = useWorthStore((state) => state[`update${toCamelCase(title)}` as keyof typeof state])


    

    return (
        <div className="flex items-center gap-8">
            <Label htmlFor={title} className="w-full ml-5">{capatilizeFirstLetter()}</Label>
            <Input id={title} type="number" placeholder="$0.00" onChange={(e) => update(e.currentTarget.value as unknown as number)}/>
        </div>
    )
}