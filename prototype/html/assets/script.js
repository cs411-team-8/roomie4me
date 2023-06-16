document.addEventListener("DOMContentLoaded", function() {
    var inputBox = document.getElementById("bob");
    inputBox.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            var inputValue = inputBox.value;
            var url = "http://localhost:8082/api/countries/" + inputValue;

            fetch(url)
                .then(function(response) {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Error: " + response.status);
                    }
                })
                .then(function(data) {
                    console.log("Response data:", data);

                    data = data[0]
                    document.getElementById("country").textContent = 'Country: ' + data["name"]["common"]
                    document.getElementById("lang").textContent = 'Language: ' + Object.values(data["languages"])

                })
                .catch(function(error) {
                    console.error("Error:", error);
                });
        }
    });
});