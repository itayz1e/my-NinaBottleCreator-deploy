import jwt from 'jsonwebtoken'

export const login = async (req: any, res: any) => {
  try {
    const secret = process.env.VITE_PASSWORD;
    const { password } = req.body;

    if (password !== secret) {
      res.status(401).send({
        error: 'Password is incorrect',
      });
      return;
    }
    const token = jwt.sign({ accessToken: password }, secret);

    res.status(200).send({ token });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

