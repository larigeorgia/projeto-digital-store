
import { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { NavLink } from 'react-router-dom';

export default function TemplateDemo() {
    const [activeIndex, setActiveIndex] = useState();
    const itemRenderer = (item, itemIndex) => (
            <NavLink to={item.to} className="p-menuitem-link flex align-items-center gap-5" style={{backgroundColor:"yellow"}} onClick={() => setActiveIndex(itemIndex)} outlined={itemIndex} >
                <span className="p-menuitem-link">{item.label}</span>
            </NavLink>
        // a tag a é dispensável
    );

    const items = [
        {
            label: 'Home', 
            to: '/' ,
            template: (item) => itemRenderer(item, 0)
        },
        {
            label: 'Produtos', 
            to: '/productlist',
            template: (item) => itemRenderer(item, 1)
        },
        {
            label: 'Categorias', 
            to: '/productdetail', 
            template: (item) => itemRenderer(item, 2)
        },
        { 
            label: 'Meus Pedidos', 
            to: '/',
            template: (item) => itemRenderer(item, 3)
        }
    ];


    return (
        <div style={{width: "86%", backgroundColor:"yellow"}}>
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        </div>
    )
}
        