import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';



const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);

        setShowCart(true);
    }

    return (

        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src={urlFor(image && image[index])} className=" min-h-[400px] min-w-[300px] product-detail-image" />
                </div>
                <div className='small-images-container'>
                    {image?.map((item, i) => (
                        <img src={urlFor(item)}
                            className={i === index ? 'small-image selected-image' : 'small-image'}
                            onMouseEnter={() => setIndex(i)}
                            key={i} />
                    ))}
                </div>
            </div>

            <div className='product-detail-desc'>
                <h1>{name}</h1>
                <div className='reviews'>
                    <div className=' flex'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p>20</p>

                </div>
                <h4 className=' font-semibold'>Details: </h4>
                <p>{details}</p>
                <p className='price'>SAR{price}</p>
                <div className='quantity flex flex-col'>
                    <h3 className=' font-semibold'>Quantity:</h3>
                    <div>
                        <p className='border-4 h-12 items-center flex justify-between'>
                            <span className='minus mx-5 text-rose-900 cursor-pointer' onClick={decQty}><AiOutlineMinus /></span>
                            <span className='border-x-4 px-6 h-full py-2'>{qty}</span>
                            <span className='plus mx-5 text-green-900 font-semibold cursor-pointer' onClick={incQty}><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className='buttons'>
                        <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}>Add to Cart</button>
                        <button type='button' className='buy-now' onClick={handleBuyNow}>Buy Now</button>
                    </div>
                </div>
                <div className='maylike-products-wrapper'>
                    <h2 className='text-center'>You may also like</h2>
                    <div className='marquee'>
                        <div className='maylike-products-container track'>
                            {products.map((item) => (
                                <Product key={item._id}
                                    product={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}


export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: { products, product }
    }
}

export default ProductDetails