import React from 'react';
import './login.css';

export function Login( props ) {
    const [email, setEmail] = React.useState(props.email);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        localStorage.setItem('userName', email);
        props.onLogin(email);
    }

    async function createUser() {
        localStorage.setItem('userName', email);
        props.onLogin(email);
    }

    return (
        <main className='container-fluid bg-secondary text-center' id="login-display">
        <div id="login_box">
            <h1>Welcome to your<br />BYU calendar</h1>

            <img src="public/cougar.png" alt="BYU cougar" />

            <form method="get" action="/">
                
                {/* <!-- Normal Login Menu --> */}
                <div className="input-group mb-3">
                    <span className="input-group-text">Email</span>
                    <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Password</span>
                    <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="check" name="option" value="persist_login" />
                    <label className="form-check-label" htmlFor="check">Keep me Logged-in</label>
                </div>

                <div className="buttons">
                    <button type="submit" className="btn btn-primary" onClick={() => loginUser()} disabled={!email || !password}>
                        Login
                    </button>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#account_creation_popup">
                        Create Account
                    </button>
                </div>

                {/* <!-- Create Account Pop-up --> */}
                <div className="modal fade" id="account_creation_popup" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                    
                        {/* <!-- Pop-up content--> */}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Create an Account</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">First Name</span>
                                    <input className="form-control" type="text" placeholder="first name" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Email</span>
                                    <input className="form-control" type="email" placeholder="your@email.com" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Password</span>
                                    <input className="form-control" type="password" placeholder="password" />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="create_check" name="option" value="persist_login" />
                                    <label className="form-check-label" htmlFor="create_check">Keep me Logged-in</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => createUser()} disabled={!email || !password}>Create Account</button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </form>
        </div>
        </main>
    );
}