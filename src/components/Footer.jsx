import React from 'react';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaHandORight from 'react-icons/lib/fa/hand-o-right';
import { Link } from 'react-router-dom';
import FaQq from 'react-icons/lib/fa/qq';

const footer = {
  display: 'flex',
  width: '100%',
  borderTop: '1px solid black',
  padding: '5vw 1vw',
  justifyContent: 'space-around',
  marginRight: 25
}

function Footer() {
  return(
    <div style={footer}>
      <style jsx>{`
          li {
            list-style: none;
          }
          li:hover {
            text-decoration: underline;
          }
          a {
            color: black;
          }
          .icons {
            display: flex;
            justify-content: space-around;
            font-size: 35px;
          }
          `}</style>
        <div><Link to="/">Matreon</Link></div>


      <div>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Create on Matreon</a></li>
          <li><a href="#">Brand</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>


      <div>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Developers</a></li>
          <li><a href="#">App Directory</a></li>
          <li><a href="#">Creator Blog</a></li>
          <li><a href="#">Creator Guides</a></li>
          <li><a href="#">Community Guides</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>


      <div className="icons">
        <FaFacebook/><FaHandORight/><FaQq/>
      </div>

    </div>

  );
}


export default Footer
