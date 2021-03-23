import React, { useState } from "react";
import { BsFillPlusCircleFill as Add } from "react-icons/bs";
import "./modal.css";
import Modal from "./Modal";
function AvatarList({ avatarArr }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div style={{ paddingRight: "20px", fontSize: "20px", color: "#919191" }}>
        <Add onClick={() => setModal(true)} />
      </div>
      {modal ? (
        <Modal>
          <div className="modal">
            <form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                }}
              >
                <button onClick={() => setModal(false)}>No</button>
              </div>
              <div>
                <div>
                  <h1>Username</h1>
                  <input type="text" placeholder="Username" />
                </div>
                <div>
                  <h1>Username</h1>
                  <input type="text" placeholder="Username" />
                </div>
                <div>
                  {/* <div style={{ flexBasis: "100%" }}></div> */}
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
