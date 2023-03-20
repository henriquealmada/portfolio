const Home = () => {
  return (
    <section
      id="início"
      className="min-h-[100vh] flex justify-center items-center bg-[url('./assets/coding.jpg')] bg-no-repeat bg-cover px-4 relative"
    >
      <div className="absolute top-0 left-0 bg-black opacity-[0.5] w-full h-full"></div>
      <div className="text-center text-white z-20">
        <h1 className="text-[2.2rem] sm:text-[4rem]">Henrique Almada</h1>
        <h2 className="sm:text-[1.4rem] text-[#9799a1]">
          DESENVOLVEDOR FRONT-END
        </h2>
      </div>
    </section>
  )
}

export default Home
