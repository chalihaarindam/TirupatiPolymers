import './Footer.css'


var style = {
    backgroundColor: '#555',
    
}


function Footer() {
    return (
        <div className="footer">
            <div style={style}>
                
                <section className="ft-main">
                <div className="ft-left">
                 <div className="ft-main-item">
                         <h2 className="ft-title">About</h2>
                     <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Careers</a></li>
                     </ul>
                </div>
                <div className="ft-main-item">
                        <h2 className="ft-title">Contact</h2>
                     <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Sales</a></li>
                           <li><a href="#">Advertise</a></li>
                    </ul>
                </div>
                </div>
               <div className="ft-right"></div> 
                 <div className="ft-main-item">
                        <h2 className="ft-title">Stay Updated</h2>
                        <p style={{color: "white"}}>Subscribe to our newsletter to get our latest news.</p>
                    <form>
                            <input type="email" name="email" placeholder="Enter email address"/>
                            <input type="submit" value="Subscribe"/>
                    </form>
                 </div>
  </section>


  <section className="ft-social">
    <ul className="ft-social-list">
      <li><a href="#"><i className="fab fa-facebook"></i></a></li>
      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
      <li><a href="#"><i className="fab fa-github"></i></a></li>
      <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
      <li><a href="#"><i className="fab fa-youtube"></i></a></li>
    </ul>
  </section>

  
  <section class="ft-legal">
    <ul class="ft-legal-list">
      <li><a href="#">Terms &amp; Conditions</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li className="white">&copy; 2021 AAC Inc.</li>
    </ul>
  </section>
            </div>
        </div>
    )
}

export default Footer