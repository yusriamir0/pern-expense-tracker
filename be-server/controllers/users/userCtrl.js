// LOGIN USER CONTROL
const loginUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "Login User route" });
  } catch (error) {
    res.json(error);
  }
};

// PROFILE USER CONTROL
const profileUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "Profile User route" });
  } catch (error) {
    res.json(error);
  }
};

// DELETE USER CONTROL
const deleteUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "Delete User route" });
  } catch (error) {
    res.json(error);
  }
};

// UPDATE USER CONTROL
const updateUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "Update User route" });
  } catch (error) {
    res.json(error);
  }
};

export { loginUserCtrl, profileUserCtrl, deleteUserCtrl, updateUserCtrl };
