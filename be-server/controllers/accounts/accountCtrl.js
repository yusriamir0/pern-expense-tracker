// CREATE ACCOUNT CONTROL
const createAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Create Account route" });
  } catch (error) {
    res.json(error);
  }
};

// SINGLE ACCOUNT CONTROL
const singleAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Single Account route" });
  } catch (error) {
    res.json(error);
  }
};

// ALL ACCOUNT CONTROL
const allAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "All Accounts route" });
  } catch (error) {
    res.json(error);
  }
};

// DELETE ACCOUNT CONTROL
const deleteAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Delete Account route" });
  } catch (error) {
    res.json(error);
  }
};

// UPDATE ACCOUNT CONTROL
const updateAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Update Account route" });
  } catch (error) {
    res.json(error);
  }
};
