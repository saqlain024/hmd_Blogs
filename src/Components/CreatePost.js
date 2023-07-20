import React, { useState } from 'react';
import { firestore } from '../firebaseConfig';
import { useFormInput } from './hooks';

import classes from "./Button.module.css";

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
          <textarea {...content}></textarea>{' '}
          {/*value={content} onChange={(e) => setContent(e.target.value)} */}
        </div>

        <button className={classes.createPostBtn }>Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
