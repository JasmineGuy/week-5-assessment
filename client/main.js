// const { default: axios } = require("axios");

const btnContainer = document.querySelector('.button-container');
const roleModelContainer = document.querySelector('#role-model-container');
const form =document.querySelector('#role-model-form');


// setting up buttons
      document.getElementById("complimentButton").onclick = function () {
        axios.get("http://localhost:4000/api/compliment/")
            .then(function (response) {
              const compliment = response.data;
              btnContainer.append(compliment)
            });
      };
      document.getElementById("fortuneButton").onclick = function () {
        axios.get('http://localhost:4000/api/fortune')
        .then(function (response) {
          const fortune = response.data;
          btnContainer.append(fortune)
        })
      }
      document.getElementById("jokeButton").onclick = function () {
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(function (response) {
          console.log(response.data.value)
          const joke = response.data.value;
          btnContainer.append(joke)
        })
      }

// setting up role model display

      function submitHandler(e) {
      e.preventDefault()

      let firstName = document.querySelector('#first-name')
      let lastName = document.querySelector('#last-name')
      let reason = document.querySelector('#reason')
      let votes = document.query
      let imageURL = document.querySelector('#rm-img')

      let newObj = {
          firstName: firstName.value,
          lastName: lastName.value, 
          reason: reason.value,
          votes:  
          imageURL: imageURL.value
      }
      createModel(newObj)

        firstName.value = ''
        lastName.value = ''
        reason.value = ''
        votes: 1
        imageURL.value = ''
    }

    const getAllRoleModels = () => {
      axios
      .get('http://localhost:4000/api/rolemodel')
      .then((response) => {
          let roleModels = response.data
          // for (let i = 0; i <= roleModels.length; i++){
            // console.log(roleModels[i].firstName)
            // roleModelContainer.append(roleModels[i].firstName)
            // displayModels(roleModels)

          }
      )}

form.addEventListener('submit', submitHandler)

getAllRoleModels()
    