import React, { useState } from 'react';
import { Avatar, IconButton, Modal, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './Myprofile.scss';

const Myprofile = () => {
    const [activeSection, setActiveSection] = useState('basicInfo');
    const [profile, setProfile] = useState({
        title: 'Job Title',
        image: '',
    });
    const [modalOpen, setModalOpen] = useState(false);

    const handleTitleChange = (e) => {
        setProfile({ ...profile, title: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile({ ...profile, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const renderSectionContent = () => {
        switch (activeSection) {
            case 'basicInfo':
                return <div>Basic Information Form</div>;
            case 'contactInfo':
                return <div>Contact Information Form</div>;
            case 'education':
                return <div>Education Form</div>;
            case 'skills':
                return <div>My Skills Form</div>;
            case 'experience':
                return <div>My Experience Form</div>;
            default:
                return null;
        }
    };

    return (
        <div className='Myprofile'>
            <div className='sidebar'>
                <div className='profile-header'>
                    <label htmlFor='file-input' className='profile-image-container'>
                        <Avatar
                            src={profile.image || 'default-avatar.png'}
                            alt='Profile'
                            className='profile-image'
                            sx={{ width: 80, height: 80 }}
                        />
                        <input
                            id='file-input'
                            type='file'
                            accept='image/*'
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                    </label>
                    <h2>
                        {profile.title}
                    </h2>
                    <IconButton
                        onClick={handleModalOpen}
                        style={{ position: 'absolute', top: '10px', right: '10px' }}
                    >
                        <EditIcon />
                    </IconButton>
                </div>
                <nav className='sidebar-links'>
                    <IconButton onClick={() => setActiveSection('basicInfo')} variant="outlined">
                        Basic Information
                    </IconButton>
                    <IconButton onClick={() => setActiveSection('contactInfo')} variant="outlined">
                        Contact Information
                    </IconButton>
                    <IconButton onClick={() => setActiveSection('education')} variant="outlined">
                        Education
                    </IconButton>
                    <IconButton onClick={() => setActiveSection('skills')} variant="outlined">
                        My Skills
                    </IconButton>
                    <IconButton onClick={() => setActiveSection('experience')} variant="outlined">
                        My Experience
                    </IconButton>
                </nav>
            </div>
            <div className='content-area'>
                {renderSectionContent()}
            </div>

            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="edit-profile-title"
                aria-describedby="edit-profile-description"
            >
                <Box sx={{
                    width: 300,
                    bgcolor: 'background.paper',
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 24,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <h2 id="edit-profile-title">Edit Profile</h2>
                    <input
                        type='text'
                        value={profile.title}
                        onChange={handleTitleChange}
                        style={{ width: '100%', marginBottom: '10px' }}
                        placeholder='Job title'
                    />
                    <label htmlFor='file-input-edit' style={{ display: 'block', marginBottom: '10px' }}>
                        Change Image:
                        <input
                            id='file-input-edit'
                            type='file'
                            accept='image/*'
                            onChange={handleImageChange}
                            style={{ display: 'block' }}
                        />
                    </label>
                    <IconButton onClick={handleModalClose} color="primary">Save</IconButton>
                </Box>
            </Modal>
        </div>
    );
};

export default Myprofile;
