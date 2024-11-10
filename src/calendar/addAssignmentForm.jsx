import React, { useState } from 'react';

function AddAssignmentForm({ onAddAssignment }) {
    const [formData, setFormData] = useState({calendarID: "", assignmentName: "", dueDate: ""});

    const addAssignment = (event) => {
        event.preventDefault();
        const { calendarID, assignmentName, dueDate } = formData;
        onAddAssignment(calendarID + "\n" + assignmentName, dueDate);
        // Reset form after submission
        setFormData({calendarID: "", assignmentName: "", dueDate: ""});
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    return (
        <div className="modal fade" id="add_assignment_popup" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
            
                {/* <!-- Pop-up content--> */}
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add Assignment</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <label className="input-group-text">Calendar ID:</label>
                                <input name="calendarID" className="form-control" type="text" placeholder="CS 252" />
                            </div>
                            <div className="input-group mb-3">
                                <label className="input-group-text">Assignment Name:</label>
                                <input name="assignmentName" className="form-control" type="text" placeholder="Homework 42" />
                            </div>
                            <div className="input-group mb-3">
                                <label className="input-group-text">Due Date:</label>
                                <input name="dueDate" className="form-control" type="datetime-local" />
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

export default AddAssignmentForm;