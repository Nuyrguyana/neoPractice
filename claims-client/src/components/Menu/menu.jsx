import React from 'react';
import iconMin from '../../image/iconMin.png'
import { menuItems } from "../../routes";
import { MenuItem } from "./menuItem";
import './index.css'

export const Menu = ({ active, setActive }) => {
    return (
        <div className={ active ? 'menu-container active' : 'menu-container' }
             onClick={ () => setActive(false) }>
            <div className='blackout'>
                <div className='menu-inner'
                     onClick={ e => e.stopPropagation() }>

                    <div className='img-icon-container'>
                        <img className='img-icon' src={ iconMin }/>
                    </div>

                    <ul className='ul-menu'>
                        { menuItems.map((item) => {
                            return (<li key={ item.title }>
                                    <MenuItem path={ item.path }
                                              title={ item.title }
                                              img={ item.img }
                                              textContent={ item.textContent }
                                              setActive={ setActive }
                                    />
                                </li>
                            )
                        }) }
                    </ul>
                </div>
            </div>
        </div>
    );
};

