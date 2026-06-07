import Header from '@/components/Header'
import PageInProgress from '@/components/PageInProgress'
import React from 'react'

const Blog = () => {
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
        <PageInProgress />
      </div>
    </>
  )
}

export default Blog
