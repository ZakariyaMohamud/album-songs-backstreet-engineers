export default function homeView(albums) {
    return `
    <section class="backgroundStructure">
    <section class="sodaMachine">
            <!-- LOGO/SITE NAME OR SODA BOTTLE IMAGE -->
            <section class="sodaMachineLeft">
                <div class="logoNameCombo">
                    <h1>SODA SOUND</h1>
                </div>
            </section>
            <section class="sodaMachineMiddle">
                <section class="albumGroup">
                    <div class="albumGroupPart1">
                        <div class="albumHeader">
                            <h2 class="albumName">Select an Album:</h2>
                        </div>
                    </div>
                    <div class="albumGroupPart2Home">
                        
                        ${albums.map(album=>{
                            return `
                            <div class="albumBoxHome">
                                <div class="boxBottleHome">
                                    <img src="/images/sodaSoundLogo bottle only cropped.png" alt="Vector image of colored soda bottle">
                                </div>
                                <div class="albumCard">
                                    <input class = "album-id" type="hidden" value="${album.id}">
                                    <div class="test">
                                        <img src=${album.imageUrl} class="albumPicHome" alt="Album Cover">
                                    </div>
                                    <div class="cardTextHome">
                                        <ul>
                                            <li><b>${album.title}</b></li>
                                            <li>${album.artist}</li>
                                            <li>Label: ${album.recordLabel}</li>
                                            <li>${album.duration}</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                                </div>
                            `
                            }).join("")
                        }
                    </div>
                </section>
                <section class="addNewAlbum">
                    <h3>Add A New Album</h3>
                    <div class="new-album-input">
                        <label>Album Title:</label>
                        <label>Album Artist:</label>
                        <label>Album Duration:</label>
                        <!-- <label></label>
                        <label></label>
                        <label></label> -->
                        <input type="text" name="album-title" placeholder="Album Title" id="album-title">
                        <input type="text" name="album-artist" placeholder="Album Artist" id="album-artist">
                        <input type="text" name="album-duration" placeholder="Album Duration" id="album-duration">
                        <label>Record Label:</label>
                        <label>Album Cover Image:</label>
                        <label></label>
                        <!-- <label></label>
                        <label></label>
                        <label></label> -->
                        <input type="text" name="album-record-label" placeholder="Record Label" id="album-record-label">
                        <input type="text" name="album-img" placeholder="Image Url" id="album-img">
                        <button class="addAlbumBtn" type="submit">Submit</button>
                    </div>
                </section>
                <section class="dispenser">
                <div class="dispenseOuter">
                    <div class="dispenseInner">
                        <!-- <img src="/images/sodaSoundLogo.png" class="dispenseLogo" alt=""> -->
                    
                
                    <div class="notes">
                        <img class="note" src="/images/quarterNote.png" alt="">
                        <img class="note" src="/images/wholeNote.png" alt="">
                        <img class="note" src="/images/doubleNote.png" alt="">
                        <img class="note" src="/images/clefNote.png" alt="">
                        <img class="note" src="/images/treble.png" alt="">
                        </div>
                    </div>
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
    `
}