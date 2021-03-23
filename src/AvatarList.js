import React, { useState } from "react";
import { BsFillPlusCircleFill as Add } from "react-icons/bs";
import { AiFillCloseCircle as Close } from "react-icons/ai";
import "./modal.css";
import Modal from "./Modal";
function AvatarList({ userContact, setUserContact, dialog, handleSubmit }) {
  const [modal, setModal] = useState(false);
  const handleChange = (event, text) => {
    let image;
    let textValue;
    if (text === "image") {
      if (event.target.files && event.target.files[0]) {
        image = URL.createObjectURL(event.target.files[0]);
        setUserContact({ ...userContact, image: image });
      }
    } else {
      textValue = event.target.value;
      setUserContact({ ...userContact, name: textValue });
    }
  };
  const handleForm = (event) => {
    event.preventDefault();
    setModal(false);
    handleSubmit();
  };
  return (
    <>
      <div style={{ paddingRight: "20px", fontSize: "20px", color: "#919191" }}>
        <Add onClick={() => setModal(true)} />
      </div>
      {modal ? (
        <Modal>
          <div className="modal">
            <form onSubmit={(e) => handleForm(e)}>
              <button className="cancel" onClick={() => setModal(false)}>
                <Close />
              </button>
              <div>
                <div>
                  <h1>Username</h1>
                  <input
                    onChange={(e) => handleChange(e, "name")}
                    type="text"
                    value={userContact["name"]}
                    placeholder="Username"
                  />
                </div>
                <div>
                  <h1>Image</h1>
                  <input
                    onChange={(e) => handleChange(e, "image")}
                    type="file"
                    placeholder="upload image"
                  />
                </div>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <button>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      ) : null}
    </>
  );
}

export default AvatarList;
