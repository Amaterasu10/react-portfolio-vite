import { Outlet } from 'react-router-dom';
import TopNav from './components/TopNav';

function App() {

  return (
    <div className="App font-poppins">
      <header className='fixed w-full'>
        <TopNav/>
      </header>
      <main className='h-[calc(100vh-3rem)] pt-12'>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
