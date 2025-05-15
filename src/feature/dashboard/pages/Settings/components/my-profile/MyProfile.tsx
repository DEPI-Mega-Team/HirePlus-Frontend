
const MyProfile = () => {

    return (
        <div>
            <div>
                <h1>Basic Information</h1>
                <p>This is your personal information that you can update anytime.</p>
            </div>
            <div>
                <div>
                    <h2>Profile Photo</h2>
                    <p>This image will be shown publicly as your profile picture, it will help recruiters recognize you!</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <input type="file" name="" id="" />
                </div>
            </div>
            <div>
                <h2>Personal Details</h2>
                <div>
                    <div>
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Email Address</label>
                        <input type="email" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Birth Date</label>
                        <input type="date" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Gender</label>
                        <select name="" id="">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h2>Account Type</h2>
                    <p>You can update your account type</p>
                </div>
                <div>
                    <input type="radio" />
                    <label htmlFor="">Job Seeker</label>

                    <input type="radio" />
                    <label htmlFor="">Employer</label>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;