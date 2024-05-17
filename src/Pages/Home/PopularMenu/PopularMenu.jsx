import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Sheard/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');

    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    // }, [])


    return (
        <section className="mb-20">
            <SectionTitle
                heading={'From Our Menu'}
                subHeadings={'Popular Items'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-10">
                <button className="btn btn-outline border-0 border-b-4 font-bold ">View Full Menu</button>
            </div>
            <div className="bg-black text-center py-20 mt-32">
                <p className="text-5xl font-bold text-white">Call Us: +88 0192345678910</p>
            </div>
        </section>
    );
};

export default PopularMenu;