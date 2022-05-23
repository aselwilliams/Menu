import {useState} from 'react';
import './App.css';
import items from './data';
import Menu from './components/Menu';
import Categories from './components/Categories';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  console.log(items)
  return (
    <main className='menu'>
      <section>
        <div className='title'>
        <h2>Our Menu</h2>
        <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
