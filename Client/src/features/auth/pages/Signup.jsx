import React, {useState} from 'react';

const Signup = () => {

    const [firstname, setFirstname] = useState(``)
    const [lastname, setLastname] = useState(``)
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)
    const [error, setError] = useState(``)
    const [loading, setLoading] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        setError("");

        if (!firstname || !lastname || !email || !password) {
            setError("All fields are required");
            return;
        }

        setLoading(true);

        try {
            //TODO: Auth Api call -> create user and login him

            setFirstname(``)
            setLastname(``)
            setEmail(``)
            setPassword(``)
        } catch {
            setError("Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div
            className="max-w-md w-full bg-card text-card-foreground border border-border rounded-2xl px-6 py-5 flex flex-col items-center gap-y-2 shadow-lg relative">

            <h1 className="text-4xl font-bold tracking-tight">root_</h1>

            <h2 className="text-2xl font-semibold">Welcome</h2>

            <p className="text-sm text-muted-foreground text-center">
                Create Account
            </p>

            <form
                className="flex flex-col w-full gap-y-2 mt-2"
                onSubmit={submitHandler}>

                <div className="flex w-full gap-x-2">
                    <input
                        required
                        type="text"
                        placeholder="First name"
                        value={firstname}
                        onChange={(e) => {
                            setFirstname(e.target.value)
                            if (error) setError("");
                        }}
                        className="w-1/2 bg-input text-foreground border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />

                    <input
                        required
                        type="text"
                        placeholder="Last name"
                        value={lastname}
                        onChange={(e) => {
                            setLastname(e.target.value)
                            if (error) setError("");
                        }}
                        className="w-1/2 bg-input text-foreground border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                </div>

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
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground rounded-xl py-2 mt-1 font-medium text-sm transition-all hover:opacity-90 active:scale-[0.98]"
                >
                    {loading ? "Creating account..." : "Sign Up"}
                </button>

            </form>
        </div>
    );

};

export default Signup;