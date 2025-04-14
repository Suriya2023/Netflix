import React from 'react';

function Notification({ message, type = 'info', onClose }) {
    if (!message) return null;

    const getColor = () => {
        switch (type) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            case 'warning':
                return 'bg-yellow-500';
            default:
                return 'bg-blue-500';
        }
    };

    return (
        <div className={`fixed top-4 right-4 p-4 rounded shadow-lg text-white ${getColor()}`}>
            <div className="flex items-center justify-between space-x-4">
                <span>{message}</span>
                <button onClick={onClose} className="font-bold ml-4">X</button>
            </div>
        </div>
    );
}

export default Notification;
