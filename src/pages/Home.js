import { useNavigate } from "react-router";



export default function Home(){

    const navigate = useNavigate();

    return (
        <div> 
            <h1>Home</h1>
            <button onClick={()=> navigate('/products')}>Go to Products</button>
        </div>
    );
}