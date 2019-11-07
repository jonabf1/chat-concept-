import styled from 'styled-components';


export const Container = styled.div`


`
export const SubmitButton1 = styled.button`
  border: 1px solid #eee;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 18px;
  background: #26262b;
  color: #fff;
  box-shadow: 0 0 20px rgba(1, 0, 0, 0.1);

  &:hover {
    background: #222227;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
  }

  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

export const SubmitButton2 = styled.button`
  border: 1px solid #eee;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 18px;
  background: #9B7FE9;
  color: #fff;
  box-shadow: 0 0 20px rgba(1, 0, 0, 0.1);

  &:hover {
    background: #8C72D2;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
  }

  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;
