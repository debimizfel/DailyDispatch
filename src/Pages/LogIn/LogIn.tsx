import Hero from '../../Components/Hero/Hero';
import { useForm } from "react-hook-form"
import './LogIn.css';
import { CredentialsModel } from '../../Models/UserModel';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../Service/AuthService';

function LogIn(): JSX.Element {

    const { register, handleSubmit } = useForm<CredentialsModel>();
    const navigator = useNavigate();

    async function submit(credentials: CredentialsModel) {
        try {
            await AuthService.logIn(credentials);
            alert("Welcome back");
            navigator("/home");
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <div className="LogIn">
            <Hero height="100vh" >
                <article data-theme="light">
                    <h1>Log in</h1>
                    <form onSubmit={handleSubmit(submit)}>
                        <input type="email" id="email" placeholder="Email address" required {...register("email")} />
                        <small>We'll never share your email with anyone else.</small>
                        <input type="password" id="password" placeholder="Password" required {...register("password")} />
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

export default LogIn;
