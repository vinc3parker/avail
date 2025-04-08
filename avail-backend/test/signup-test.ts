import axios from 'axios';

const runSignupTest = async () => {
    try {
        const response = await axios.post('http://localhost:4000/api/signup', {
            fullName: 'Test User',
            username: 'testuser1',
            email: 'test1@example.com',
            password: 'testpassword',
        });

        console.log('Signup successful:', response.data);
    } catch (error: any) {
        if (error.response) {
            console.error('Signup failed:', error.response.data);
        } else {
            console.error('Error sending request:', error.message);
        }
    }
};

runSignupTest();
// This code is a simple test for the signup endpoint of the API.
// It sends a POST request with user details and logs the response.
// If the signup is successful, it logs the success message.
// If it fails, it logs the error message.