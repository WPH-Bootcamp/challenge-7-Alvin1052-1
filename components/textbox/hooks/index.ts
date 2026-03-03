'use client';
import { useState } from 'react';

const useTextbox = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return { show, handleShow };
};
export default useTextbox;
