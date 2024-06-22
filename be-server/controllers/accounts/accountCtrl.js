// REGISTER ACCOUNT
const createAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Create Account route" });
  } catch (error) {
    res.json(error); 
  }
};

// SINGLE ACCOUNT
const singleAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Single Account route" });
  } catch (error) {
    res.json(error);
  }
};

// ALL ACCOUNT
const allAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "All Accounts route" });
  } catch (error) {
    res.json(error);
  }
};

// DELETE ACCOUNT
const deleteAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Delete Account route" });
  } catch (error) {
    res.json(error);
  }
};

// UPDATE ACCOUNT
const updateAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Update Account route" });
  } catch (error) {
    res.json(error);
  }
};

export {
  createAccountCtrl,
  singleAccountCtrl,
  allAccountCtrl,
  deleteAccountCtrl,
  updateAccountCtrl,
};
