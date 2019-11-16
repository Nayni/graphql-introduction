import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 16px;
`;

export const Card = styled.div`
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 12px 16px;
  margin-bottom: 20px;
`;

export const CardContext = styled.div``;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: #2e2e2e;
`;

export const SmallText = styled.span`
  font-size: 12px;
  color: #4d4d4d;
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 40px;
  margin-right: 8px;
`;

export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TextArea = styled.textarea`
  font-size: 14px;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  border: 1px solid #586e79;
  border-radius: 4px;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  border: 1px solid #586e79;
  border-radius: 4px;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h3`
  font-size: 18px;
  font-family: "Roboto", sans-serif;
`;

export const FormControl = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const FormActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const InputLabel = styled.label`
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  min-width: 100px;
  min-height: 45px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  color: #d0d8db;
  background-color: #3a474e;
  border-radius: 84px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #7f94a0;
  }

  &:active {
    background-color: #5a6f7a;
  }
`;

export const SubmitButtonLabel = styled.span``;
