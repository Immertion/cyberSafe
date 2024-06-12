import { useState } from 'react';

const SupportButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSupportWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="supportButtonContainer">
      <button className="supportButton" onClick={toggleSupportWindow}>
        ?
      </button>
      {isOpen && (
        <div className="supportWindow">
          <textarea placeholder="If you find a bug, please write it here and send it" />
          <button className="sendButton">Send</button>
        </div>
      )}

        <style jsx>
            {`
            .supportButtonContainer {
                position: fixed;
                bottom: 20px;
                right: 20px;
              }
              
              .supportButton {
                width: 50px;
                height: 50px;
                background-color: #6200ea;
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 24px;
                cursor: pointer;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                transition: background-color 0.3s;
              }
              
              .supportButton:hover {
                background-color: #3700b3;
              }
              
              .supportWindow {
                position: fixed;
                bottom: 80px;
                right: 20px;
                width: 300px;
                padding: 20px;
                background-color: #222;
                box-shadow: 0 4px 8px rgba(0, 0, 100, 0.2);
                border-radius: 10px;
                z-index: 1000;
              }
              
              .supportWindow textarea {
                width: 100%;
                height: 100px;
                padding: 10px;
                color: white;
                background-color: #333333;
                margin-bottom: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
              }

              .supportWindow input {
                background-color: #ffffff;
  
              }
              
              .sendButton {
                width: 100%;
                padding: 10px;
                background-color: #6200ea;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s;
              }
              
              .sendButton:hover {
                background-color: #3700b3;
              }
            `}
        </style>
    </div>
  );
};

export default SupportButton;
