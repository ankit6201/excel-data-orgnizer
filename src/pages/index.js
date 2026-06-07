import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import DataInput from "../components/DataInput";
import CategoryButtons from "../components/CategoryList";
import ResultTable from "../components/ResultTable";

import { parseSEOData } from "../utils/parser";
import Header from "@/components/Header";



export default function Home() {


  const [rawData, setRawData] =
    useState("");

  const [categories, setCategories] =
    useState({});

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("");

  const handleProcess = () => {
    const result =
      parseSEOData(rawData);

    setCategories(result);

    const firstCategory =
      Object.keys(result)[0];

    if (firstCategory) {
      setSelectedCategory(
        firstCategory
      );
    }
  };
  return (
    <>
    <Header/>
    <div
      style={{
        // maxWidth: "1400px",
        // margin: "20px auto",
        padding: "20px",
        minHeight: "100vh",
      background: "linear-gradient(135deg, #ffd1dc 0%, #ffffff 50%, #b8dfff 100%)", 
        // background: "#f9fafb",
        // background: "linear-gradient(135deg, #ffd1dc 0%, #ffffff 50%, #b8dfff 100%)",
  // borderRadius: "20px",
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        SEO Data Organizer
      </h1>

      <DataInput
        rawData={rawData}
        setRawData={setRawData}
        onProcess={handleProcess}
      />

      {Object.keys(categories)
        .length > 0 && (
        <>
          <CategoryButtons
            categories={categories}
            selectedCategory={
              selectedCategory
            }
            setSelectedCategory={
              setSelectedCategory
            }
          />

          <ResultTable
            data={
              categories[
                selectedCategory
              ] || []
            }
          />
        </>
      )}
    </div>

    

    </>
  );
}
