// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);


    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)})
    }, [])


    return (
        <section>
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mt-20'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center mt-10'>
            <button className=" mt-12 btn btn-outline  border-b-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;