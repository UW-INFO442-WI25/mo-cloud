import React from 'react';
import { useNavigate } from 'react-router-dom';
import userImage from '../../assets/avatar1.png';

const UserProfileIcon = () => {
    const navigate = useNavigate();

    return (
        <div 
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => navigate('/userprofile')}
        >
            <img 
                src={userImage} 
                alt="User Profile" 
                className="w-14 h-14 rounded-full border-2 border-gray-300"
            />
        </div>
    );
};

export default UserProfileIcon