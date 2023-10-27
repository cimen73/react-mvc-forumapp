class AddPostModel {
 // Here we kept the initial version of the data that you will post to the API when the form is submitted.

  state = {
    id: new Date().getTime(),
    user: '',
    title: '',
    text: '',
  };
}

export default AddPostModel;
