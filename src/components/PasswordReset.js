import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { servieUrl } from '../env/env';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordReset = ({ match }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { id, token } = useParams();
    const navigate =useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            // Perform POST request
            fetch(servieUrl.url + `api/password-reset/${id}/${token}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password: newPassword }),
            })
            .then(response => response.json())
            .then(data => {
                toast.success('Form submitted successfully!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000, // Time in milliseconds the toast should be displayed
                  });
                // console.log('Success:', data);
                setConfirmPassword("")
                setNewPassword("")
                setTimeout(() => {
                    // Navigate to "/login" after 5 seconds
                    navigate('/login');
                  }, 5000);
                
                // handle success
            })
            .catch((error) => {
                console.error('Error:', error);
                // handle error
            });
        } else {
            alert('Passwords do not match');
        }
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '120px'
    };

    const inputStyle = {
        margin: '10px',
        padding: '10px',
        width: '300px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    };

    const buttonStyle = {
        width: '320px',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    return (
        <div>
          
            <form onSubmit={handleSubmit} style={formStyle}>
            Reset Password
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Reset Password</button>
            </form>
            <ToastContainer />
        </div>
          
    );
}

export default PasswordReset;
