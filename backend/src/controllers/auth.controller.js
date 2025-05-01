export async function signup(req, res) {
    res.send('User signed up!');
}

export async function login(req, res) {
    res.send('User logged in!');
}

export function logout(req, res) {
    res.send('User logged out!');
}