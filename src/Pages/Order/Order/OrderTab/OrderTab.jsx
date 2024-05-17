/* eslint-disable react/prop-types */
import FoodCurd from "../../../../components/FoofCurd/FoodCurd";

const OrderTab = ({ items }) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
            {
                items.map(item => <FoodCurd key={item._id} item={item}></FoodCurd>)
            }
        </div>
    );
};

export default OrderTab;