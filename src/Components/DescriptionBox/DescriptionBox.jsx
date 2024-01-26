import React from 'react'
import './DescriptionBox.css';



const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>

            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">
                    Reviews (122)
                </div>
            </div>

            <div className="descriptionbox-description">
                <p>
                    Welcome to our inclusive online fashion hub! Discover a diverse selection of clothing for women, men, and children, spanning all sizes and styles. Uncover unbeatable offers, ensuring that updating your wardrobe is not only effortless but also budget-friendly. With a variety of fashionable choices, our e-commerce platform caters to every member of the family. Step into a world where style knows no bounds – your go-to destination for chic and affordable fashion!
                </p>
                <p>
                    Discover a streamlined shopping experience on our site, offering detailed information on sizes, vivid images, prices, colors, and more. We prioritize transparency to make your shopping journey effortless and enjoyable.
                </p>
            </div>

        </div>
    )
}

export default DescriptionBox
