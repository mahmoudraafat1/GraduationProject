import '../index.css'
const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gradient-to-b from-black to-black">
      <div className="flex items-center">
        <div className="lds-ring">
          <div className="ring-white"></div>
          <div className="ring-white"></div>
          <div className="ring-white"></div>
          <div className="ring-white"></div>
        </div>
      </div>
    </div>
  );
}

export default PageLoader;