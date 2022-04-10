import axios from "axios";

function generateQuote() {
    
    //let quote be a random number between 0 and 1642
    let randomNum = Math.floor(Math.random() * 100);
    let url = 'https://type.fit/api/quotes';

    axios.get(url).then(res => {
        document.getElementById('quote').innerHTML = res.data[randomNum].text;
        document.getElementById('author').innerHTML = res.data[randomNum].author;
        // console.log(res.data[randomNum])
    });
    
    
}
        
    


// function generateQuote() {
//     return "Do not ignore your gift. Your gift is the thing you do the absolute best with the least amount of effort. — Steve Harvey";
// }

export default generateQuote;