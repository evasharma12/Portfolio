import React from 'react';

function Footer(){
    return(
        <div id = "footer">
            <h2>Feel free to contact me for any queries, feedbacks, or projects at: <br/></h2>
            <a href = "mailto:inquesto2003@gmail.com"><h3>inquesto2003@gmail.com</h3></a>

            <a target = "blank" class = "footer-links"href = "mailto:inquesto2003@gmail.com"><i className="fas fa-envelope"></i></a>  
            <a target = "blank" class = "footer-links"href = "https://github.com/evasharma12"><i className="fab fa-github"></i></a>
            <a target = "blank" class = "footer-links"href = "https://www.instagram.com/evasharma12/"><i className="fab fa-instagram"></i></a>
            <a target = "blank" class = "footer-links"href = "https://www.linkedin.com/in/eva-sharma-94aab5207/"><i className="fab fa-linkedin-in"></i></a>
            <p>Copyright © 2021 Eva Sharma. All rights reserved</p>
        </div>
    )
}
export default Footer;