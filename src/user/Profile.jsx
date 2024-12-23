import { useState } from "react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 (123) 456-7890",
    bio: "Passionate event manager and enthusiast.",
    photo: "https://i.pinimg.com/736x/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg", // New photo URL
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a URL for the uploaded image
      const photoURL = URL.createObjectURL(file);
      setProfileData({ ...profileData, photo: photoURL });
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Save profile changes (e.g., send data to backend)
    alert("Profile updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="profile-container mx-auto max-w-md p-6 bg-white shadow rounded-lg">
      <div className="profile-header text-center mb-6">
        <img
          src={profileData.photo}
          alt="User Avatar"
          className="mx-auto rounded-full mb-4"
          width="100" // Specify the size of the avatar
        />
        {isEditing && (
          <div className="mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="border border-gray-300 rounded p-2"
            />
          </div>
        )}
        <h1 className="text-2xl font-bold text-gray-800">{profileData.name}</h1>
        <p className="text-gray-600">{profileData.email}</p>
      </div>

      <div className="profile-body">
        <div className="form-group mb-4">
          <label className="block text-gray-700 font-medium">Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          ) : (
            <p className="text-gray-800">{profileData.name}</p>
          )}
        </div>

        <div className="form-group mb-4">
          <label className="block text-gray-700 font-medium">Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          ) : (
            <p className="text-gray-800">{profileData.email}</p>
          )}
        </div>

        <div className="form-group mb-4">
          <label className="block text-gray-700 font-medium">Phone:</label>
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          ) : (
            <p className="text-gray-800">{profileData.phone}</p>
          )}
        </div>

        <div className="form-group mb-4">
          <label className="block text-gray-700 font-medium">Bio:</label>
          {isEditing ? (
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          ) : (
            <p className="text-gray-800">{profileData.bio}</p>
          )}
        </div>
      </div>

      <div className="profile-footer text-center">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={toggleEdit}
            className="bg-gray-800 text-white px-4 py-2 rounded shadow hover:bg-gray-900"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}
