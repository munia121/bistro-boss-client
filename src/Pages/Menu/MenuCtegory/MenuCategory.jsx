/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../Sheard/Cover/Cover";
import MenuItem from "../../Sheard/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}

            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-10">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 font-bold ">Order now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;