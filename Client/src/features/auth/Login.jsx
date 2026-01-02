import {useState} from "react";
import {Link} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitHandler = (e => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        //TODO : aut api call

        setEmail("")
        setPassword("")
    })

    return (
        <div
            className="max-w-md w-full bg-card text-card-foreground border border-border rounded-2xl px-6 py-5 flex flex-col items-center gap-y-2 shadow-lg">
            <h1 className="text-4xl font-bold tracking-tight">root_</h1>

            <h2 className="text-2xl font-semibold">Welcome back</h2>

            <p className="text-sm text-muted-foreground text-center">
                Enter your credentials to access your dashboard
            </p>

            <form
                className="flex flex-col w-full gap-y-2 mt-2"
                onSubmit={submitHandler}>

                <input
                    required
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        if (error) setError("");
                    }}
                    className="w-full bg-input text-foreground border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />

                <input
                    required
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                        if (error) setError("");
                    }}
                    className="w-full bg-input text-foreground border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />

                {error && (
                    <p className="text-sm text-destructive text-center">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground rounded-xl py-2 mt-1 font-medium text-sm transition-all hover:opacity-90 active:scale-[0.98]"
                >
                    Sign In
                </button>
            </form>

            <Link
                to="/Signup"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
                Don&apos;t have an account? Sign up
            </Link>
        </div>
    )
        ;
};

export default Login;
