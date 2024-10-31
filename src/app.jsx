import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className='body bg-dark text-light'>
            <header className='container-fluid'>
                <h1 className="title">BYU Combined Calender <img src="public/favicon.png" alt="Y calendar" height="50px"></img></h1>
            </header>

            <main>App components go here</main>

            <footer className="container-fluid">
                <span className="text-reset">Created By: Kevin Peter Karatassos</span>
                <a href="https://github.com/Nexkiv/combined-byu-calendar">GitHub Source</a>
            </footer>
        </div>
    );
}