import {  useState } from "react";
import ParaInput from "./components/ParaInput/ParaInput";
import Paras from "./components/Paras/Paras";


function App() {
  const [paraNum, setParaNum] = useState(0);
  return (
    <div className="w-full h-screen font-poppins">
      <div className="mt-10 w-full flex flex-col justify-center items-center">
        <h1 className="text-center pb-2 text-3xl md:text-4xl lg:text-5xl font-bold">
          Tired of boring lorem ipsum?
        </h1>
      </div>
      <ParaInput paraNum={paraNum} setParaNum={setParaNum} />
      <Paras paraNum={paraNum} />
    </div>
  );
}

export default App;
