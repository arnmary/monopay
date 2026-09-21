import Image from "next/image"

export default function GettingButton() {
  return (
    <div className="bg-(--background) flex flex-row items-center gap-2 rounded-3xl border-2 gradient-border py-2 px-4">
      <Image src="/logo_mini.svg" alt="Mini logo Monopay App" width={15} height={15}/>
      <span className="gradient-text">Get Monopay</span>
    
    </div>
  )
}
