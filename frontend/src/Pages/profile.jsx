import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProfilePage() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get('/api/user-data')
            .then(response => setUserData(response.data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    if (!userData) return <p>Loading...</p>;

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <img 
                src={userData.profilePhoto} 
                alt="Profile" 
                className="w-32 h-32 rounded-full mx-auto mb-4" 
            />
            <h2 className="text-xl font-bold text-center">{userData.name}</h2>
            <p className="text-center text-gray-600">{userData.email}</p>
            <div className="mt-4">
                <h3 className="font-semibold">Addresses:</h3>
                <ul className="list-disc pl-5">
                    {userData.addresses.map((address, index) => (
                        <li key={index}>{address}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}