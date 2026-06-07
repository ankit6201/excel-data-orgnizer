export default function DataInput({
  rawData,
  setRawData,
  onProcess,
}) {
  return (
    <div>
      <textarea
        rows={15}
        value={rawData}
        onChange={(e) =>
          setRawData(e.target.value)
        }
        placeholder="Enter Your Excel Data Here..."
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          // fontSize: "16px",
          // resize: "vertical",
        }}
      />

      <button
      // className="bg-pink-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={onProcess}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#ff69b4",
          color: "#fff",
          fontSize: "16px",
          margin:"auto",
          display:"block"
        }}
      >
        Process Data
      </button>
    </div>
  );
}