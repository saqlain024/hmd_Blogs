import React, { useState } from 'react';
import { firestore } from '../firebaseConfig';
import { useFormInput } from './hooks';
import { styled, css } from 'styled-components';
// import classes from "./Button.module.css";

const StyledButton = styled.button`
  height: 33px;
  background: ${(props) => (props.primary ? '#4caf50' : 'blue')};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;

  ${(props) => 
    props.primary && 
    css`
      border: 6px solid ${props.bgColor};
    `
  };

`;

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log('title', title);
    console.log('SubTitle', subTitle);
    console.log('content', content);

    firestore.collection('post').add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
          {/*value={content} onChange={(e) => setContent(e.target.value)} */}
        </div>

        <StyledButton primary bgColor="yellow">Create Post</StyledButton>
        {/* <StyledButton>Create Post</StyledButton> */}

      </form>
    </div>
  );
}

export default CreatePost;
