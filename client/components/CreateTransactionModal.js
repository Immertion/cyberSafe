import { useState, useEffect } from 'react';

export default function TransactionCreatedModal({ transactionHash, onClose, inBlock, outBlock }) {
    const [isCopied, setIsCopied] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (transactionHash) {
            setIsLoading(false);
        }
    }, [transactionHash]);

    const handleCopy = () => {
        navigator.clipboard.writeText(transactionHash).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">Transaction Created</div>
                {isLoading ? (
                    <div className="spinner"></div>
                ) : (
                    <div className="modal-body">
                        <label>Transaction Hash:</label>
                        <div className="transaction-hash">{transactionHash}</div>
                        <button type="button" className="button-copy" onClick={handleCopy}>
                            {isCopied ? 'Copied!' : 'Copy'}
                        </button>
                        <div className="animation-container">
                            <img id="inBlock" src={inBlock} className="block-icon" />
                            <img id="outBlock" src={outBlock} className="block-icon" />
                            <div className="coin"></div>
                        </div>
                    </div>
                )}
                <button type="button" className="button-trans" onClick={onClose}>Close</button>
            </div>
            <style jsx>{`
                .modal {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.8);
                }

                .modal-content {
                    background-color: #2c2c2c;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                    width: 80%;
                    max-width: 500px;
                    color: white;
                }

                .modal-header {
                    font-size: 24px;
                    text-align: center;
                    margin-bottom: 20px;
                }

                .modal-body {
                    margin-bottom: 20px;
                }

                .transaction-hash {
                    word-break: break-all;
                    background-color: #1e1e1e;
                    padding: 10px;
                    border-radius: 5px;
                    margin-top: 10px;
                    font-family: monospace;
                    font-size: 14px;
                }

                .button-trans, .button-copy {
                    background-color: #5f27cd;
                    color: white;
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    width: 100%;
                    transition: background-color 0.3s ease;
                    margin-top: 10px;
                }

                .button-trans:hover, .button-copy:hover {
                    background-color: #7a5cbd;
                }

                .spinner {
                    border: 4px solid rgba(255, 255, 255, 0.3);
                    border-left-color: #ffffff;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                    margin: 0 auto;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .animation-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 20px;
                    position: relative;
                    height: 60px;
                }

                .block-icon {
                    width: 60px;
                    height: 60px;
                    border-radius: 10%;
                    z-index: 2;
                }

                .coin {
                    width: 30px;
                    height: 30px;
                    background-color: gold;
                    border-radius: 50%;
                    position: absolute;
                    left: 0;
                    animation: moveCoin 3s infinite ease-in-out;
                    z-index: 1;
                }

                @keyframes moveCoin {
                    0% { transform: translateX(0); }
                    45% { transform: translateX(220px); }
                    50% { transform: translateX(220px); }
                    95% { transform: translateX(0); }
                    100% { transform: translateX(0); }
                }
            `}</style>
        </div>
    );
}
