import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                Do not have an account? <Link to='/register' className="link link-hover">Register Now</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" value='Login' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;