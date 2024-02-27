import React from 'react';

export function BottomNav() {

    return (
        <div className="bottomNav">
            {/* Instagram */}
            <a style={{color: "#999999", padding: "1vh"}} href="https://www.instagram.com/jesuspunlay" role="button"
              ><i class="fab fa-instagram fa-lg"></i>
            </a>

            {/* Facebook */}
            <a style={{color: "#999999", padding: "1vh"}} href="https://www.facebook.com/jesuspunlay" role="button"
              ><i class="fab fa-facebook fa-lg"></i>
            </a>

            {/* LinkedIn */}
            <a style={{color: "#999999", padding: "1vh"}} href="https://www.linkedin.com/in/jesus-punlay-068098110" role="button"
              ><i class="fab fa-linkedin fa-lg"></i>
            </a>

            {/* Twitter */}
            <a style={{color: "#999999", padding: "1vh"}} href="https://twitter.com/jesuspunlay" role="button"
              ><i class="fab fa-twitter fa-lg"></i>
            </a>

            {/* Youtube */}
            <a style={{color: "#999999", padding: "1vh"}} href="https://www.youtube.com/channel/jesuspunlay6957" role="button"
              ><i class="fab fa-youtube fa-lg"></i>
            </a>

            {/* GitHub */}
            <a style={{color: "#999999", padding: "1vh"}} href="https://github.com/jpunlay" role="button"
              ><i class="fab fa-github fa-lg"></i>
            </a>
        </div>
    );
}
