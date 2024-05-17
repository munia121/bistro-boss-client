/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHeadings}) => {
    return (
        <div className="md:w-4/12 my-8 mx-auto text-center">
            <p className="text-yellow-600 mb-2">---{subHeadings}---</p>
            <h2 className="text-3xl uppercase border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;