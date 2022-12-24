const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");

// Here we use an external library called axios which is very convenient in making http requests
// We dont to define any external function which which handle all your requests
// Just include the script and call axios globally with a method!

// All functions remain the same

function generatePostTemplate(post) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body.toUpperCase();
    postEl.querySelector("li").id = post.id;

    return postEl;
}

async function fetchPosts() {
    try {
        const response = await axios.get(`http://localhost:3000/reports`);
        console.log(response);
        const responsePosts = response.data;

        for (i = 0; i < 10; i++) {
            const postEl = generatePostTemplate(responsePosts[i]);
            listElement.append(postEl);
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
