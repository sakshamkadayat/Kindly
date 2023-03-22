import "../pages/about.css"
import Krish from "../../Images/krish.jpg"
import Birth from "../../Images/birth.jpg"
export function About() {
    return (<>
        <div className="container">
            <img className="img" src={Krish} alt="img" />
            <div className="content">
                <p>
                    Lord Shree Krishna :
                </p>
                <blockquote>
                    is a major deity in the Hindu religion and is considered the eighth avatar (incarnation) of Lord Vishnu.
                    He is one of the most revered and popular gods in Hinduism,
                    and his teachings and life story continue to inspire millions of people worldwide.
                </blockquote>
            </div>
        </div>
        <div className="container">
            
            <div className="content">
                <p>
                    Lord Shree Krishna Childhood :
                </p>
                <blockquote>
                Lord Shree Krishna was born in Mathura, to Vasudeva and Devaki, who were imprisoned by Devaki's brother, Kansa. He was raised by his foster parents, Nanda and Yashoda, in the village of Vrindavan. As a child, Krishna was known for his mischievous antics, his love for butter, and his playing the flute.
                </blockquote>
            </div>
            <img className="img" src={Birth} alt="img" />
        </div>

    </>);
}