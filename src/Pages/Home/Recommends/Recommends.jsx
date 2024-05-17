/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Recommends = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'salad');
                setFoods(popularItems)
            })
    }, [])

    return (
        <div>
            <SectionTitle
                heading={'CHEF RECOMMENDS'}
                subHeadings={'---Should Try---'}
            ></SectionTitle>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {
                    foods.map(item => (
                        <div>
                            <div className="max-w-xs rounded-md text-center shadow-md dark:bg-gray-50 dark:text-gray-800">
                                <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-semibold tracking-wide">{item.name}</h2>
                                        <p className="dark:text-gray-800">{item.recipe.slice(0, 60)}</p>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-outline w-32 border-0 text-yellow-600 border-yellow-600 border-b-2 uppercase font-bold ">Add To Card</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Recommends;