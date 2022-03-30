import './App.css';
import Card from './components/UI/Card';

function App() {
  return (
    <>
      <Card>
        <h1 className="text-gray-800 font-extrabold text-2xl pb-10">
          Create a Kindle Party
        </h1>
        <div className="flex items-center pb-5 justify-between">
          <p className="pr-2 text-gray-600 text-base leading-7 font-bold">
            Only I have control
          </p>
          <div className="w-10 h-5 bg-gray-300 rounded-full flex items-center">
            <div className="bg-white w-3 h-3 rounded-full shadow-md ml-1"></div>
          </div>
        </div>
        <button className="w-full uppercase px-4 py-2 font-semibold text-sm bg-blue-400 text-white rounded-md shadow-sm opacity-100">
          Start the party
        </button>
      </Card>
    </>
  );
}

export default App;
