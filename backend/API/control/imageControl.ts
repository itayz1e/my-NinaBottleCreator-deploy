export async function seveImage(req: any, res: any) {
  try {
    const { seveImage } = req.body;
    return res.status(200);
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
