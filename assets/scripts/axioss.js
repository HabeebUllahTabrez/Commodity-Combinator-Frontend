const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");

// Here we use an external library called axios which is very convenient in making http requests
// We dont to define any external function which which handle all your requests
// Just include the script and call axios globally with a method!

// All functions remain the same
const post_1 = document.getElementsByClassName("post_1");
const post_2 = document.getElementsByClassName("post_2");
const post_3 = document.getElementsByClassName("post_3");


async function fetchPosts() {
    try {
        const response = await axios.get(`http://localhost:3000/reports`);
        console.log(response);
        const responsePosts = response.data;

        // for (i = 0; i < 10; i++) {
        //     const postEl = generatePostTemplate(responsePosts[i]);
        //     listElement.append(postEl);
        // }
        if (responsePosts.length >= 1) {
        document.querySelector(".button_1").textContent = "No of commodities data available = " + responsePosts.length || " ";
        document.querySelector(".marketName1").textContent ="MarketName: " + responsePosts[0].marketName;
        document.querySelector(".cmdtyID1").textContent = "cmdtyID: " + responsePosts[0].cmdtyID;
        document.querySelector(".cmdtyName1").textContent = "cmdtyName: " + responsePosts[0].cmdtyName;
        document.querySelector(".price1").textContent = "price: " + responsePosts[0].price;
        }
////////////////////////////////////////////////////////////
if (responsePosts.length >= 2) {
        document.querySelector(".marketName2").textContent ="MarketName: " + responsePosts[1].marketName;
        document.querySelector(".cmdtyID2").textContent = "cmdtyID: " + responsePosts[1].cmdtyID;
        document.querySelector(".cmdtyName2").textContent = "cmdtyName: " + responsePosts[1].cmdtyName;
        document.querySelector(".price2").textContent = "price: " + responsePosts[1].price;
}
////////////////////////////////////////////////////////////////////////
if (responsePosts.length >= 3) {
        document.querySelector(".marketName3").textContent ="MarketName: " + responsePosts[2].marketName;
        document.querySelector(".cmdtyID3").textContent = "cmdtyID: " + responsePosts[2].cmdtyID;
        document.querySelector(".cmdtyName3").textContent = "cmdtyName: " + responsePosts[2].cmdtyName;
        document.querySelector(".price3").textContent = "price: " + responsePosts[2].price;
}
        ////////////////////////////////////////////////////////////////////////
        if (responsePosts.length >= 4) {
        document.querySelector(".marketName4").textContent ="MarketName: " + responsePosts[3].marketName;
        document.querySelector(".cmdtyID4").textContent = "cmdtyID: " + responsePosts[3].cmdtyID;
        document.querySelector(".cmdtyName4").textContent = "cmdtyName: " + responsePosts[3].cmdtyName;
        document.querySelector(".price4").textContent = "price: " + responsePosts[3].price;
        }
         ////////////////////////////////////////////////////////////////////////
         if (responsePosts.length >= 5) {
         document.querySelector(".marketName5").textContent ="MarketName: " + responsePosts[4].marketName || " ";
         document.querySelector(".cmdtyID5").textContent = "cmdtyID: " + responsePosts[4].cmdtyID || " ";
         document.querySelector(".cmdtyName5").textContent = "cmdtyName: " + responsePosts[4].cmdtyName || " ";
         document.querySelector(".price5").textContent = "price: " + responsePosts[4].price || " ";
         }
        
    } catch (error) {
        alert(error.message);
        console.log(error.response);
    }
}

async function createPost(userID, marketID, marketName,cmdtyID,cmdtyName, priceUnit, convFctr, price) {

 const post = {
        "reportDetails": {
          "userID": userID,
          "marketID": marketID,
          "marketName": marketName,
          "cmdtyID": cmdtyID,
          "cmdtyName": cmdtyName,
          "priceUnit": priceUnit,
          "convFctr": convFctr,
          "price": price
        }
      };
    console.log(post);
    // const postEl = generatePostTemplate(post);
    // listElement.prepend(postEl);

    const response = await axios.post(
        "http://localhost:3000/reports",
        post
    );
    console.log(response);
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    const enteredUserID = event.currentTarget.querySelector("#userID").value;
    const enteredMarketID = event.currentTarget.querySelector("#marketID").value;
    const enteredMarketName = event.currentTarget.querySelector('#marketName').value;
    const enteredComodityID = event.currentTarget.querySelector("#cmdtyID").value;
    const enteredComodityName = event.currentTarget.querySelector("#cmdtyName").value;
    const enteredPriceUnit = event.currentTarget.querySelector("#priceUnit").value;
    const enteredConvFctr = event.currentTarget.querySelector("#convFctr").value;
    const enteredPrice = event.currentTarget.querySelector("#price").value;

    createPost(enteredUserID, enteredMarketID, enteredMarketName, enteredComodityID, enteredComodityName, enteredPriceUnit, enteredConvFctr, enteredPrice);

});
