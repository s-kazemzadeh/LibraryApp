import React, { useEffect, useState } from "react";
import '../App.css';
import './kloottemp.css';
import { Button, Alert, Dropdown, Image } from 'react-bootstrap';

export default function KlootTemp() {

    const [number, setNumber] = useState(0);
    const [show, setShow] = useState(true);
    const [showImage, setShowImage] = useState(false);
    const [showSpam, setShowSpam] = useState(false);

    function increaseNumber() {
        setNumber(5);
    }

    const increaseNumberLambda = () => {
        setNumber(10);
    }

    useEffect(() => {
        setInterval(() => {
            setShowSpam(!showSpam);
        }, 2000);
    }, [])

    // const showSpamFunc = () => {
    //     return (<>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //         <Image src="Bojji.jpg"></Image>
    //     </>);
    // }



    return (
        <>
            <h1> Welcome to the LibraryApp Website!</h1>
            <h2>
                I will be trying to use a lot of different features that html provides on this website.<br />
            </h2>
            <h2>
                This will be usefull (I hope) if you ever need to use something and I forgor 💀 happens.
            </h2>
            <h2>
                If you see something on the website and wanna know how to use it, right click and inspect element. This way you can see a little bit how it is done.
                <br />
                That will mostly be usefull when its only HTML. Otherwise try looking in the code on GitHub. <a target="blank" href="https://github.com/s-kazemzadeh/LibraryApp">Click Here</a>
            </h2>

            <p>The goal of this website is to get myself used to different programming languages and tools.</p>

            <p> On this website you will be able to add, change and remove books from the digital library. To do this a
                collaberation of different software languages will be used: HTML, CSS, JS, JSX (Combination of HTML and JS or someting), React and Mongoose? (I Forgor💀)<br />
                But before any of that happens we have to learn the basics!
            </p>

            <hr />

            <h2>Here are examples on how to Format Text with HTML.</h2>
            <p>This is normal text</p>
            <p>This is <b>bold</b> text</p>
            <p>This is <i>italic</i> text</p>
            <p>This is <big>big</big> text</p>
            <p>This is <small>small</small> text</p>
            <p>This is <sub>subscript</sub> text</p>
            <p>This is <sup>superscript</sup> text</p>
            <p>This is <ins>inserted</ins> text</p>
            <p>This is <del>deleted</del> text</p>
            <p>This is <mark>marked</mark> text</p>

            <hr />
            <h2>Next i will show how to adjust the size of your text. <br />
                These are mostly used to adjust the headers of your text.</h2>
            <h1>This is header size 1!</h1>
            <br />
            <h2>This is header size 2!</h2>
            <br />
            <h3>This is header size 3!</h3>
            <br />
            <h4>This is header size 4!</h4>
            <br />
            <h5>This is header size 5!</h5>
            <br />
            <h6>This is header size 6! (smoll)</h6>
            <br />

            <hr />
            <h2>Ofcourse you wanna be able to use hyperlinks in your website. This can be used to open new websites or to redirect the viewer to a different part of the site.</h2>
            <a href="https://www.youtube.com/watch?v=ePZckW651bQ"> One of my favourite videos on the interweb :)</a>
            <p>As you can see the video above annoyingly redirects you to youtube via the same tab. <br />
                It can be nicer for people to have it automatically open in a new tab, this is done in the link below by typing: target="blank".
            </p>
            <a href="https://www.youtube.com/watch?v=ePZckW651bQ" target="blank"> Still one of my favourite videos on the interweb :)</a>
            <p>You can also make links that make a user download something. By writing download="..." you can give the downloaded file a name for the downloader.</p>
            <a href="Bojji.jpg" download="Happy Bojji" target="_blank"> Bojji!</a>

            <p>More times then not you want to actually show an image on the page of your website, instead of having someone download it. <br />
                This is very similair to the previous things we learned.
                But this time we use &lt;img&gt; instead of &lt;a&gt;. And now we replace href="..." with src="...". <br />
                If we do that, we can show any memes we want directly on the website.
            </p>
            <img src="Bojji.jpg" title="Memé"></img>
            <p>By writing title="..." i have made is so that when you hover your mouse over the image, some text will be shown.
            </p>
            <hr />

            <h2>LETS LEARN LISTS</h2>
            <p>We have three types of lists at our disposal. Lets start with the most basic one: unordered lists.</p>

            <ul>
                <li>With this type of list</li>
                <li>we can make </li>
                <li>very simple lists</li>
                <li>like this</li>
            </ul>

            <p>Why the fuck are the dots so far to the left.</p>
            <ul >
                <li>With this type of list</li>
                <li>we can make </li>
                <li>very simple lists</li>
                <li>like this</li>
            </ul>
            <p>I'll fix it later. NEXT UP: ORDERED LISTS. They are pretty much the same, but this time it is ordered with numbers. <br />
                its gonna fucking go all the way left again, i can feel it
            </p>
            <ol >
                <li>With this type of list</li>
                <li>we can make </li>
                <li>ordered lists</li>
                <li>like this</li>
            </ol>
            <p>I fucking knew it but cant be bothered to fix it right now. NEEEXT: some weird ass list. idk what its called but here it is.
            </p>
            <ol >
                <dt>With this type of list</dt>
                <dd>we can make </dd>
                <dt>these weird lists</dt>
                <dd>which you can split up into more lists</dd>
                <dt>I dont like it</dt>
                <dd>so im not gonna use it, its just weird</dd>
                <dt>Why is all my text in the middle of the screen? Maybe I should have started in an html only environment? Meh</dt>
            </ol>
            <hr />
            <h2>Here we have some button magic (with Javascript). Made by Siavash Kazemsade - 18/12/2021</h2>
            <button onClick={increaseNumber}>go to 5</button>
            <button onClick={increaseNumberLambda}>go to 10</button>
            <button onClick={() => { setNumber(20); }}>go to 20</button>
            <h5>{number}</h5>

            <hr />

            <h2>CSS (Cascading Style Sheets)</h2>

            <p>I am starting to get bored of html so lets just start to use CSS. It's the next step to frontend development before javascript. <br />

                It doesnt look that difficult so lets start making random shit to practice. <br />
                <br />
                (btw cascade apparently means this:
                a process whereby something, typically information or knowledge, is successively passed on.)
            </p>

            <hr />

            <h2 className="colorbg" style={{ color: "blue" }}>COLORS</h2>

            <p className="colorbg">This black and white shit is starting to really bore me so imma just starting adding random ass colors to shit. <br />
                This can easily be done with the help of CSS (totally didnt spent 50 minutes trying to import css into my code) <br />
                When changing the background color you use background-color:"..." and to change the color of the text itself you use color="...".
            </p>



            <div className="colorbg bold">
                <h2 >BOOM (also made the following text bold)</h2>

                <p>If we want to change the white spaces between texts we will have to use divs. <br />
                    and put the css properties in the div tags. (div stands for division, implying that you use it to divide your code into pieces)
                </p>

                <p>Then the spaces in between also have the properties.</p>
                <p >We can also do things like changing the font of your texts. The one im using right now is called sans-serif.<br />
                    To add this i just typed {'style={{ fontFamily: "sans-serif" }}'} in the p tag of my html code.<br />
                    -----All of this is also getting hard to explain by typing. So if you wanna learn all of this.--
                    I would recommend watching <a href="https://www.youtube.com/watch?v=cyuzt1Dp8X8" target="blank">brocode</a>-----
                </p>

                <div className="colorPurple bold" >

                    <h2 style={{ color: "yellow" }}>BORDERS AN SHIT</h2>

                    <p className="borders" style={{ color: "cyan" }}>so to make shit look nice we need padding and stuff. You just add a lot of stuff around shit to make stuff go to where you want it to go. <br />
                        later we can do this a lot better with bootstrap and react or something apparently. Right now im also making the borders visible, so its easier to see whats happening.
                        <br /> They are always here, but normally not visible. The blue part is from the text itself, the red is called padding and the purple is called margin.
                        <br /> You can adjust the sizes of these by just changing the amount of pixels they should be.
                    </p>
                    <p style={{ color: "purple" }}>
                        boo, i had to add this so i could show the margin border a bit better. Because you cant actually color the margin in CSS (and then I made this text purple to hide it lmao)
                    </p>

                </div>

                <img src="Scenario for CSS padding properties.png" height={400} />

                <hr />

                <h2>BACKGROUNDS GO BRRR</h2>

                <p>
                    apparently you can add images as backgrounds. so lets do that beacuse why not
                    <div className="backgroundProf">
                        <p>
                            i searched on google: professional image and got this. looks good (no gae) <br />
                            i couldnt get the image to show itself fully so imma do it by just typing until the image is fully on screen.
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                            BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR<br />
                        </p>
                    </div>
                    <p>lmfao</p>

                </p>
                <div>
                    <Button variant="primary" onClick={() => {
                        setShow(!show)
                        alert("ewa gangster")
                    }}>
                        bob
                    </Button >
                    <Button variant="primary" onClick={() => {
                        setShowImage(!showImage)
                    }}>
                        show bob and image
                    </Button >
                    <Button variant="primary" onClick={() => {

                    }}>
                        spam
                    </Button >
                    <Button variant="primary" onClick={() => {
                        setShowSpam(!showSpam)
                    }}>
                        pls stop spamsdssssss
                    </Button >
                    <Alert show={show} variant="danger">bob2</Alert>
                    {showImage ? <Image src="Bojji.jpg"></Image> : null}
                    {showSpam ? <Image src="Bojji.jpg"></Image> : <></>}
                </div>
            </div>


        </>




    )
};