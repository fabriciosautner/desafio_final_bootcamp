import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #0b1f31;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 200px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    p.title {
      margin-left: 15px;
    }
  }

  img {
    width: 32px;
    height: 32px;
  }

  p {
    font-size: 16px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;

    li {
      text-align: right;
      border-right: 1px solid #3a4b5a;
      padding-right: 20px;

      &:last-child {
        padding-left: 20px;
        padding-right: 0;
        border: 0;

        div {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #e5293e;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      a {
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        opacity: 0.6;
      }
    }
  }
`;
