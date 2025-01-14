
import { Helmet } from 'react-helmet-async';
import Cover from '../../Sheard/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCtegory/MenuCategory';

const MenuPage = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'Our Menu'}></Cover>
            {/* main cover */}
            <SectionTitle heading={ 'Todays Offer'} subHeadings={"Dont't Miss"}></SectionTitle>

            {/* offered menu item  */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu item */}
            <MenuCategory items={desserts} title={'dessert'} img={dessertImg}></MenuCategory>
            {/* pizza menu item */}
            <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
            {/* salas menu item */}
            <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>

            {/* soup menu item */}
            <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
        </div>
    );
};

export default MenuPage;