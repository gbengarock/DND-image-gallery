import React, { useState } from 'react';
import PictureList from '../gallery';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Gallery() {
  const [images, setImages] = useState(PictureList);
  const [searchTerm, setSearchTerm] = useState('');
  const [draggedImage, setDraggedImage] = useState(null);

  const handleDragStart = (imageId) => {
    setDraggedImage(imageId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (imageId) => {
    if (imageId !== draggedImage) {
      const updatedImages = images.slice();
      const draggedIndex = updatedImages.findIndex((image) => image.id === draggedImage);
      const dropIndex = updatedImages.findIndex((image) => image.id === imageId);

      [updatedImages[draggedIndex], updatedImages[dropIndex]] = [updatedImages[dropIndex], updatedImages[draggedIndex]];

      setImages(updatedImages);
    }
    setDraggedImage(null);
  };

  const filteredImages = images.filter((image) =>
    image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) || image.title.includes(searchTerm)
  );

  const { logout } = UserAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='m-3'>
      {/* Search input */}
      <div className='flex justify-between'>
        <input className='sm:w-[350px] p-2'
          type="text"
          placeholder="Search by tag..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleLogout} className='border px-6 py-1'>
          Logout
        </button>
      </div>
      {/* Display images with drag-and-drop support */}
      <div onDragOver={handleDragOver} className='w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-center py-8'>
        {filteredImages.map((image) => (
          <div
            key={image.id}
            draggable
            onDragStart={() => handleDragStart(image.id)}
            onDrop={() => handleDrop(image.id)}
          >
            <img src={image.url} alt={image.tags} title={image.title} className='w-full h-[300px]' />
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
