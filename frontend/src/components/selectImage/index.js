import React, { useState } from 'react';
import jsonImages from './images.json';

export default function SelectFile({ catchUrlImage }) {
  const [image, setImage] = useState('')

  return (
    <>
      <ul>
        {
          jsonImages.map(item => <li onClick={() => {
            setImage(item.url);
            catchUrlImage(item.url);
          }} key={item.id}>
            <img className={image === item.url && 'active'} src={item.url} alt="avatar" />
          </li>
          )
        }
      </ul>
    </>
  );
}
