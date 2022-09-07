import React from 'react';
import { useState, useEffect } from 'react';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '../../Firebase';

const Profile = () => {
  const [img, setImg] = useState('');

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const imgRef = ref(storage, `avatar/${new Date().getTime()}.${img.name}`);
      const snap = await uploadBytes(imgRef, img);
    } catch (err) {
      console.error('error');
    }
  };

  return (
    <div>
      <div className='file-container'>
        <label>upload your photo</label>
        <div className='img-container'>
          <img src={img} alt='avatar' />
        </div>
        <form
          className='form-container'
          onSubmit={(e) => {
            handelSubmit(e);
          }}
        >
          <input
            type='file'
            accept='image/'
            id='photo'
            onChange={(e) => setImg(e.target.files[0])}
          />
          <button type='submit'>upload</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
