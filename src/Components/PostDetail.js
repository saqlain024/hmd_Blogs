import React, { useState, useEffect } from 'react';
import { firestore } from '../firebaseConfig';
import { useParams } from 'react-router-dom';
import Radium from 'radium';

function PostDetail() {
  const [posts, setPosts] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    firestore
      .collection('post')
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log('snapshot', snapshot.data());
        setPosts(snapshot.data());
      });
  }, []);

  return (
    <div className="post-detail">
      <h1 style={styles.heading}>{posts.title}</h1>
      <p>{posts.content}</p>
    </div>
  );
}

export default Radium(PostDetail);

const styles = {
  heading: {
    textAlign: 'center',
    
    ':hover' : {
       color: 'red',      // radium not working in latest react better not doing it
    },
  },
};