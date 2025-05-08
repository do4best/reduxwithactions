import { useState } from 'react';
import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.jpeg';
import image3 from '../../assets/image3.jpeg';
import image4 from '../../assets/image4.jpeg';
import image5 from '../../assets/image5.jpeg';
import image6 from '../../assets/image6.jpeg';

const images=[image1,image2,image3,image4,image5,image6]
function ModelSite() {
    const [currentImage, setCurrentImage] = useState(0)
    const handelClick = () => {
        const length = images.length;
        setCurrentImage((currentImage) => {
            // if (currentImage < length-1) {
            //     return currentImage + 1
            // } else {
            //     return 0;
            // }
            return (currentImage<length-1?currentImage+1:0)
        })
        
    }
    return (<>
        <div className="bg-amber-300 text-green-800 font-display grid grid-cols-12 h-full w-screen ">
            <div className=" col-span-6 h-full w-full">
        <h1 className="text-8xl mx-x my-3 ">Zesty</h1>
        <h2 className=" fixed bottom-0 text-xl mx-0 my-3">Photograph Project <br />
                By Meer Afzal</h2>
        </div>
            <div className=" col-span-6 h-fit">
                <h3 className='text-4xl   z-1  text-white  fixed bottom-0 right-100 '>{currentImage} / { images.length}</h3>
              
<img className=' object-fit ' src={images[currentImage]} alt='Images' onClick={handelClick}/>
            </div>
            </div>

    </>);
}

export default ModelSite;