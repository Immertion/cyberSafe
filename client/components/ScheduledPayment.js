import { useState } from 'react';

const ScheduledPayment = ({ onClose, onSchedule }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');

  const handleSchedule = () => {
    const currentDate = new Date();
    const selectedDate = new Date(date + 'T' + time);

    if (selectedDate <= currentDate) {
      setError('Нельзя выбрать дату в прошлом');
      return;
    }

    setError('');
    onSchedule(date, time);
    onClose();
  };

  return (
    <div className="scheduled-payment">
      <div className="modal-content">
        <h3>Scheduled payment</h3>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button onClick={handleSchedule}>Add</button>
        <button onClick={onClose}>Close</button>
      </div>

      <style jsx>{`
        .scheduled-payment {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.5);
          animation: fadeIn 0.3s forwards;
        }

        .modal-content {
          background: #1e1e2d;
          padding: 20px;
          border-radius: 8px;
          width: 300px;
          text-align: center;
          color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h3 {
          margin-bottom: 20px;
        }

        input {
          display: block;
          margin: 10px auto;
          padding: 8px;
          border: none;
          border-radius: 4px;
          background: #333;
          color: #fff;
        }

        .error {
          color: red;
          margin-top: 10px;
        }

        button {
          margin: 10px;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          background: #6200ea;
          color: #fff;
          cursor: pointer;
          transition: background 0.3s;
        }

        button:hover {
          background: #3700b3;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ScheduledPayment;
