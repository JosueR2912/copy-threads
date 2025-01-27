import Image from "next/image";
import Header from "./components/header"
import Main from "./components/main"
import { QueryProvider } from './components/usequery';


export default function Home() {
  return (
    <>
     <QueryProvider>
     <Header/>
     <Main/>
    </QueryProvider>
    </>
    
    
    
  );
}