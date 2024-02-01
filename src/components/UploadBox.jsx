import React, { useState } from "react";
import uploadIcon from "../assets/UploadIcon1.png";
import excel from "../assets/Microsoft_Office_Excel.png";

const UploadBox = ({handleShowTable}) => {
  const [fileName, setFileName] = useState("");
  const [fileLabel, setFileLabel] = useState("browse");
  const [color, setColor] = useState('text-blue-700')

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmit] = useState(false);

  function updateFileLabel(e) {
    if (e.target.files.length > 0) {
      setFileLabel("Remove");
      setColor('text-red-600')
      setFileName(e.target.files[0].name);
    } else {
      setFileLabel("browse");
      setColor("text-blue-700")
      setFileName("");
    }
}

function removeFile() {
    setFileLabel("browse");
    setColor("text-blue-700")
    setFileName("");
    document.getElementById("file-upload").value = ""; // Clear the selected file
  }

  const handleUpload = () => {
    if(fileName){

        setLoading(true)
        setTimeout(()=>{
            setSubmit(true)
            setLoading(false)
            removeFile()
            handleShowTable()
        }, 2000)
    }
    else{
        alert("select file first")
    }
  };

  return (
    <div className="w-[90%] md:w-[60%] m-auto bg-white p-1 rounded-md">
      <div className="h-[400px] border m-4 mb-5 rounded font-semibold flex flex-col justify-center">
        <div className={`${submitted? "filter" : ""}`}>
          <img src={excel} className="m-auto" />
          <span id="text-label">
            {fileName ? `File: ${fileName} ` : "Drop your excel sheet here or "}
          </span>
          <label
            htmlFor="file-upload"
            className={`${color} cursor-pointer ${fileLabel}`}
            onClick={removeFile}
          >
            {fileLabel}
          </label>
          <input
            type="file"
            id="file-upload"
            hidden
            onChange={updateFileLabel}
            disabled={submitted}
          />
        </div>
      </div>

      <div className="flex">
        <button
          className={`flex-grow bg-[#605BFF] text-white ${submitted? "bg-[#a29ffc]" : ""}`}
          onClick={handleUpload}
          disabled={submitted}
        >
          {loading ? (
            <div className="loader m-auto"></div>
          ) : (
            <div className="flex justify-center gap-1">
              <img src={uploadIcon} />
              Upload
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default UploadBox;
