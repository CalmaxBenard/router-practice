import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
    const params = useParams();
    return (
        <>
        <h1>Product Details</h1>
        <h3>{params.id}</h3>
        <p><Link to='..' relative="path">Back</Link></p>
        </>
    );
}

export default ProductDetailsPage;