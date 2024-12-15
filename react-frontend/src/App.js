import React, { useState } from 'react';
import './components/App.css';

function App() {
  const [content, setContent] = useState('');
  const [secondaryMenu, setSecondaryMenu] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);  // To hold selected device details
  const [selectedImages, setSelectedImages] = useState([]);    // To store selected images for preview

  const newImages = [
    'https://via.placeholder.com/200x300?text=Image+1',
    'https://via.placeholder.com/300x300?text=Image+2',
    'https://via.placeholder.com/250x300?text=Image+3',
    'https://via.placeholder.com/300x250?text=Image+4',
    'https://via.placeholder.com/400x300?text=Image+5',
    'https://via.placeholder.com/300x400?text=Image+6',
    'https://via.placeholder.com/350x300?text=Image+7',
    'https://via.placeholder.com/300x350?text=Image+8',
    'https://via.placeholder.com/450x300?text=Image+9',
    'https://via.placeholder.com/300x450?text=Image+10',
    'https://via.placeholder.com/400x400?text=Image+11',
    'https://via.placeholder.com/500x300?text=Image+12'
  ];

  const devices = [
    { 
      name: 'Device 1', 
      status: 'Online', 
      organization: 'Org A', 
      location: 'Office 1', 
      ipAddress: '192.168.1.1', 
      time: '2024-12-12 10:00 AM', 
      contentType: 'Video', 
      contentDetails: 'Live Streaming' 
    },
    { 
      name: 'Device 2', 
      status: 'Offline', 
      organization: 'Org B', 
      location: 'Office 2', 
      ipAddress: '192.168.1.2', 
      time: '2024-12-12 09:30 AM', 
      contentType: 'Audio', 
      contentDetails: 'Podcast Recording' 
    },
    { 
      name: 'Device 3', 
      status: 'Online', 
      organization: 'Org C', 
      location: 'Warehouse', 
      ipAddress: '192.168.1.3', 
      time: '2024-12-12 10:15 AM', 
      contentType: 'Image', 
      contentDetails: 'Product Photography' 
    },
    { 
      name: 'Device 4', 
      status: 'Offline', 
      organization: 'Org D', 
      location: 'Warehouse', 
      ipAddress: '192.168.1.4', 
      time: '2024-12-12 08:45 AM', 
      contentType: 'Text', 
      contentDetails: 'Blog Post Writing' 
    },
    { 
      name: 'Device 5', 
      status: 'Online', 
      organization: 'Org E', 
      location: 'Conference Room', 
      ipAddress: '192.168.1.5', 
      time: '2024-12-12 11:00 AM', 
      contentType: 'Presentation', 
      contentDetails: 'Team Meeting Slides' 
    }
  ];

  const showPreview = () => {
    // Clear the secondary menu to hide the secondary navigation bar
    setSecondaryMenu([]);
  
    if (!savedImages.length) {
      setContent(<p>No images saved. Please select and save images in the Management section.</p>);
      return;
    }
  
    // Send selected images to Electron for display
    if (window.electron && window.electron.openPreview) {
      window.electron.openPreview(savedImages);
    } else {
      console.error('Electron API is not available.');
    }
  
    setContent(
      <div className="preview-container">
        <h2>Saved Images</h2>
        <div className="management-container">
          {savedImages.map((src, index) => (
            <div key={index} className="grid-item">
              <img src={src} alt={`Saved Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };
    
  const showContentMenu = () => {
    setSecondaryMenu([
      'New Content',
      'Schedule',
      'Management'
    ]);
    setContent('Select an option from the secondary menu.');
  };

  const showDevicesMenu = () => {
    setSecondaryMenu(devices.map(device => device.name));  // Set device names to secondary menu
    setContent('Select a device from the secondary menu.');
  };

  const handleDeviceClick = (deviceName) => {
    const device = devices.find(d => d.name === deviceName);  // Find the device by name
    setSelectedDevice(device);  // Set the selected device for display

    setContent(
      <div className="device-details">
        <h2>{device.name}</h2>
        <p><strong>Organization:</strong> {device.organization}</p>
        <p><strong>Location:</strong> {device.location}</p>
        <p><strong>Status:</strong> {device.status}</p>
        <p><strong>IP Address:</strong> {device.ipAddress}</p>
        <p><strong>Last Active:</strong> {device.time}</p>
        <p><strong>Content Type:</strong> {device.contentType}</p>
        <p><strong>Content Details:</strong> {device.contentDetails}</p>
      </div>
    );
  };

  const showSchedule = () => {
    setSecondaryMenu([
      'New Content',
      'Schedule',
      'Management'
    ]);
    setContent(
      <div className="calendar-container">
        <h2>Schedule</h2>
        {/* Placeholder for calendar */}
        <div className="calendar-placeholder">
          <p>Large calendar will be displayed here.</p>
        </div>
      </div>
    );
  };

  const showNewContent = () => {
    setSecondaryMenu([
      'New Content',
      'Schedule',
      'Management'
    ]);
    setContent(
      <div className="new-content-container">
        <h2>New Content</h2>
        <div className="new-content-buttons">
          <button>Upload Picture</button>
          <button>Upload Video</button>
          <button>Draw</button>
          <button>Text</button>
          <button>Preview</button>
          <button>Save</button>
        </div>
      </div>
    );
  };

  const showManagement = () => {
    setSecondaryMenu([
      'New Content',
      'Schedule',
      'Management',
    ]);
    setContent(
      <div className="management-container">
        {newImages.map((image, index) => (
          <div
            key={index}
            className={`grid-item ${selectedImages.includes(index) ? 'selected' : ''}`}
            onClick={() => toggleSelection(index)}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
        <button
          className="save-button"
          onClick={saveSelectedImages}
          style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
        >
          Save Selection
        </button>
      </div>
    );
  };
  
  const toggleSelection = (index) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index) // Deselect if selected
        : [...prevSelected, index] // Add to selection
    );
  };
  

    const [savedImages, setSavedImages] = useState([]); // Add this state to hold saved images

    const saveSelectedImages = () => {
    if (selectedImages.length === 0) {
        setContent(<p>No images selected. Please select images to save.</p>);
        return;
    }

    const saved = selectedImages.map((index) => newImages[index]); // Map selected indexes to image URLs
    setSavedImages(saved); // Save selected images for Preview
    setContent(<p>Images saved successfully. You can view them in the Preview section.</p>);
    };

  
  
  return (
    <div className="app-container">
      <nav className="sidebar">
        <button className="nav-button" onClick={showPreview}>Preview</button>
        <button className="nav-button" onClick={showContentMenu}>Content</button>
        <button className="nav-button" onClick={showDevicesMenu}>Devices</button>
    </nav>

      {secondaryMenu.length > 0 && (
        <nav className="secondary-sidebar">
          {secondaryMenu.map((item, index) => (
            <button key={index} className="nav-button" onClick={() => {
              if (item === 'Schedule') showSchedule();
              else if (item === 'New Content') showNewContent();
              else if (item === 'Management') showManagement();
              else handleDeviceClick(item);
            }}>
              {item}
            </button>
          ))}
        </nav>
      )}
      <main className="main-content">
        {content || <p>Select an option from the navigation bar.</p>}
      </main>
    </div>
  );
}

export default App;
