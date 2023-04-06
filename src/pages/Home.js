import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }
    return (
        <>
        <h1>My Home Page</h1> 
        <button onClick={navigateHandler}>Explore our products</button>      
        </>
    );
};

export default HomePage;