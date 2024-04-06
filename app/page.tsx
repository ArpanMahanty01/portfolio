"use client"
import AppGrid from "./components/AppGrid";
import useStartStore from "./store/Start";
import Start from "./components/StartMenu";

export default function Home() {
  const {startOpen}:any = useStartStore();
  return (
    <main className="bg-background flex-1 flex flex-col bg-cover justify-between">
      <AppGrid/>
      {startOpen?<Start/>:null}
    </main>
  )
}
