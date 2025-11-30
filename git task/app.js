async function searchUser() {
    const username = document.getElementById("username").value;
    const errorDiv = document.getElementById("error");
    const profileDiv = document.getElementById("profile");

    errorDiv.textContent = "";
    profileDiv.style.display = "none";

    if (!username) {
        errorDiv.textContent = "Please enter a username.";
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (response.status === 404) {
            errorDiv.textContent = "User not found!";
            return;
        }

        const data = await response.json();

        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("name").textContent = data.name || "No Name";
        document.getElementById("bio").textContent = data.bio || "No Bio Available";
        document.getElementById("followers").textContent = data.followers;
        document.getElementById("following").textContent = data.following;
        document.getElementById("repos").textContent = data.public_repos;

        profileDiv.style.display = "block";

    } catch (err) {
        errorDiv.textContent = "Error fetching data!";
    }
}
