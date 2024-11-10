import React, { useState } from 'react';

function AddCalendarForm({ onAddCalendar }) {
    const [formData, setFormData] = useState({calendarID: "", calendarName: "", iCalLink: ""});

    const addCalendar = (event) => {
        event.preventDefault();
        const { calendarID, calendarName, iCalLink } = formData;
        onAddCalendar(calendarID + "\n" + calendarName, iCalLink);
        // Reset form after submission
        setFormData({calendarID: "", calendarName: "", iCalLink: ""});
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    return (
        <div className="modal fade" id="add_calendar_popup" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add Calendar</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <form onSubmit={addCalendar}>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <label htmlFor="calendarID" className="input-group-text">Calendar ID:</label>
                                <input id="calendarID" name="calendarID" className="form-control" type="text" placeholder="UNIV 101" value={formData.calendarID} onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="calendarName" className="input-group-text">Calendar Name:</label>
                                <input id="calendarName" name="calendarName" className="form-control" type="text" placeholder="BYU Foundations for Student Success" value={formData.calendarName} onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="iCalLink" className="input-group-text">iCal link:</label>
                                <input id="iCalLink" name="iCalLink" className="form-control" type="text" placeholder="example.ical" value={formData.iCalLink} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-secondary">Add Calendar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddCalendarForm;