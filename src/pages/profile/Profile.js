import React from 'react';
import { useState, useEffect } from 'react';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '../../Firebase';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './profile.css';

const Profile = () => {
  const [img, setImg] = useState();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const imgRef = ref(
      storage,
      `CameraAltIcon/${new Date().getTime()}-${img.name}`
    );
    const snap = await uploadBytes(imgRef, img);
    console.log(snap);
  };
  return (
    <div>
      <div className='file-container'>
        <form
          className='form-container'
          onSubmit={(e) => {
            handelSubmit(e);
          }}
        >
          <label className='label-container'>
            {<img className='img-label' src={img} alt='set image' />}
            <input
              type='file'
              accept='image'
              id='photo'
              onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
            />
          </label>

          <button className='upload-btn' type='submit'>
            upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
