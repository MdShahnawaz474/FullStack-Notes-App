import React from 'react';
import { useNavigate } from 'react-router-dom';

const Oops = ({ image, title, buttonTitle, buttonLink }) => {
    let navigate = useNavigate();

    return (
        <div className="container min-w-[90vw] min-h-[60vh] flex flex-col items-center justify-center">
            <img 
                src={image} 
                alt="Oops" 
                className="max-w-full max-h-full object-contain" 
            />
            <h3 className='text-[20px] my-2'>{title}</h3>
            <button 
                className='btnNormal' 
                onClick={() => navigate(buttonLink)}
            >
                {buttonTitle}
            </button>
        </div>
    );
};

export default Oops;
