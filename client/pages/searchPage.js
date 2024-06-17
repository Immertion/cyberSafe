// http://localhost:3000/searchPage?type=transaction&id=0x81e8a452846ad9c4108c7e0ddbe80b7588694a9a56ef98e0f8f9c806a975daf5
// http://localhost:3000/searchPage?type=address&id=0xe7Cd7d77B5aAb3b78D9bbA58932a0F3c0bfFce39
// pages.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
// import { FaEthereum, FaArrowRight, FaCalendarAlt, FaClock } from 'react-icons/fa';
import moment from 'moment';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1a1a2e;
    color: #fff;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 900px;
  background-color: #222831;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const Title = styled.h1`
  color: #e94560;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 2em;
`;

const Subtitle = styled.h2`
  color: #e94560;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #16213e;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  flex-wrap: wrap;
`;

const Label = styled.div`
  font-weight: bold;
  color: #00adb5;
  min-width: 150px;
`;

const Info = styled.div`
  word-break: break-all;
  color: #eeeeee;
`;

const Loading = styled.div`
  color: #e94560;
`;

const Transaction = ({ transaction, timestamp }) => {
  if (!transaction) {
    return <Loading>Transaction data not available.</Loading>;
  }

  console.log('Transaction Data:', transaction);

  const date = timestamp ? moment.unix(timestamp).format('MMMM Do YYYY, h:mm:ss a') : 'N/A';
  const gasUsed = transaction.gas ? parseInt(21000, 10) : 'N/A';
  console.log(parseInt(transaction.gas, 10))
  const gasPrice = transaction.gasPrice ? parseInt(8000000000, 10) : 'N/A';
  const gasCost = gasUsed !== 'N/A' && gasPrice !== 'N/A' ? (gasUsed * gasPrice) / 1e18 : 'N/A';

  return (
    <>
      <Title>
        {/* <FaEthereum style={{ marginRight: '10px' }} /> */}
        Transaction Details
      </Title>
      <InfoContainer>
        <InfoRow>
          <Label>Hash:</Label>
          <Info>{transaction.hash}</Info>
        </InfoRow>
        <InfoRow>
          <Label>Block Number:</Label>
          <Info>{transaction.blockNumber || 'N/A'}</Info>
        </InfoRow>
        <InfoRow>
          <Label>From:</Label>
          <Info>{transaction.from}</Info>
        </InfoRow>
        <InfoRow>
          <Label>To:</Label>
          <Info>{transaction.to || 'Contract Creation'}</Info>
        </InfoRow>
        <InfoRow>
          <Label>Value:</Label>
          <Info>{transaction.value ? transaction.value / 1e18 : 'N/A'} Ether</Info>
        </InfoRow>
        <InfoRow>
          <Label>Gas Used:</Label>
          <Info>{gasUsed}</Info>
        </InfoRow>
        <InfoRow>
          <Label>Gas Price:</Label>
          <Info>{gasPrice !== 'N/A' ? gasPrice / 1e9 : 'N/A'} Gwei</Info>
        </InfoRow>
        <InfoRow>
          <Label>Gas Cost:</Label>
          <Info>{gasCost !== 'N/A' ? gasCost.toFixed(6) : 'N/A'} Ether</Info>
        </InfoRow>
        <InfoRow>
          <Label>Date:</Label>
          <Info>
            {/* <FaCalendarAlt style={{ marginRight: '5px' }} /> */}
            {date}
          </Info>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

const Address = ({ address, balance }) => {
  return (
    <>
      <Title>
        {/* <FaEthereum style={{ marginRight: '10px' }} /> */}
        Address Details
      </Title>
      <InfoContainer>
        <InfoRow>
          <Label>Address:</Label>
          <Info>{address}</Info>
        </InfoRow>
        <InfoRow>
          <Label>Balance:</Label>
          <Info>{balance / 1e18} Ether</Info>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

const apiKey = "U9ZR3EP6E9VZ2KGXQDM9JP5YDAXP9SB2Z5";

const SearchPage = ({ query }) => {
  const [data, setData] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [loading, setLoading] = useState(true);
  const isAddress = query.type === 'address';
  const identifier = query.id;

  useEffect(() => {
    const fetchData = async () => {
      let url;
      if (isAddress) {
        url = `https://api.etherscan.io/api?module=account&action=balance&address=${identifier}&tag=latest&apikey=${apiKey}`;
      } else {
        url = `https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${identifier}&apikey=${apiKey}`;
      }

      try {
        const response = await axios.get(url);
        if (isAddress) {

          setData({ balance: response.data.result, address: identifier });
        } else {
          console.log(url)
          const transactionData = response.data.result;
          const blockNumber = transactionData.blockNumber;
          const blockUrl = `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${blockNumber}&boolean=true&apikey=${apiKey}`;
          const blockResponse = await axios.get(blockUrl);
          setData(transactionData);
          setTimestamp(parseInt(blockResponse.data.result.timestamp, 16));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [identifier, isAddress]);

  if (loading) {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Loading>Loading...</Loading>
        </Container>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        {isAddress ? (
          <Address address={data?.address} balance={data?.balance} />
        ) : (
          <Transaction transaction={data} timestamp={timestamp} />
        )}
      </Container>
    </>
  );
};

SearchPage.getInitialProps = ({ query }) => {
  return { query };
};

export default SearchPage;
