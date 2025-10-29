import Carousel from 'react-bootstrap/Carousel';
import "./../assets/css/home.css";
import Section1 from '../components/Section1';
import Weather from '../components/Weather';
import Forecast from '../components/Forecast';
function Home (){
    const data = {
       msg: "Hello World",
       chat: "Good bye"
    }
    return (
        <div className="container">
            <h1>Home Page</h1>
            <Weather/>
            <Section1 message= {data.msg} sts={14}/>
            <Section1 message= {data.chat} sts={15}/>
            <Forecast/>
                <Carousel>
                <Carousel.Item>
                    <img src= "images/blog-01.png"/>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src= "images/blog-02.png"/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src= "images/blog-03.png"/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}
export default Home;