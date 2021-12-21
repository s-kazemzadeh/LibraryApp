import React, { useState } from "react";

export default function KlootTemp() {
    console.log('kapot domm sws')

    const [number, setNumber] = useState(0);

    function increaseNumber() {
        setNumber(5);
        console.log('bonk')
    }

    const increaseNumberLambda = () => {
        setNumber(10);
    }


    return (
        <>
            <h1> Welcome to the LibraryApp Website! (ignore the thing above, idk how to remove it without breaking shit)</h1>
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
            <h2>Here we have some button magic. Made by Siavash Kazemsade - 18/12/2021</h2>
            <button onClick={() => increaseNumber()}>go to 5</button>
            <button onClick={() => increaseNumberLambda()}>go to 10</button>
            <button onClick={() => { setNumber(20); }}>go to 20</button>
            <h5>{number}</h5>

        </>

    )
};