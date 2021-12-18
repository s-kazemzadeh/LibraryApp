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
                collaberation of different software languages will be used: HTML, CSS, JS, JSX (Combination of HTML and JS or someting), React and Mongoose? (I Forgor💀)
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
            <h1>I like pizza!</h1>
            <br />
            <h2>I like pizza!</h2>
            <br />
            <h3>I like pizza!</h3>
            <br />
            <h4>I like pizza!</h4>
            <br />
            <h5>I like pizza!</h5>
            <br />
            <h6>I like pizza!</h6>
            <br />

            <button onClick={() => increaseNumber()}>go to 5</button>
            <button onClick={() => increaseNumberLambda()}>go to 10</button>
            <button onClick={() => {
                setNumber(20);
            }}>go to 20</button>
            <h5>{number}</h5>

        </>

    )
};