import {useState} from 'react';
import './App.css';
import items from './data';
import Menu from './components/Menu';
import Categories from './components/Categories';

const allCategories=['all',...new Set(items.map((item)=>item.category))];
console.log(allCategories)


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  console.log(items)

  const filterByCategory=(category)=>{
    if(category==='all'){
      setMenuItems(items)
      return;
    }
    const newItems=items.filter((item)=>item.category===category);
    setMenuItems(newItems)
  }
  return (
    <main className='menu'>
      <section>
        <div className='title'>
        <h2>Our Menu</h2>
        <div className="underline"></div>
        </div>
        <Categories categories={categories} filterByCategory={filterByCategory} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
