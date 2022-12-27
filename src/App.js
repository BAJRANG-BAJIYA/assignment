import './App.css';

function App() {

  return (
  <>
    <div className="searchBox">
      <h1 className='searchBox__heading'>Search Anime Characters</h1>
      <input 
        type="text"
        placeholder='Search here'
        className='searchBox__Input'
      />
      <span className='searchBox__count'>total count of anime</span>
    </div>
  </>
    
  );
}
export default App;
