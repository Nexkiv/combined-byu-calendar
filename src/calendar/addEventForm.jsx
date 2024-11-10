import React, { useState } from 'react';

function AddEventForm({ onAddEvent }) {
    const [formData, setFormData] = useState({eventName: "", eventDate: ""});

    const addEvent = (event) => {
        event.preventDefault();
        const { eventName, eventDate } = formData;
        onAddEvent(eventName, eventDate);
        // Reset form after submission
        setFormData({eventName: "", eventDate: ""});
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    return (
        <div className="modal fade" id="add_event_popup" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
            
                {/* <!-- Pop-up content--> */}
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add Event</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <label className="input-group-text">Event Name:</label>
                                <input name="eventName" className="form-control" type="text" placeholder="Meeting" />
                            </div>
                            <div className="input-group mb-3">
                                <label className="input-group-text">Date:</label>
                                <input name="eventDate" className="form-control" type="datetime-local"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Add to Calendar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEventForm;