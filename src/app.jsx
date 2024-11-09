import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Calendar } from './calendar/calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';

export default function App() {
    return (
        <BrowserRouter>
            <div className='body bg-dark text-light'>
                <header className='container-fluid'>
                    <h1 className="title">BYU Combined Calender <img src="public/favicon.png" alt="Y calendar" height="50px"></img></h1>
                </header>

                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/calendar' element={<Calendar />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="container-fluid">
                    <span className="text-reset">Created By: Kevin Peter Karatassos</span>
                    <a href="https://github.com/Nexkiv/combined-byu-calendar">GitHub Source</a>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}