import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import EditBtn from "../EditBtn";
import { Input, TextArea, FormBtn, CompleteStatus, CompleteSelect } from "./form";
import API from "../../utils/API";
import "./todo.css";

const EditToDo = ({ id, title, body, dueDate, complete, onRequestClose, loadToDos }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [formObject, setFormObject] = useState({
        id, title, body, dueDate, complete
    })
    const handleOpen = () => { setIsOpen(!isOpen) };
    const [startDate, setStartDate] = useState(new Date());

    const pickDate = (date) => {
        console.log(date)
        setFormObject({ ...formObject, dueDate: date })
        setStartDate(date)
        
    }

    function handleEditSubmit(event) {
        event.preventDefault();
        API.editToDo(id, {
            title: formObject.title,
            dueDate: formObject.dueDate,
            body: formObject.body,
            complete: formObject.complete
        }).then(res =>
            handleOpen(),
            loadToDos())
            .catch(err => console.log(err));
    }

    //Modal style
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            zIndex: 1001,
            transform: "translate(-50%, -50%)",
            maxHeight: "100vh",
            overflowY: "auto",
            backgroundImage: `url("https://cdn.pixabay.com/photo/2017/10/15/08/56/neutral-2852878_960_720.jpg")`,
        },
        overlay: {
            zIndex: 1000,
            backgroundColor: "rgb(72,72,72,.95)",
        },
    };

    return (
        <>
            <EditBtn
                data-action="editBtn"
                onClick={() => handleOpen()}
            />
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} closeTimeoutMS={500}>
                <div className="flex-container">
                    <div className="grid-x grid-margin-x small-up-5 todoEdit">
                        <form>
                            <Input
                                onChange={(e) => setFormObject({ ...formObject, title: e.target.value })}
                                title=""
                                label="Title:"
                                value={formObject.title}
                                placeholder="Title (required)"
                            />
                            <DatePicker
                                selected={startDate}
                                label="Due date:"
                                dueDate=""
                                onChange={date => pickDate(date)}
                                value={formObject.dueDate.slice(0, -14)}
                                dateFormat="MMMM eeee d, yyyy"
                                isClearable
                                placeholderText="No due date for this one!"
                            />

                            <TextArea
                                onChange={(e) => setFormObject({ ...formObject, body: e.target.value })}
                                body=""
                                label="Details:"
                                value={formObject.body}
                                placeholder="Details"
                            />
                            <CompleteStatus complete={complete}>
                                Status:
                            </CompleteStatus>
                            <CompleteSelect />
                            <FormBtn
                                // disabled={!(formObject.title)}
                                onClick={handleEditSubmit}
                            >
                                Save
                            </FormBtn>
                            <button
                                style={{ border: "1px solid white", fontWeight: "bold" }}
                                onClick={() => handleOpen()}
                                className="button primary"
                                href="#/">
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default EditToDo;