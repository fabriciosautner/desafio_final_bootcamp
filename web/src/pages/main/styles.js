import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.div`
  width: 700px;
  padding: 40px 0;

  div.order {
    margin: 15px 0;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 1em #ccc;

    div {
      &:first-child {
        display: flex;
        flex-direction: column;
        padding-bottom: 15px;

        small {
          color: #706e7b;
          font-size: 11px;
          padding: 5px 1px;
        }
      }
    }

    ul {
      list-style: none;
      padding-top: 15px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      margin-bottom: 15px;

      li {
        border: 1px solid #ddd;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        padding: 10px;
        width: 205px;
        margin-right: 15px;
        margin-bottom: 15px;

        img {
          width: 60px;
          height: 60px;
        }

        div {
          padding: 10px 10px 0 10px;
        }

        p {
          font-size: 13px;
        }

        small {
          font-size: 11px;
          color: #706e7b;
        }
      }
    }

    p {
      &:last-child {
        color: #706e7b;
        font-size: 14px;
      }
    }
  }
`;
