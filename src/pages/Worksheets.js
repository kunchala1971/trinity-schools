import React, { useState } from "react";

const pdfFolders = {
  LKG: [
    "LKG_1.pdf", "LKG_2.pdf", "LKG_3.pdf", "LKG_4.pdf", "LKG_5.pdf", "LKG_6.pdf",
    "LKG_7.pdf", "LKG_8.pdf", "LKG_9.pdf", "LKG_10.pdf", "LKG_11.pdf", "LKG_12.pdf",
    "LKG_13.pdf", "LKG_14.pdf", "LKG_15.pdf", "LKG_16.pdf", "LKG_17.pdf", "LKG_18.pdf",
    "LKG_19.pdf", "LKG_20.pdf", "LKG_21.pdf", "LKG_22.pdf", "LKG_23.pdf", "LKG_24.pdf",
    "LKG_25.pdf", "LKG_26.pdf", "LKG_27.pdf", "LKG_28.pdf", "LKG_29.pdf", "LKG_30.pdf",
    "LKG_31.pdf", "LKG_32.pdf", "LKG_33.pdf"
  ],
  UKG: [
    "UKG_.pdf", "UKG_1.pdf", "UKG_2.pdf", "UKG_3.pdf", "UKG_4.pdf", "UKG_5.pdf",
    "UKG_6.pdf", "UKG_7.pdf", "UKG_8.pdf", "UKG_9.pdf", "UKG_10.pdf", "UKG_11.pdf",
    "UKG_12.pdf", "UKG_13.pdf", "UKG_14.pdf", "UKG_15.pdf", "UKG_16.pdf", "UKG_17.pdf",
    "UKG_18.pdf", "UKG_19.pdf", "UKG_20.pdf", "UKG_21.pdf", "UKG_22.pdf", "UKG_23.pdf",
    "UKG_24.pdf", "UKG_25.pdf", "UKG_26.pdf", "UKG_27.pdf", "UKG_28.pdf", "UKG_29.pdf",
    "UKG_30.pdf", "UKG_31.pdf"
  ],
  "1STCLASS": ["1stClass_1.pdf", "1 st Class_2.pdf","1 st Class_3.pdf","1 st Class_4.pdf","1 st Class_5.pdf",
    "1 st Class_6.pdf","1 st Class_7.pdf","1 st Class_8.pdf","1 st Class_9.pdf","1 st Class_10.pdf",
    "1 st Class_11.pdf","1 st Class_12.pdf","1 st Class_13.pdf","1 st Class_14.pdf","1 st Class_15.pdf",
    "1 st Class_16.pdf","1 st Class_17.pdf","1 st Class_18.pdf","1 st Class_19.pdf","1 st Class_20.pdf","1 st Class_21.pdf","1 st Class_22.pdf","1 st Class_23.pdf","1 st Class_24.pdf",
    "1 st Class_25.pdf","1 st Class_26.pdf","1 st Class_27.pdf","1 st Class_28.pdf","1 st Class_29.pdf","1 st Class_30.pdf"
  ],
  "2NDCLASS":[

  ],
  "3RDCLASS" :["3 rd Class_1.pdf","3 rd Class_2.pdf","3 rd Class_3.pdf","3 rd Class_4.pdf","3 rd Class_5.pdf","3 rd Class_6.pdf",
    "3 rd Class_7.pdf","3 rd Class_8.pdf","3 rd Class_9.pdf","3 rd Class_10.pdf","3 rd Class_11.pdf","3 rd Class_12.pdf",
    "3 rd Class_13.pdf","3 rd Class_14.pdf","3 rd Class_15.pdf","3 rd Class_16.pdf","3 rd Class_17.pdf",
    "3 rd Class_18.pdf","3 rd Class_19.pdf","3 rd Class_20.pdf","3 rd Class_21.pdf","3 rd Class_22.pdf",
    "3 rd Class_23.pdf","3 rd Class_24.pdf","3 rd Class_25.pdf","3 rd Class_26.pdf","3 rd Class_27.pdf","3 rd Class_28.pdf",
    "3 rd Class_29.pdf","3 rd Class_30.pdf"


  ],
   "4THCLASS":["4 th Class_Mathes.pdf"],
   "5THCLASS":[],
   "6THCLASS":["6 th Class_Telugu.pdf"],
   "7THCLASS":["7 th Class_SOCIAL.pdf"],
   "8THCLASS":[],
   "9THCLASS":[],
   "10THCLASS":["10 th Class_Mathes.pdf","10 th Class_Maths Real Numbers.pdf"]


   
};

const Worksheets = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName);
  };

  const handlePdfClick = (folderName, fileName) => {
    const encodedFolder = encodeURIComponent(folderName);
    const encodedFile = encodeURIComponent(fileName);
    const fileUrl = `/ws/${encodedFolder}/${encodedFile}`;
    window.open(fileUrl, "_blank");
  };

  return (
    <div style={{ padding: "20px" }}>
      

      {/* Grid of class buttons */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        {Object.keys(pdfFolders).map((folder, index) => (
          <button
            key={index}
            onClick={() => handleFolderClick(folder)}
            style={{
              padding: "15px",
              fontSize: "16px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {folder}
          </button>
        ))}
      </div>

      {/* List of PDFs when a folder is selected */}
      {selectedFolder && (
        <div>
          <h3>{selectedFolder} PDFs</h3>
          <ul>
            {pdfFolders[selectedFolder].map((pdf, i) => (
              <li key={i}>
                <button
                  onClick={() => handlePdfClick(selectedFolder, pdf)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#007bff",
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  {pdf}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Worksheets;
