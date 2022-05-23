import {useState} from 'react';
import './App.css';
import menu from './data'

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <section>
        <div className='title'>
        <h2>Our Menu</h2>
        <div className="underline"></div>
        </div>
        <Categories />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
