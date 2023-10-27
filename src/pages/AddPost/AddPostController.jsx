import AddPostView from './AddPostView';
import AddPostModel from './AddPostModel';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPostController = () => {
  // Creating an instance from the model class.
  const model = new AddPostModel();
  const navigate = useNavigate();

  // We will keep the state of the form here
  const [formState, setFormState] = useState(model.state);

  // Function to take the data types and values of the inputs and transfer them to the state
  const onInputChange = (label, value) => {
    // copy state
    let copyState = { ...formState };

    // It updates the matching property in the copy state according to the label value we receive.
    copyState[label] = value;

    // update real state
    setFormState(copyState);
  };

  //   form submission event
  const handleSubmit = (e) => {
    e.preventDefault();

    const letters = /^[A-Za-z]+$/;

    // Checking if the form is empty
    if (!formState.user || !formState.text || !formState.title) {
      alert('Fill Out the Form');
      return;
    } else if (!formState.user.match(letters)) {
      alert('Username cannot contain numbers and special characters');
      return;
    }

    // If the conditions are passed, do not send an API post. If the form is sent successfully, redirect to the home page.
    axios
      .post('http://localhost:3030/posts', formState)
      .then(() => navigate('/'));
  };

  return (
    <AddPostView
      onInputChange={onInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddPostController;