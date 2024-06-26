import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_URL_DATABASE;
const supabaseKey = process.env.REACT_APP_KEY_DATABASE;

const clientUser = createClient(supabaseUrl, supabaseKey);

function LoginUser() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user, error } = await clientUser.auth.signIn({
                email,
            });

            if (error) {
                console.error(error.message);
            } else {
                console.log(user);
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Ingresa tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default LoginUser;
