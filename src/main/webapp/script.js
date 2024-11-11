document.querySelector("form").addEventListener("submit", function(e) {
    let name = document.querySelector("input[name='name']").value;
    let email = document.querySelector("input[name='email']").value;
    if (name === "" || email === "") {
        alert("Please fill all required fields.");
        e.preventDefault();
    }
});
