import { useEffect, useState } from 'react';
import ListPostsView from './ListPostsView';
import axios from 'axios';

const ListPostsController = () => {
  const [blogData, setBlogData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userPosts, setUserPosts] = useState([]);

  // pull post data
  useEffect(() => {
    axios
      .get('http://localhost:3030/posts')
      .then((res) => setBlogData(res.data));
  }, []);

  //It works when the user clicks on it
  const showUserPosts = (username) => {
   //show popup
    setShowPopup(!showPopup);

    // receiving posts belonging to the user as a parameter
    const filtred = blogData.filter((post) => post.user === username);

    // send to state
    setUserPosts(filtred);
  };

  return (
    <ListPostsView
      blogData={blogData}
      showUserPosts={showUserPosts}
      showPopup={showPopup}
      userPosts={userPosts}
      setShowPopup={setShowPopup}
    />
  );
};

export default ListPostsController;