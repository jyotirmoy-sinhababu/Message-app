import React from 'react';
import { useState, useEffect } from 'react';

const Profile = () => {
  const [img, setImg] = useState('');
  return (
    <div>
      <div className='file-container'>
        <label>upload your photo</label>
        <form>
          <input
            type='file'
            accept='image/'
            id='photo'
            onChange={(e) => setImg(e.target.file[0])}
          />
          <button type='submit'>upload</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
