import { Link } from "react-router-dom";

const Products = [
    {id: 'p1', title: 'Product 1'},
    {id: 'p2', title: 'Product 2'},
    {id: 'p3', title: 'Product 3'},
];

const ProductsPage = () => {
    return (
        <>
        <h1>The Products Page</h1>  
        <ul>
          {Products.map(prod => 
          <li key={prod.id}>
            <Link to={prod.title}>{prod.title}</Link>
          </li>)} 
        </ul>    
        </>
    );
};

export default ProductsPage;