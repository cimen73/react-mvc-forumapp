import React from 'react';

const AddPostView = ({ onInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>User name</label>
        <input
          onChange={(e) => onInputChange('user', e.target.value)}
          type="text"
          placeholder="Enter username"
        />
      </fieldset>

      <fieldset>
        <label>Title</label>
        <input
          onChange={(e) => onInputChange('title', e.target.value)}
          type="text"
          placeholder="Enter the title"
        />
      </fieldset>

      <fieldset>
        <label>Your message</label>
        <textarea
          onChange={(e) => onInputChange('text', e.target.value)}
          type="text"
          placeholder="Enter description"
          maxLength={'100'}
        />
      </fieldset>

      <button>Send</button>
    </form>
  );
};

export default AddPostView;