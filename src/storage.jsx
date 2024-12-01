import { useState, useEffect } from "react";
import "./storage.css";

export const Storage = () => {
  const [localInputs, setLocalInputs] = useState([]);
  const [sessionInputs, setSessionInputs] = useState([]);
  const [notification, setNotification] = useState({ show: false, message: "", success: true });
  const [currentTime, setCurrentTime] = useState("");

 
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", { hour12: true });
      setCurrentTime(timeString);
    };

    updateTime(); 
    const timer = setInterval(updateTime, 1000); 
    return () => clearInterval(timer); 
  }, []);

  
  useEffect(() => {
    const loadLocalInputs = () => {
      const keys = Object.keys(localStorage).filter((key) => key.startsWith("localValue_"));
      const loadedInputs = keys.map((key) => ({
        id: key.replace("localValue_", ""),
        value: localStorage.getItem(key),
        disabled: true,
      }));
      setLocalInputs(loadedInputs);
    };

    const loadSessionInputs = () => {
      const keys = Object.keys(sessionStorage).filter((key) => key.startsWith("sessionValue_"));
      const loadedInputs = keys.map((key) => ({
        id: key.replace("sessionValue_", ""),
        value: sessionStorage.getItem(key),
        disabled: true,
      }));
      setSessionInputs(loadedInputs);
    };

    loadLocalInputs();
    loadSessionInputs();
  }, []);

 
  const showNotification = (message, success) => {
    setNotification({ show: true, message, success });
    setTimeout(() => setNotification({ show: false, message: "", success: true }), 3000);
  };

  const handleLocalSave = (id, value) => {
    if (value.trim() === "") {
      showNotification("Value cannot be empty", false);
      return;
    }
    localStorage.setItem(`localValue_${id}`, value);
    setLocalInputs((prev) =>
      prev.map((input) => (input.id === id ? { ...input, disabled: true } : input))
    );
    showNotification("Saved to Local Storage", true);
  };

  const handleLocalEdit = (id) => {
    setLocalInputs((prev) =>
      prev.map((input) =>
        input.id === id ? { ...input, disabled: false } : input
      )
    );
    showNotification("Editing Enabled", true);
  };

  const handleLocalRemove = (id) => {
    localStorage.removeItem(`localValue_${id}`);
    setLocalInputs((prev) => prev.filter((input) => input.id !== id));
    showNotification("Removed from Local Storage", true);
  };

  const handleLocalAdd = () => {
    setLocalInputs((prev) => [
      ...prev,
      { id: Date.now().toString(), value: "", disabled: false },
    ]);
  };


  const handleSessionSave = (id, value) => {
    if (value.trim() === "") {
      showNotification("Value cannot be empty", false);
      return;
    }
    sessionStorage.setItem(`sessionValue_${id}`, value);
    setSessionInputs((prev) =>
      prev.map((input) => (input.id === id ? { ...input, disabled: true } : input))
    );
    showNotification("Saved to Session Storage", true);
  };

  const handleSessionEdit = (id) => {
    setSessionInputs((prev) =>
      prev.map((input) =>
        input.id === id ? { ...input, disabled: false } : input
      )
    );
    showNotification("Editing Enabled", true);
  };

  const handleSessionRemove = (id) => {
    sessionStorage.removeItem(`sessionValue_${id}`);
    setSessionInputs((prev) => prev.filter((input) => input.id !== id));
    showNotification("Removed from Session Storage", true);
  };

  const handleSessionAdd = () => {
    setSessionInputs((prev) => [
      ...prev,
      { id: Date.now().toString(), value: "", disabled: false },
    ]);
  };

  return (
    <div className="container">

      <div className="clock">{currentTime}</div>

   
      {notification.show && (
        <div className={`notification ${notification.success ? "success" : "error"}`}>
          <span>{notification.success ? "✔" : "✖"}</span>
          <p>{notification.message}</p>
        </div>
      )}

      <h1>Custom Hooks</h1>
      <hr />

 
      <div className="storage">
        <h2>Local Storage:</h2>
        {localInputs.map((input) => (
          <div key={input.id} className="input-group">
            <input
              type="text"
              placeholder="Enter a Local Value"
              value={input.value}
              onChange={(e) =>
                setLocalInputs((prev) =>
                  prev.map((i) =>
                    i.id === input.id ? { ...i, value: e.target.value } : i
                  )
                )
              }
              disabled={input.disabled}
            />
            <button onClick={() => handleLocalSave(input.id, input.value)}>Save</button>
            <button onClick={() => handleLocalEdit(input.id)}>Edit</button>
            <button className="remove" onClick={() => handleLocalRemove(input.id)}>Remove</button>
          </div>
        ))}
        <button onClick={handleLocalAdd} className="add-button">Add</button>
      </div>

      <div className="storage">
        <h2>Session Storage:</h2>
        {sessionInputs.map((input) => (
          <div key={input.id} className="input-group">
            <input
              type="text"
              placeholder="Enter a Session Value"
              value={input.value}
              onChange={(e) =>
                setSessionInputs((prev) =>
                  prev.map((i) =>
                    i.id === input.id ? { ...i, value: e.target.value } : i
                  )
                )
              }
              disabled={input.disabled}
            />
            <button onClick={() => handleSessionSave(input.id, input.value)}>Save</button>
            <button onClick={() => handleSessionEdit(input.id)}>Edit</button>
            <button className="remove" onClick={() => handleSessionRemove(input.id)}>Remove</button>
          </div>
        ))}
        <button onClick={handleSessionAdd} className="add-button">Add</button>
      </div>
    </div>
  );
};
