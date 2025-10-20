import Carousel from 'react-bootstrap/Carousel';
import "./../assets/css/home.css"
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

   

    <main class="section main">
        <section class="section slider">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">  
          <div class="carousel-inner">
             <div class="carousel-item active">
                <img src="images/slider-01.png" class="d-block w-100" alt="..."/>
             </div>

             <div class="carousel-item">
                <img src="images/slider-02.png" class="d-block w-100" alt="..."/>
             </div>

             <div class="carousel-item">
                <img src="images/slider-03.png" class="d-block w-100" alt="..."/>
             </div>
            </div>
        </div>
        </section>

        <section class="section health">
          <div class="container">
            <div class="health">
              <div class="health-01">
                <img src="images/health.png"/>
              </div>

              <div class="health-02">
                <h2>Health Benefits of Drinking Tea Regularly</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam mollitia suscipit vitae eveniet excepturi ipsa perspiciatis. Eius, rerum? Qui ea illo beatae ipsum, neque voluptatum aspernatur! Qui amet quo veritatis voluptatum praesentium porro dolorum pariatur! Fugit reprehenderit minus debitis aspernatur qui necessitatibus inventore molestiae assumenda blanditiis quae accusamus aut recusandae, cum incidunt nisi voluptatibus laudantium alias est in, numquam architecto.</p>
                <button>VIEW MORE</button>
              </div>
            </div>
          </div>
        </section>

        <section class="section unique">
          <div class="container"> 
            <h2>Our Unique Tea Blends</h2>
              <img src="images/unique.png"/>
          </div>
        </section>

        <section class="section offers">
          <div class="container">
            <div class="offers">
              <div class="offers-01">
                <h2>Popular Offers</h2>
                <p>Oolong Tea             $19.85</p>
                <p>Theme nullam quis ante velit</p>
                <p>Matcha                 $19.00</p>
                <p>Theme nullam quis ante velit</p>
                <p>Rooibos Tea            $39.39</p>
                <p>Theme nullam quis ante velit</p>
                <p>Chamomile Tea          $42.09</p>
                <p>Theme nullam quis ante velit</p>
              </div>

              <div class="offers-02">
                <img src="images/offer.png"/>
              </div>
            </div>
          </div>
        </section>

        <section class="section magic">
          <div class="container">
            <h2>Discover The Magic Of Tea,</h2>
            <h2>Learn About Our Signature Flavors</h2>           
          </div>
        </section>

        <section class="section discover">
          <div class="container">
            <div class="discover">
              <div class="discover-01">
                <img src="images/discover.png"/>
              </div>

              <div class="discover-02">
                <h3>100% Organic</h3>
                <p>Et malesuada fames ac turpis egestas maecenas</p>
                <p>pharetra convallis met nisl purus.</p>
                <h3>High Quality</h3>
                <p>Et malesuada fames ac turpis egestas maecenas</p>
                <p>pharetra convallis met nisl purus.</p>
                <h3>Always Fresh</h3>
                <p>Et malesuada fames ac turpis egestas maecenas</p>
                <p>pharetra convallis met nisl purus.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="section blog">
          <div class="container">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src="images/blog-01.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="images/blog-02.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="images/blog-03.png" class="d-block w-100" alt="..."/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>

        <section class="section hover">
          <div class="container">
            <div class="hover">
              <div class="hover-left">
                <img src="images/hover-01.png"/>
                <figcaption>THE ART OF TEA</figcaption>
              </div>

              <div class="hover-right">
                <img src="images/hover-02.png"/>
                <figcaption>TEA TEA CUP OF LIFE</figcaption>
            </div>
          </div>
          </div>
        </section>

        <section class="section instagram">
          <div class="container">
            <p><i>Follow Us On Instagram</i></p>
          </div>
          <img src="images/insta.png"/>
        </section>

    </main>

    <footer class="section footer">
        <div class="footer-00">
        <div class="footer-01">
           <h5>Get in Touch</h5>
           <p>chaai@qodeinteractive.com</p>
           <p>Kalchbstrasse 4,8038 Zurich</p>
           <p>+489 333 666 41</p>
        </div>

        <div class="footer-02">
            <h4>CHAAI</h4>
            <div class="logo">
            <i class="bi bi-pinterest"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-youtube"></i>
            <i class="bi bi-facebook"></i>
            </div>
        </div>

        <div class="footer-03">
            <ul>
                <h5>Working Hours</h5>
                <li>Monday/Friday 9:00-23:00</li>
                <li>Saturday 10:00-21:00</li>
                <li>Weekend Closed</li>
            </ul>
        </div>  
        </div>

        <div class="footer-04">
           <p>© 2021 Qode Interactive, All Rights Reserved</p>
        </div>
    </footer>
        </div>

        
    )
}
export default Home;