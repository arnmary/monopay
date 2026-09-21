
import Header from "@/app/components/layout/Header"


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans bg-(--background)">
        <Header/>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
       <h1 className="text-red-700 text-6xl">hello</h1>
      </main>
    </div>
  );
}
