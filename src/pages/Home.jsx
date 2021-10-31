const Home = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center text-3xl text-semibold gap-1">
      <h1 className="text-4xl text-semibold">Welcome to my page!</h1>
      <span>
        I'm japa4551, and this is my new page made in <a className="text-blue-600" href="https://reactjs.org/">ReactJS</a>
      </span>

      <span className="text-[10px]">
        <a className="text-blue-400" href="https://github.com/10c8/">10c8</a> held me hostage for hours
      </span>

      <a className="underline" href="/src/old_site/index.html">Click here if you want to see the old version</a>
    </div>
  )
}

export default Home
