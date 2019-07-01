import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-image: url('https://s3.amazonaws.com/bootcamp.fs/fundo.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Content = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 1));

  form {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 10px;
    background: #fff;
    font-size: 15px;
    padding: 0 20px;
    margin: 30px 0 10px 0;
    border: 0;

    &.pass {
      margin: 0;
    }
  }

  button {
    width: 100%;
    height: 45px;
    border-radius: 10px;
    background: #e5293e;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    border: 0;
  }

  img {
    width: 72px;
    height: 72px;
  }

  p {
    margin-top: 5px;
    color: #fff;
  }
`;
