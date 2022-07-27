

export default function albumView(album) {
    return `
    <section class="backgroundStructure">
            <section class="sodaMachine">
                <!-- LOGO/SITE NAME OR SODA BOTTLE IMAGE -->
                <section class="sodaMachineLeft">
                    <!-- OPTION 1 -->
                    <!-- <div class="logoNameCombo">
                        <img src="/images/sodaSoundLogo.png" alt="">
                        <h1>SODA SOUND</h1>
                    </div> -->
                    <!-- OPTION 2 -->
                    <img src="/images/sodaSoundLogo.png" alt="">
                </section>
    <section class="sodaMachineMiddle">
    <section class="albumGroup">
        <div class="albumGroupPart1">
            <div class="albumHeader">
                <h2 class="albumName">${album.title} <span class="artistName">${album.artist}</span></h2>
            </div>
        </div>
        <div class="albumGroupPart2">
            <div class="albumBox">
                <div class="boxBottle">
                    <img src="/images/sodaSoundLogo bottle only cropped.png" alt="">
                </div>
                <div class="albumCard">
                    <div class="test">
                        <img src="${album.imageUrl}" class="albumPic" alt="">
                    </div>
                    <div class="cardText">
                        <ul>
                            <li>${album.title}</li>
                            <li>${album.artist}</li>
                            <li>${album.recordLabel}</li>
                            <li>${album.duration}</li>
                        </ul>
                    </div>
                </div>
                <div class="albumRatingReviewCombo">
                    <div class="albumRating">
                        <h5>Album Rating</h5>
                        <div class="combinedRating">
                            <p class="rating1">${album.avgRating}</p>
                            <p class="rating2">/</p>
                            <p class="rating3">5</p>
                        </div>
                    </div>
                    <div class="albumReviews">
                        <a  href="#popup3">
                            <h4 class="reviewPop">Reviews</h4>
                        </a>
                    </div>
                    <button type="button" class="delete-button">
                        <img class="trashcan" src="/images/trashcan.png" alt="">
                    </button>
                    <input class = "album-id" type="hidden" value="${album.id}">
                </div>
                <div id="popup3" class="overlay">
                    <div class="popup">
                        <div class="albumReviewsHeading">
                            <h4>Album Reviews</h4>
                        </div>
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                        ${album.comments.map(comment => {
        return `                           
                             <ul>
                            <li>
                                <p>${comment.content}
                                </p>
                                <h5>${comment.author}</h5>
                            </li>
                            <hr>
                        </ul>
                        `
    }).join("")
        }
                            <div class="albumLeaveReview">
                            <h3>Leave A Review</h3>
                              <input class="reviewName" type="text" placeholder="reviewer's name">
                              <input class="reviewContent" type="text" placeholder="write a review...">
                                <button class="reviewSubmit" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="trackListings"> 
    ${album.songs.map(song => {
            return `
         <ol>
        <div class="trackButton">
            <a class="aboutUs" href="${'#' + song.title}">
                <li>${song.title}</li>
            </a>
        </div>
    </ol>
    `
        }).join("")
        }
${album.songs.map(song => {
            return `
<div id="${song.title}" class="overlay">
        <div class="popup">
            <div class="songInfoGroup">
                <h3
                <h3>${song.title}</h3>
                <ul>
                <h4>Song Duration</h4>
                    <li>${song.duration}</li>
                    <li class="songRating">
                        <h4>Song Rating</h4>
                        <div class="songRatingCombo">
                            <p class="rating1">${song.avgRating}</p>
                            <p class="rating2">/</p>
                            <p class="rating3">5</p>
                        </div>
                    </li>
                </ul>
            </div>
            <a class="close" href="#">&times;</a>
            <div class="content">
                <div class="songLeaveRating">
                    <label for="stars">Rate (0-5):</label>
                    <input type="number" name="stars" min="0" max="5">
                    <button type="submit">Submit</button>
                </div>
            </div>
            <hr>
            <div class="songFix">
            <h3>Reviews</h3>
            ${song.comments.map(comment => {
                return `                           
                 <ul>
                <li>
                    <p>${comment.content}
                    </p>
                    <h5>${comment.author}</h5>
                </li>
                <hr>
            </ul>
            `
            }).join("")
                } 
                
                </div> 
                <hr>
            <div class="songLeaveReview">
            <h3>Leave A Review</h3>
                <input type="text" placeholder="reviewer's name">
                <input type="text" placeholder="write a review...">
                <button type="submit">Submit</button>
            </div>
        </div>
    </div>
    `
        }).join("")
        } 
        </section>
        <section class="dispenser">
        <div class="dispenseOuter">
            <div class="dispenseInner">
                <!-- <img src="/images/sodaSoundLogo.png" class="dispenseLogo" alt=""> -->
            </div>
        </div>
        <div class="notes">
            <img class="note" src="/images/quarterNote.png" alt="">
            <img class="note" src="/images/wholeNote.png" alt="">
            <img class="note" src="/images/doubleNote.png" alt="">
            <img class="note" src="/images/clefNote.png" alt="">
            <img class="note" src="/images/treble.png" alt="">
        </div>
    </section>
</section>
<!-- SIDEPANEL/COIN SLOT/SELECTION AREA  -->
<section class="sodaMachineRight">
    <div class="sidePanel">
        <h4>A1</h4>
        <button disabled="disabled">GO</button>
    </div>
</section>
</section>
    </section>        
    `  
}