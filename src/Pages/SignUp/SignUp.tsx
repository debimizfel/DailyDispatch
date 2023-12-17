import { useNavigate } from 'react-router-dom';
import Hero from '../../Components/Hero/Hero';
import { UserModel } from '../../Models/UserModel';
import AuthService from '../../Service/AuthService';
import './SignUp.css';
import { useForm } from "react-hook-form"

function SignUp(): JSX.Element {

    const { register, handleSubmit } = useForm<UserModel>();
    const navigator = useNavigate();

    async function submit(user: UserModel) {
        try {
            await AuthService.signUp(user);
            alert("Welcome");
            navigator("/home");
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <div className="SignUp">
            <Hero height="100vh" >
                <article data-theme="light">
                    <h1>Sign up</h1>
                    <form onSubmit={handleSubmit(submit)}>
                        <input type="text" id="firstname" placeholder="First name" required  {...register("firstName")} {...register("firstName")} />
                        <input type="text" id="lastname" placeholder="Last name" required  {...register("lastName")} />
                        <input type="email" id="email" placeholder="Email address" required  {...register("email")} />
                        <small>We'll never share your email with anyone else.</small>
                        <input type="password" id="password" placeholder="Password" required  {...register("password")} />
                        <div className='grid'>
                            <button className='secondary' type='button' onClick={() => navigator("/home")}>Cancel</button>
                            <button>Submit</button>
                        </div>
                    </form>
                </article>
            </Hero>

        </div>
    );
}

export default SignUp;
