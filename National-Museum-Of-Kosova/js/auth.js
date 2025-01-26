// Authentication Management
class Auth {
    constructor() {
        this.isLoggedIn = false;
        this.checkLoginStatus();
    }

    checkLoginStatus() {
        const token = localStorage.getItem('museumAuthToken');
        if (token) {
            this.isLoggedIn = true;
            this.updateUI();
        }
    }

    updateUI() {
        const loginBtn = document.getElementById('loginBtn');
        if (this.isLoggedIn) {
            loginBtn.textContent = 'Dilni';
            this.showWelcomeMessage();
        } else {
            loginBtn.textContent = 'Kyçu';
        }
    }

    showWelcomeMessage() {
        const username = localStorage.getItem('museumUsername');
        if (username) {
            const message = document.createElement('div');
            message.className = 'welcome-message';
            message.textContent = `Mirë se erdhe përsëri, ${username}!`;
            document.body.insertBefore(message, document.body.firstChild);
            
            setTimeout(() => {
                message.remove();
            }, 3000);
        }
    }
}

const auth = new Auth();