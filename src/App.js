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
    <ul className='searchedValue'>
      <li className='searchedValue__list'>list1</li>
      <li className='searchedValue__list'>list2</li>
      <li className='searchedValue__list'>list3</li>
      <li className='searchedValue__list'>list4</li>
      <li className='searchedValue__list'>list5</li>
      
    </ul>
  </>
    
  );
}
export default App;
