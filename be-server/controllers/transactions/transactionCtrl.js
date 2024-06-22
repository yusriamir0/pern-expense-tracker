// POST TRANSACTION CONTROL
const createTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "Create transaction Route" });
  } catch (error) {
    res.json(error);
  }
};

// SINGLE TRANSACTION CONTROL
const singleTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "Single Transaction route" });
  } catch (error) {
    res.json(error);
  }
};

// ALL TRANSACTION CONTROL
const allTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "All Transactions route" });
  } catch (error) {
    res.json(error);
  }
};

// DELETE TRANSACTION CONTROL
const deleteTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "Delete Transaction route" });
  } catch (error) {
    res.json(error);
  }
};

// UPDATE TRANSACTION CONTROL
const updateTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "Update Transaction route" });
  } catch (error) {
    res.json(error);
  }
};

export {
  createTransactionCtrl,
  singleTransactionCtrl,
  allTransactionCtrl,
  deleteTransactionCtrl,
  updateTransactionCtrl,
};
