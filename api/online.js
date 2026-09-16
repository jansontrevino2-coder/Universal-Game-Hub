let users = 0;

export default function handler(req, res) {
    if (req.method === "GET") {
        users++;
        setTimeout(() => users--, 15000); // user expires after 15 seconds
        res.status(200).json({ count: users });
    }
}
