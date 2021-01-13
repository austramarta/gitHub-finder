//instantiate github class
const github = new GitHub;
const ui = new Ui;

//get user input from input field
const searchUserInput = document.getElementById("search-user");

//add an event listener to the input field - keyup to catch each letter typed
searchUserInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {

        const searchUserText = e.target.value;
        searchUserText.trim(); //takes away " " in front and back

        if (searchUserText !== "") {
            github.getUser(searchUserText)
                .then(data => {
                    if (data.profile.message === "Not Found") {
                        //show an alert

                    } else {
                        //show the profile
                        ui.showProfile(data.profile);
                    }
                })
        } else {
            //clear profile 
        }
    }
})
