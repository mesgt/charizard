import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../utils/UserContext";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import NewBtn from "../NewBtn";
import { Input, TextArea, FormBtn, CompleteStatus, CompleteSelect } from "./form";
import API from "../../utils/API";
import "./todo.css";
import "react-datepicker/dist/react-datepicker.css";

const NewToDo = ({ onRequestClose, loadToDos, complete }) => {
    const user = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const [formObject, setFormObject] = useState({
        title: "",
        body: "",
        dueDate: new Date()
    })

    const handleOpen = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    };

    const pickDate = (date) => {
        console.log(date)
        setFormObject({ ...formObject, dueDate: date })
        setStartDate(date)
    }

    function handleNewSubmit(event) {
        event.preventDefault();
        // if (formObject.title) {
        API.saveToDo({
            title: formObject.title,
            dueDate: formObject.dueDate,
            body: formObject.body,
            complete: false,
            googleId: user.googleId
        }).then(res =>
            handleOpen(),
            loadToDos())
            .catch(err => console.log(err));
        // }
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
            // width: "40rem",
            minHeight: "380px",
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
            <NewBtn
                data-action="addBtn"
                onClick={() => handleOpen()}
            />
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} closeTimeoutMS={500}>
                <div className="card-section flex-container grid-x">
                    <div className="grid-x grid-margin-x small-up-7 ">
                        <form>
                            <Input
                                onChange={(e) => setFormObject({ ...formObject, title: e.target.value })}
                                title=""
                                label="Title:"
                                value={formObject.title}
                                placeholder="Title (required)"
                            />
                            <DatePicker
                                id="formInput"
                                selected={startDate}
                                label="Due date:"
                                dueDate=""
                                onChange={date => pickDate(date)}
                                value={formObject.dueDate}
                                dateFormat="MMMM eeee d, yyyy"
                                isClearable
                                placeholderText="No due date for this one!"
                            ></DatePicker>
                            <TextArea
                                onChange={(e) => setFormObject({ ...formObject, body: e.target.value })}
                                body=""
                                label="Details:"
                                value={formObject.body}
                                placeholder="Task details"
                            />
                            {/* <CompleteStatus complete={complete}>Status:</CompleteStatus>
                            <CompleteSelect /> */}
                            <FormBtn
                                // disabled={!(formObject.title)}
                                onClick={handleNewSubmit}
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

export default NewToDo;