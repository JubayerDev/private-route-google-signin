import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1 className="text-6xl font-semibold">This is our Home Component</h1>
            <h2 className="text-4xl font-bold">{ user?user.displayName:'No Display Name'}</h2>
        </div>
    );
};

export default Home;