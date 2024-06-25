// LOGIN USER CONTROL
const loginUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "Login User route" });
  } catch (error) {
    res.json(error);
  }
};

export { loginUserCtrl };
