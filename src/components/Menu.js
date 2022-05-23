import React from 'react'

function Menu({items}) {
  return (
    <div className='item-location'>
        {items.map((menuItem)=>{
            const {id, title, img, desc, price} = menuItem;
            return <article key={id} className='menu-item'>
                <img src={img} alt={title} className='photo' />
                <div className='item-info'>
                    <header className='item-header'>
                        <h4>{title}</h4>
                        <h4 className='price'>$ {price}</h4>
                    </header>
                    <p className='para'>{desc}</p>
                </div>

            </article>
        })}
    </div>
  )
}

export default Menu