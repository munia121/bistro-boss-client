
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import image from '../../../assets/home/featured.jpg'
import './featured.css'

const Fetured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle heading={'Featured item'} subHeadings={'Check it out'}></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-30 items-center px-30 pb-20 py-12">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus saepe placeat laudantium alias quidem, optio temporibus? Dolore, iure eveniet dolor explicabo officiis excepturi impedit delectus dolorum quod provident, rem accusamus veniam facere, alias molestias. Nulla molestiae delectus, dignissimos similique reiciendis, officia inventore rerum dolore unde illo rem, quas distinctio nisi.</p>
                    <button className="btn btn-outline border-0 border-b-4 font-bold">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Fetured;