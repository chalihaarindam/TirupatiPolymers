import React from 'react'
import banner from './banner.jpg'
import './Home.css'
import Product from './Product.js'
import product1 from './product1.jpeg'
import firebase from 'firebase'


function Home() {
    const [page,setPage] = useState(1);
    const [Products,setProducts] = React.useState([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const db = firebase.firestore();
        const data = await db.collection("Products").get();
        setProducts(data.docs.map(doc => doc.data()));
      };
      fetchData();
    }, []);

    const handleMore = () =>{
      
    }

    return (
     
        <div className="home">
            <div className="home_container">
                <img className="home_image" src={banner} alt="banner"/>   
            </div>
            <div className="home_row">
                  {Products.map(product => (
                          <Product 
                          id={product.id}
                          title={product.name} 
                          price={product.price} 
                          image={product1} 
                          rating={product.rating}
                          />

                  ))}
            </div>
            <div className="home_more">
                  <button onClick={handleMore}>load more</button>
            </div>
        </div>
    )
}

export default Home
