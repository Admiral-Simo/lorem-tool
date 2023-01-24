import React, {  useState } from "react";

const ParaInput = ({paraNum, setParaNum}) => {
    const [value, setValue] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        setParaNum(value)
    }
  return (
    <div className="mx-auto w-fit">
      <form className="flex items-start space-y-1 lg:space-y-0 justify-start lg:items-center lg:mt-5  flex-col lg:flex-row" onSubmit={handleSubmit}>
        <label htmlFor="para">Paragraph : </label>
        <input
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          type="text"
          placeholder="number of paragraphs"
          className="bg-gray-200 p-1  lg:ml-5"
        />
        <button type="submit" className="bg-blue-400 text-blue-900 p-1">
          Generate
        </button>
      </form>
      ;
    </div>
  );
};

export default ParaInput;
