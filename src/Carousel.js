import { useState } from "react";


function Carousel ({images, source}) {
    const [index, setIndex] = useState (0);

    const previousPic =()=> {
        setIndex ((index => {
            index --;
            if (index < 0) {
                return images.length-1;
            }
            return index;
        }))
    }

    const nextPic =()=> {
        setIndex ((index => {
            index ++;
            if (index >images.length-1) {
                index = 0;
            }
            return index;
        }))
    }

    return (
        <div>
            <img src={images[index]} alt="pic" width="400px" height="300px"/>

            <div className="container">
                <button className="btnThree" onClick={previousPic}>Previous</button>
                <button className="btnThree" onClick={nextPic}>Next</button>
            </div>
        </div>
    );

}

export default Carousel;