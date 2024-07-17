import { useState } from "react";

const Body = ({ item }) => {
  const [full, setFull] = useState(false);
  const [fullDes, setFullDes] = useState(false);
  return (
    <>
      <div className=" bg-slate-400 rounded-lg">
        <div className="p-2 flex">
          <div className="w-[20%] mr-2 flex justify-center items-center font-bold lg:text-3xl">
            {/* <p className="inline-block bg-slate-600 text-white font-bold rounded-lg p-2 text-xl"> */}
                 # {item.id}
        
          </div>
          <div className="w-[100%]">
            <div onClick={()=>setFull(!full)} className={`Paragraph bg-blue-200 rounded-lg p-1  overflow-y-scroll font-bold lg:text-3xl ${!full?'max-h-7 lg:max-h-10':'h-fit'}`}>
             {item.title}
            </div>
            <div onClick={()=>setFullDes(!fullDes)} className={`Paragraph mt-2 bg-blue-200 rounded-lg p-1 overflow-y-scroll lg:text-3xl ${!fullDes?'max-h-7 lg:max-h-10':'h-fit'}`}>
              {item.body}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
