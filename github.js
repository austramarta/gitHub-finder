class GitHub {
    constructor() {
        this.client_id = "310a90970f4a76a45a08";
        this.client_secret = "c9e525689648000d8726c69f8256b8757f80a686";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {
            profile: profile
        }
    }
}