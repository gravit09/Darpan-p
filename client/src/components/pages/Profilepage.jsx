// ProfilePage.js
import React, { useState } from "react";
import "./css/profilepage.css";
import Nav from "../templates/Nav";

const initialProfileData = {
  name: "John Doe",
  email: "john.doe@example.com",
  // Add more profile information as needed
};

const Profilepage = () => {
  const [profileData, setProfileData] = useState(initialProfileData);
  const [activeSection, setActiveSection] = useState("profileDetails");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleResetPassword = () => {
      // Implement password reset logic here
      console.log("Password reset:", { password, confirmPassword });
    };

    return (
      <div
        className={`profile-section ${
          activeSection === "resetPassword" ? "active" : ""
        }`}
      >
        <h2>Reset Password</h2>
        <div className="reset-password-form">
          <label htmlFor="password">Old Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword">New Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleResetPassword}>Reset Password</button>
        </div>
      </div>
    );
  };

  const ProfileUpdate = () => {
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const handleProfileUpdate = () => {
      // Implement profile update logic here
      console.log("Profile updated:", { newName, newEmail });
    };

    return (
      <div
        className={`profile-section ${
          activeSection === "profileUpdate" ? "active" : ""
        }`}
      >
        <h2>Profile Update</h2>
        <div className="profile-update-form">
          <label htmlFor="newName">New Name:</label>
          <input
            type="text"
            id="newName"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <label htmlFor="newEmail">New phone:</label>
          <input
            type="phone"
            id="newPhone"
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <label htmlFor="prodile">New profile:</label>
          <input type="file" id="profile" name="profile" />
          <button onClick={handleProfileUpdate}>Update Profile</button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Nav></Nav>
      <div className="profile-container">
        <div className="sidebar">
          <button onClick={() => handleSectionChange("profileDetails")}>
            Profile Details
          </button>
          <button onClick={() => handleSectionChange("resetPassword")}>
            Reset Password
          </button>
          <button onClick={() => handleSectionChange("profileUpdate")}>
            Profile Update
          </button>
        </div>
        <div className="content">
          <h1>My Profile</h1>
          {activeSection === "profileDetails" && (
            <div className="card-body">
              <div className="card-holder">
                <div class="card">
                  <div class="card-body">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Profile Image"
                      class="profile-image"
                    />
                    <div class="contact-info">
                      <span class="contact-label">Name:</span>
                      <div class="contact-value">John Doe</div>
                    </div>
                    <div class="contact-info">
                      <span class="contact-label">Email:</span>
                      <div class="contact-value">john.doe@example.com</div>
                    </div>
                    <div class="contact-info">
                      <span class="contact-label">Phone:</span>
                      <div class="contact-value">123-456-7890</div>
                    </div>
                    <div class="contact-info">
                      <span class="contact-label">Major:</span>
                      <div class="contact-value">Computer Science</div>
                    </div>
                    <div class="contact-info">
                      <span class="contact-label">Address:</span>
                      <div class="contact-value">G.L.A University Mathura</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h2>Subject Marks</h2>
                  </div>
                  <div className="card-body">
                    <div className="subject-info">
                      <span className="subject-label">Apptitude:</span>
                      <span>80%</span>
                      <div className="bar-container">
                        <div className="bar" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div className="subject-info">
                      <span className="subject-label">Operating System:</span>
                      <span>75%</span>
                      <div className="bar-container">
                        <div className="bar" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div className="subject-info">
                      <span className="subject-label">Python:</span>
                      <span>90%</span>
                      <div className="bar-container">
                        <div className="bar" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div className="subject-info">
                      <span className="subject-label">Java:</span>
                      <span>60%</span>
                      <div className="bar-container">
                        <div className="bar" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h2>Upcoming Tests</h2>
                  </div>
                  <div className="card-body">
                    <div className="upcoming-test">
                      <h3>Apptitude:</h3>
                      <span>Time Left: 13days</span>
                      <p className="test-link" to="">
                        Go to test{" "}
                      </p>
                    </div>
                    <div className="upcoming-test">
                      <h3>Java:</h3>
                      <span>Time Left: 3days</span>
                      <p className="test-link" to="">
                        Go to test{" "}
                      </p>
                    </div>
                    <div className="upcoming-test">
                      <h3>Python:</h3>
                      <span>Time Left: 07days</span>
                      <p className="test-link" to="">
                        Go to test{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeSection === "resetPassword" && <ResetPassword />}
          {activeSection === "profileUpdate" && <ProfileUpdate />}
        </div>
      </div>
    </>
  );
};

export default Profilepage;
