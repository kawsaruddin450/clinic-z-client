import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const service = useLoaderData();
    console.log(service)
    const { user } = useContext(AuthContext);

    const handleCheckout = event => {
        event.preventDefault();
        const form = event.target;

        const username = form.username.value;
        const email = form.email.value;
        const phone = form.phone.vale;

        const booking = {
            username,
            email,
            phone,
            title: service.namae,
            description: service.description,
            image: service.image,
            price: service.price,
            duration: service.duration,
            availability: service.availability,
        }
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then( data => {
            console.log(data);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen lg:container mx-auto">
            <div className="w-3/4 lg:w-1/2">
                <h1 className=" my-12 text-4xl font-bold text-center">You have selected: {service.name}</h1>
                <div className="bg-base-100 shadow-2xl">
                    <form onSubmit={handleCheckout} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="username" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" readOnly required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Phone number" name="phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value='Checkout'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;