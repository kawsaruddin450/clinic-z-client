import { FaArrowRight } from "react-icons/fa";


const ServiceCard = ({service}) => {
    const {_id, name, image, price, description} = service;
    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <figure className="rounded-xl">
                <img
                    src={image}
                    alt="Service" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions flex items-center justify-between mt-5">
                    <h4 className="text-xl font-medium">Price: ${price}</h4>
                    <button className="btn btn-circle btn-primary"><FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;