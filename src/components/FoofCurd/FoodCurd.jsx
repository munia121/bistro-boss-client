/* eslint-disable react/prop-types */

const FoodCurd = ({item}) => {
    return (
        <div>
            <div>
                <div className="max-w-xs relative rounded-md text-center shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <p className="absolute right-0 top-0 mr-4 mt-4 px-4 bg-slate-900 text-white"> ${item.price}</p>
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
        </div>
    );
};

export default FoodCurd;